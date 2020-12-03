import React from 'react';

import { Wrapper } from './styles';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <a href="/dollar">Dollar</a>
      <a href="/euro">Euro</a>
      {/* <a href="/yuan">yuan</a>
      <a href="/libra">libra</a>
      <a href="/iene">iene</a>
      <a href="/gold">gold</a>
      <a href="/bitcoin">bitcoin</a>
      <a href="/ethereum">ethereum</a> */}
    </Wrapper>
  );
}

export default Header;
