import axios from 'axios';

export const { CancelToken, isCancel } = axios;

export const apiBCB = axios.create({
  baseURL: 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata',
});

export const apiAwesome = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/json',
});

export const apiHGBrasil = axios.create({
  baseURL: 'https://api.hgbrasil.com',
});
