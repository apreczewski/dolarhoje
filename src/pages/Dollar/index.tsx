import React, { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { apiAwesome } from '../../services/api';

import { formatCurrency } from '../../utils/format';
import { InputsCurrent } from '../../components/InputsCurrent';

import Content from './Content';
import { Wrapper, Body, Container } from './styles';

const Dollar: React.FC = () => {
  const [valueUSD, setValueUSD] = useState('');

  useEffect(() => {
    apiAwesome.get('/all').then((response: AxiosResponse) => {
      const { USD } = response.data;
      setValueUSD(formatCurrency(USD.ask, USD.code, 'en-US'));
    });
  }, [])//eslint-disable-line

  return (
    <Wrapper>
      <Container>
        <InputsCurrent
          price={valueUSD}
          currencyLeft="USD"
          currencyRight="BRL"
          languageCodeLeft="en-US"
          languageCodeRight="pt-BR"
        />
        <Body>
          <Content />
        </Body>
      </Container>
    </Wrapper>
  );
};

export default Dollar;
