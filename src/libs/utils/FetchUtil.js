import apiFetch from '../api-fetch/api-fetch';
import $ from 'jquery';
// import Auth from '../auth/auth';

import PubSub from 'pubsub-js';


const FetchUtil = {
    fetchById: url => FetchUtil.fetchData(url, 'POST'),

    post: (url, data=null) => FetchUtil.fetchData(url, 'POST', data),

    postForm: (url, params=null) => {
      let form = document.createElement("form");
      form.setAttribute("method", "POST");
      form.setAttribute("action", url);

      for(const key in params) {
          if(params.hasOwnProperty(key)) {
              let hiddenField = document.createElement("input");
              hiddenField.setAttribute("type", "hidden");
              hiddenField.setAttribute("name", key);
              hiddenField.setAttribute("value", params[key]);
              form.appendChild(hiddenField);
          }
      }

      document.body.appendChild(form);
      form.submit();
    },
    
    put: (url, data=null, file=false) => FetchUtil.fetchData(url, 'PUT', data, file),

    get: url => FetchUtil.fetchData(url),

    sendFile: (url, fileData, cb) => {
      $.ajax({
          url: url,
          data: fileData,
          cache: false,
          contentType: false,
          processData: false,
          method: 'PUT',
          type: 'PUT',
          success: cb,
          error: e => PubSub.publish('errors', e)
      });
    },

    fetchData: (url, method='GET', data=null, file=false) => {
      const options = Object.assign({},
    	  // { headers: Auth.getAuthHeader() },
    	  {method: method},
        file ? {headers: {'Content-Type': 'multipart/form-data'}} : null,
        data ? {body: file ? data : JSON.stringify(data)} : null
        
      );

      return apiFetch(url, options)
            	.then(r => {
                  if (r.status === 403)
                    throw new Error("Forbidden")
                  return r.json()
              })
              .then(r => {
                  if (r.status_code === 400)
                    throw(r.errors)

                  return r;
              })
            	.catch(e => { PubSub.publish('errors', e); return false });
    }

}

export default FetchUtil;