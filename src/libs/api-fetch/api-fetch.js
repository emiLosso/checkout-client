import 'whatwg-fetch';
import fetchDefaults from 'fetch-defaults';
// import { Cookies } from 'react-cookie';

// const cookies = new Cookies();

const apiFetch = fetchDefaults(fetch, {
  // credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
    // 'x-csrftoken': cookies.get('csrftoken')
  },
})

export default apiFetch;
