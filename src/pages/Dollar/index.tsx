import React, { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { apiAwesome } from '../../services/api';

import { formatCurrency } from '../../utils/format';
import { InputsCurrent } from '../../components/InputsCurrent';

import Content from './Content';
import { Wrapper, Body, Container } from './styles';

const Dollar: React.FC = () => {
  const [price, setPrice] = useState('');

  useEffect(() => {
    apiAwesome.get('/all').then(async (response: AxiosResponse) => {
      const { USD } = await response.data;
      setPrice(formatCurrency(USD.ask, USD.code));
    });
  }, [])//eslint-disable-line

  return (
    <Wrapper>
      <Container>
        <InputsCurrent
          price={price}
          currencyLeft="USD"
          currencyRight="BRL"
        />
        <Body>
          <Content />
        </Body>
      </Container>
    </Wrapper>
  );
};

export default Dollar;
