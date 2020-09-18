import React, { useState, useEffect } from 'react';

import { Wrapper, FieldValue } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { handleMultiplication, formatCurrency } from '../../utils/format';
import { copyDataInput } from '../../utils/helpers';

interface Input {
  price: string;
  currencyLeft: string;
  currencyRight: string;
  languageCodeLeft: string;
  languageCodeRight: string;
}

export const InputsCurrent: React.FC<Input> = (props) => {
  const {price, currencyLeft, currencyRight, languageCodeLeft, languageCodeRight} = props;
  const [amountLeft, setAmountLeft] = useState<string | null>(null);
  const [amountRight, setAmountRight] = useState<string | null>(null);
  const [value, setValue] = useState('');

  function handleAmountLeft(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const amount = event.target.value;
    const total = handleMultiplication(amount, value, currencyLeft, languageCodeLeft);
    setAmountLeft(amount);
    setAmountRight(total);
  }

  function handleAmountRight(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const amount = event.target.value;
    const total = handleMultiplication(amount, value, currencyRight, languageCodeRight);
    setAmountLeft(total);
    setAmountRight(amount);
  }

  useEffect(() => {
    setAmountLeft(formatCurrency('1', currencyLeft, languageCodeLeft));
    setAmountRight(formatCurrency(price, currencyRight, languageCodeRight));
    setValue(price);
  }, [price])//eslint-disable-line

  return (
    <Wrapper>
          <FieldValue>
            <span>{currencyLeft}</span>
            <input
              id={`input${currencyLeft}`}
              type="text"
              value={amountLeft || ''}
              onChange={handleAmountLeft}
            />
            <FontAwesomeIcon
              icon={faCopy}
              onClick={() => copyDataInput('$', `input${currencyLeft}`)}
            />
          </FieldValue>
          <FieldValue>
            <span>{currencyRight}</span>
            <input
              id="inputBRL"
              type="text"
              value={amountRight || ''}
              onChange={handleAmountRight}
            />
            <FontAwesomeIcon
              id="copy"
              icon={faCopy}
              onClick={() => copyDataInput('$', `input${currencyRight}`)}
            />
          </FieldValue>
        </Wrapper>
  );
}



