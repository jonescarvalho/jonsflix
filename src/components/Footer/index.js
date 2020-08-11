import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.jonescarvalho.com/">
        <img src="https://jonescarvalho.com/favicon.ico" alt="Logo Jones" />
      </a>
      <p>        
        {' '}
        <a href="https://www.jonescarvalho.com/">
        Jones Carvalho
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
