import React, { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { apiAwesome } from '../../services/api';

import { formatCurrency } from '../../utils/format';
import { InputsCurrent } from '../../components/InputsCurrent';

import Content from './Content';
import { Wrapper, Body, Container } from './styles';

const Ouro: React.FC = () => {
  const [price, setPrice] = useState('');

  useEffect(() => {
    apiAwesome.get('/all').then((response: AxiosResponse) => {
      console.log('response -> ', response);
      const { ETH } = response.data;
      setPrice(formatCurrency(ETH.ask, ETH.code));
    });
  }, [])//eslint-disable-line

  return (
    <Wrapper>
      <Container>
        <InputsCurrent
          price={price}
          currencyLeft="ETH"
          currencyRight="BRL"
        />
        <Body>
          <Content />
        </Body>
      </Container>
    </Wrapper>
  );
};

export default Ouro;
