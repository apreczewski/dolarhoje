// const getCurrency: {
//   [char: string]: { [char: string]: string };
// } = {
//   XBT: { code: 'de-DE', name: 'Bitcoin' },
//   ETH: { code: 'de-DE', name: 'Ethereum' },
//   LTC: { code: 'de-DE', name: 'Litecoin' },
//   XRP: { code: 'de-DE', name: 'Ripple' },
//   ARS: { code: 'es-AR', name: 'Peso Argentino' },
//   AUD: { code: 'en-AU', name: 'Dólar Australiano' },
//   CAD: { code: 'en-CA', name: 'Dólar Canadense' },
//   CHF: { code: '-CH', name: 'Franco Suíço' },
//   CNY: { code: 'zh-CN', name: 'Yuan Chinês' },
//   EUR: { code: 'de-DE', name: 'Euro' },
//   GBP: { code: 'en-GB', name: 'Libra Esterlina' },
//   ILS: { code: 'he-IL', name: 'Novo Shekel Israelense' },
//   JPY: { code: 'jp-JP', name: 'Iene Japonês' },
//   USD: { code: 'en-US', name: 'Dólar Comercial' },
//   USDT: { code: 'en-USDT', name: 'Dólar Turismo' },
// };

interface Option {
  [key: string]: { code: string, name: string }
}

const code: Option = {
  XBT: { code: 'de-DE', name: 'Bitcoin' },
  ETH: { code: 'de-DE', name: 'Ethereum' },
  LTC: { code: 'de-DE', name: 'Litecoin' },
  XRP: { code: 'de-DE', name: 'Ripple' },
  ARS: { code: 'es-AR', name: 'Peso Argentino' },
  AUD: { code: 'en-AU', name: 'Dólar Australiano' },
  CAD: { code: 'en-CA', name: 'Dólar Canadense' },
  CHF: { code: 'fr-CH', name: 'Franco Suíço' },
  CNY: { code: 'zh-CN', name: 'Yuan Chinês' },
  EUR: { code: 'de-DE', name: 'Euro' },
  GBP: { code: 'en-GB', name: 'Libra Esterlina' },
  ILS: { code: 'he-IL', name: 'Novo Shekel Israelense' },
  JPY: { code: 'jp-JP', name: 'Iene Japonês' },
  USD: { code: 'en-US', name: 'Dólar Comercial' },
  BRL: { code: 'pt-BR', name: 'Brazilian Real' },
  USDT: { code: 'en-USDT', name: 'Dólar Turismo' },
}

// console.log(code['ETH'].code)

export function formatNumber(value: string) {
  return value.replace(/\D/g, '.');
}

export function formatCurrency(value: string, currency: string) {
  const valueFormatted = formatNumber(value);

  return new Intl.NumberFormat(code[currency].code, {
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(parseFloat(valueFormatted));
}

export function formatDate(dateToFormat: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
    timeZone: 'America/Sao_Paulo',
  }).format(Date.parse(dateToFormat));
}

export function handleMultiplication(
  amount: string,
  price: string,
  currency: string,
) {
  const result = parseFloat(amount) * parseFloat(price);
  if (result.toString() === 'NaN') {
    return formatCurrency('0', currency);
  }
  return formatCurrency(result.toString(), currency);
}

export function handleDivision(
  amount: string,
  price: string,
  currency: string,
) {
  const result = parseFloat(amount) / parseFloat(price);
  if (result.toString() === 'NaN') {
    return formatCurrency('0', currency);
  }
  return formatCurrency(result.toString(), currency);
}
