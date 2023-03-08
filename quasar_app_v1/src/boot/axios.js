import { boot } from 'quasar/wrappers'
import axios from 'axios'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
// axios.defaults.withCredentials = true
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
const api = axios.create()

// api.interceptors.response.use(
// (response) => {
//   return response;
// },
// (error) => {
//   if (error.response.status === 401) {
//     router.replace('/login');
//     return new Promise(() => {});
//   }
//   else
//     return Promise.reject(error);
// });

// axios.interceptors.request.use((request)=>{
//   request.headers['X-CSRFToken'] = Cookies.get('_csrf_token');
//   return request;
// });


export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }
