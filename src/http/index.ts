import axios from 'axios';

interface iRequest {
  url: string;
  method: string;
  data: any;
}

const axiosRequest = ({ url, method, data }: iRequest) => {
  const response = axios({
    method,
    url,
    data,
  });
  return response;
};

export default axiosRequest;
