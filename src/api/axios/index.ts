import axios from 'axios';

// export const wantpicApi = '/api/wantpic?url=/api';
// export const wantpicAdminApi = '/api/wantpic?url=/admin/api';

/**
 * Axios 객체
 */
const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
