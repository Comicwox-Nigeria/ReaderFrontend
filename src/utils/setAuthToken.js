import axios from 'axios';

const setAuthToken = readerToken => {
  if (readerToken) {
      // Apply to every request
      // axios.defaults.headers.common['Authorization'] = readerToken;

  } else {
  //    Delete Auth Header
      delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
