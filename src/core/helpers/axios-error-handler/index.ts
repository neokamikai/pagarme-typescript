import { AxiosError } from 'axios';

const axiosErrorHandler = (error: AxiosError) => {
  const { response } = error;
  if (response) return response;
  return error;
};

export default axiosErrorHandler;
