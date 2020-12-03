import React, { useState, useEffect, useCallback } from 'react';
import { getPriceFromAwesome } from '../../services/endpoints/awesome';

import { formatCurrency } from '../../utils/format';
import { InputsCurrent } from '../../components/InputsCurrent';

import Content from './Content';
import { Wrapper, Body, Container } from './styles';

const Euro: React.FC = () => {
  const [price, setPrice] = useState('');

  const getPrice = useCallback(async () => {
    const { apiCall, toastError } = getPriceFromAwesome();

    try {
      const { data } = await apiCall();
      const { EUR } = data;
      setPrice(formatCurrency(EUR.ask, EUR.code));
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
          currencyLeft="EUR"
          currencyRight="BRL"
        />
        <Body>
          <Content />
        </Body>
      </Container>
    </Wrapper>
  );
};

export default Euro;
