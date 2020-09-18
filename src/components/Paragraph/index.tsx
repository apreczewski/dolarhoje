import React, { FunctionComponent } from 'react';

import { Wrapper, Title, Body } from './styles';

interface CreateParagraph {
  title: string;
}

const Paragraph: FunctionComponent<CreateParagraph> = ({title, children}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Body>
        {children}
      </Body>
    </Wrapper>
  );
};

export default Paragraph;

