import React, { useState, useEffect, useCallback } from 'react';
import { getPriceFromAwesome } from '../../services/endpoints/awesome';

import { formatCurrency } from '../../utils/format';
import { InputsCurrent } from '../../components/InputsCurrent';

import Content from './Content';
import { Wrapper, Body, Container } from './styles';

const Dollar: React.FC = () => {
  const [price, setPrice] = useState('');

  const getPrice = useCallback(async () => {
    const { apiCall, toastError } = getPriceFromAwesome();

    try {
      const { data } = await apiCall();
      // console.log('Data >> ', data);
      const { USD } = data;

      // console.log('USD >> ', data)

      setPrice(formatCurrency(USD.ask, USD.code));
    } catch (error) {
      if (error.response) {
        toastError(error.response);
      }
    }
  }, [setPrice]);

  useEffect(() => {
    getPrice();
  }, [getPrice])//eslint-disable-line

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
