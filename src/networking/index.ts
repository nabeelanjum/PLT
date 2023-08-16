import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from './constants';

export default async function invokeAPI(apiConfig: AxiosRequestConfig) {
  try {
    const config = {
      ...apiConfig,
      url: `${BASE_URL}${apiConfig.url}`,
    }
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.log(error);
    // TODO: Show a readable error message to the user
  }
}
