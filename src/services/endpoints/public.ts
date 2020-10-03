import { apiAwesome, CancelToken } from '../api';
import {toastDH} from '../../components/Toast'


export function getPriceFromAwesome() {
  const source = CancelToken.source();

  function apiCall() {
    return apiAwesome.get('/all', {
      cancelToken: source.token,
    })
  }

  function toastError(message: string)  {
    return toastDH.error({
      message: message || 'Fail to load price on awesomw',
    });
  }

  return { source, apiCall, toastError };
}
