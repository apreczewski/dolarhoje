import React, { useState, useEffect, useCallback } from 'react';
import { getPriceFromAwesome } from '../../services/endpoints/public';

import { formatCurrency } from '../../utils/format';
import { InputsCurrent } from '../../components/InputsCurrent';

import Content from './Content';
import { Wrapper, Body, Container } from './styles';

// let signal: boolean = false;

const Bitcoin: React.FC = () => {
  const [price, setPrice] = useState('');

  const getPrice = useCallback(async () => {
    const { apiCall, toastError } = getPriceFromAwesome();

    try {
      const { data } = await apiCall();
      const { BTC } = data;
      setPrice(formatCurrency(BTC.ask, BTC.code));
    } catch (error) {
      if (error.response) {
        toastError(error.response);
      }
    }
  }, []);

  useEffect(() => {
    getPrice();
  }, [])//eslint-disable-line

  return (
    <Wrapper>
      <Container>
        <InputsCurrent
          price={price}
          currencyLeft="BTC"
          currencyRight="BRL"
        />
        <Body>
          <Content />
        </Body>
      </Container>
    </Wrapper>
  );
};

export default Bitcoin;
