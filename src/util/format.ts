interface ICode {
  [key: string]: { code: string, name: string }
}

const code: ICode = {
  BTC: { code: 'de-DE', name: 'Bitcoin' },
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

export const cleaningNumber = (value: string) => {
  return value.replace(/\D/g, '.');
}


export const formatCurrency = (value: string, currency: string) => {
  const valueClean = cleaningNumber(value);
  const valueFormatted = new Intl.NumberFormat(code['USD'].code, {
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(parseFloat(valueClean));

  return valueFormatted;
}

export const formatDate = (dateToFormat: string) => {
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

export const handleMultiplication = (
  amount: string,
  price: string,
  currency: string,
) => {

  const result = parseFloat(amount) * parseFloat(price);

  if (result.toString() === 'NaN') {
    return formatCurrency('0', currency);
  }

  return formatCurrency(result.toString(), currency);
}

export const handleDivision = (
  amount: string,
  price: string,
  currency: string,
) => {

  const result = parseFloat(amount) / parseFloat(price);

  if (result.toString() === 'NaN') {
    return formatCurrency('0', currency);
  }

  return formatCurrency(result.toString(), currency);
}
