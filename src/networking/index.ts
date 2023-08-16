import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from './constants';

export default async function invokeAPI(apiConfig: AxiosRequestConfig) {
  try {
    const config = {
      ...apiConfig,
      url: `${BASE_URL}${apiConfig.url}`,
    }
    console.log('API_CONFIG:', config);
    const response = await axios(config);
    console.log(response);
    return response.data;
  } catch (error) {
    console.warn(error);
  }
}
