import axiosInstance from '@/api/axios';
import useSpinnerStore from '@/store/common/useSpinnerStore';
import { useEffect } from 'react';

export const useAxiosinterceptor = () => {
  const { activeLoading, inactiveLoading } = useSpinnerStore([
    'activeLoading',
    'inactiveLoading',
  ]);
  // const { accessToken } = useLoginUserInfoStore(['accessToken']);

  const trueIsLoading = () => {
    activeLoading();
  };
  const falseIsLoading = () => {
    inactiveLoading();
  };

  /**
   * Request Success Handler
   */
  const requestSuccessHandler = (config) => {
    // config.headers.Authorization = `${accessToken}`;
    trueIsLoading();
    return config;
  };

  /**
   * Request Fail Handler
   */
  const requestErrorHandler = (err) => {
    falseIsLoading();
    return Promise.reject(err);
  };

  /**
   * Response Success Handler
   */
  const responseSuccessHandler = (res) => {
    falseIsLoading();
    return res;
  };

  /**
   * Response Fail handler
   */
  const responseErrorHandler = (err) => {
    falseIsLoading();

    const resultCode = err.response?.data?.code;
    const resultErrMessage = err.response?.data?.message;

    // switch (resultCode) {
    //   case ERROR_CODE.EXPIRE_SESSION:
    //     break;
    // }

    // showToast({message: resultErrMessage})

    return Promise.reject(err);
  };

  /**
   * Axios Request Middleware
   */
  const requestInterceptor = axiosInstance.interceptors.request.use(
    (config) => requestSuccessHandler(config),
    (err) => requestErrorHandler(err),
  );

  // /**
  //  * Axios Response Middleware
  //  */
  const responseInterceptor = axiosInstance.interceptors.response.use(
    (res) => responseSuccessHandler(res),
    (err) => responseErrorHandler(err),
  );

  useEffect(() => {
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [responseInterceptor, requestInterceptor]);
};
