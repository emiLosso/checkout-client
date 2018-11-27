import apiFetch from '../api-fetch/api-fetch';
import $ from 'jquery';
import PubSub from 'pubsub-js';


const FetchUtil = {
    fetchById: url => FetchUtil.fetchData(url, 'POST'),

    post: (url, data=null) => FetchUtil.fetchData(url, 'POST', data),
    
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
                    throw new Error(`${Object.keys(r.errors).map(k => r.errors[k]).join(" ")}`)

                  return r;
              })
              .catch(e => { PubSub.publish('errors', e); return false });
    }

}

export default FetchUtil;