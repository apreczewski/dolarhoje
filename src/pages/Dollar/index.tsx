import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { AxiosResponse } from 'axios';
import { apiAwesome } from '../../services/api';

import {
  formatCurrency,
  handleMultiplication,
  handleDivision,
} from '../../utils/format';
import { copyDataInput } from '../../utils/helpers';
import { Wrapper, Body, Quotation, Container, FieldValue } from './styles';
import Content from './Content';

const Dollar: React.FC = () => {
  const [amountBRL, setAmountBRL] = useState<string | null>(null);
  const [amountUSD, setAmountUSD] = useState<string | null>(null);
  const [valueUSD, setValueUSD] = useState('');

  function handleAmountBRL(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const amount = event.target.value;
    const total = handleMultiplication(amount, valueUSD, 'BRL', 'pt-BR');
    setAmountUSD(amount);
    setAmountBRL(total);
  }

  function handleAmountUSD(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const amount = event.target.value;
    const total = handleDivision(amount, valueUSD, 'USD', 'en-US');
    setAmountBRL(amount);
    setAmountUSD(total);
  }

  useEffect(() => {
    apiAwesome.get('/all').then((response: AxiosResponse) => {
      const { USD } = response.data;
      setValueUSD(formatCurrency(USD.ask, USD.code, 'en-US'));
      setAmountBRL(formatCurrency(USD.ask, USD.codein, 'pt-BR'));
      setAmountUSD(formatCurrency('1', USD.code, 'en-US'));
    });
  }, [])//eslint-disable-line

  return (
    <Wrapper>
      <Container>
        <Quotation>
          <FieldValue>
            <span>USD</span>
            <input
              id="inputUSD"
              type="text"
              value={amountUSD || ''}
              onChange={e => handleAmountBRL(e)}
            />
            <FontAwesomeIcon
              icon={faCopy}
              onClick={() => copyDataInput('$', 'inputUSD')}
            />
          </FieldValue>
          <FieldValue>
            <span>BRL</span>
            <input
              id="inputBRL"
              type="text"
              value={amountBRL || ''}
              onChange={e => handleAmountUSD(e)}
            />
            <FontAwesomeIcon
              id="copy"
              icon={faCopy}
              onClick={() => copyDataInput('R$', 'inputBRL')}
            />
          </FieldValue>
        </Quotation>
        <Body>
          <Content />
        </Body>
      </Container>
    </Wrapper>
  );
};

export default Dollar;
