import React, { useState, useEffect } from 'react';

import { Wrapper, FieldValue } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { handleMultiplication, handleDivision, formatCurrency } from '../../utils/format';
import { copyDataInput } from '../../utils/helpers';

interface Input {
  price: string;
  currencyLeft: string;
  currencyRight: string;
}

export const InputsCurrent: React.FC<Input> = (props) => {
  const {price, currencyLeft, currencyRight} = props;
  const [amountLeft, setAmountLeft] = useState<string>('');
  const [amountRight, setAmountRight] = useState<string>('');
  const [value, setValue] = useState('');

  function handleAmountLeft(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const amount = event.target.value;
    const total = handleMultiplication(amount, value, currencyLeft);
    setAmountLeft(amount);
    setAmountRight(total);
  }

  function handleAmountRight(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const amount = event.target.value;
    const total = handleDivision(amount, value, currencyRight);
    setAmountLeft(total);
    setAmountRight(amount);
  }

  useEffect(() => {
    setAmountLeft(formatCurrency('1', currencyLeft));
    setAmountRight(formatCurrency(price, currencyRight));
    setValue(price);
  }, [price])//eslint-disable-line

  return (
    <Wrapper>
      <FieldValue>
        <span>{currencyLeft}</span>
        <input
          id={`input${currencyLeft}`}
          type="text"
          value={amountLeft}
          onChange={handleAmountLeft}
          onClick={e => document.execCommand("selectall", true, '')}
        />
        <FontAwesomeIcon
          icon={faCopy}
          onClick={() => copyDataInput('$', `input${currencyLeft}`)}
        />
      </FieldValue>
      <FieldValue>
        <span>{currencyRight}</span>
        <input
          id={`input${currencyRight}`}
          type="text"
          value={amountRight}
          onChange={handleAmountRight}
          onClick={e => document.execCommand("selectall", true, '')}
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



