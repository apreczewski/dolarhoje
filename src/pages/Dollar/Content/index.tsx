import React from 'react';
import Paragraph from '../../../components/Paragraph';

import { Wrapper } from './styles';

const Content: React.FC = () => {
  return (
    <Wrapper>
      <Paragraph title="O que é Dólar Turismo?" >
        <p>Diferente do dólar comercial, o dólar turismo representa a cotação da moeda norte americana para pessoas físicas que precisam dos valores durante uma viagem. O valor é resultado do dólar comercial com acréscimo do Imposto sobre Operações Financeiras (IOF) e outros custos ligados à logística de transporte e operações necessários para que a moeda chegue até o seu destino.</p>
      </Paragraph>
      <Paragraph title="Qual a diferença entre Dólar Comercial e Dólar Turismo?" >
        <p>O dólar comercial é a cotação dada ao dólar em referência a outras moedas e utilizado em importações e exportações. Caso você veja um jornal e ele diga “Um dólar hoje equivale a cinco reais” é do valor do dólar comercial que estão se referindo.</p>
      </Paragraph>
      <Paragraph title="Afinal, porque o mundo funciona em Dólar?" >
        <p>Logo no início do século XX, os Estados Unidos já começavam a se firmar enquanto potência mundial. Após a Segunda Guerra Mundial, os norte americanos financiaram a reconstrução do Japão e da Europa. Hoje, a variação do dólar pode influenciar desde o seu serviço de assinatura até o preço do bacalhau. Além de tudo, ainda temos o efeito da “dolarização” onde um país pode abdicar de uma moeda própria e adotar o dólar como moeda oficial (é o caso do Equador) ou simplesmente a população aceitar o dólar em suas transações internas (como a Argentina).</p>
      </Paragraph>
      <Paragraph title="Que países, além dos EUA, aceitam o Dólar hoje?" >
        <p>Pelo efeito da Dolarização, segue a lista de países que aceita pagamentos em dólar americano nas suas transações internas:</p>
        <ul>
          <li>Equador</li>
          <li>Panamá</li>
          <li>El-Salvador</li>
          <li>Zimbábue</li>
          <li>Costa Rica</li>
          <li>Bahamas</li>
          <li>Barbados</li>
          <li>Belize</li>
          <li>Bermudas</li>
          <li>Camboja</li>
          <li>Haiti</li>
          <li>Honduras</li>
          <li>Líbano</li>
          <li>Libéria</li>
          <li>Coreia do Norte</li>
          <li>Palau</li>
          <li>Somália</li>
          <li>Timor-Leste</li>
          <li>Micronésia</li>
        </ul>
        <p>Além desses países, temos aqueles que possuem outros tipos de dólar, como: East Caribbean Dollar, Australian Dollar, Singapore Dollar, Canadian Dollar, Cayman Island Dollar e Hong Kong Dollar.</p>
      </Paragraph>
      <Paragraph title="O que influencia a cotação do Dólar hoje?" >
        <p>Assim como as demais moedas, a oferta e procura é um dos fatores da variação cambial. Além deles podemos citar:</p>
        <ul>
          <li>O cenário político que pode trazer segurança ou não para os investidores</li>
          <li>Déficit na balança comercial de acordo com a moeda a ser cambiada para o dólar</li>
          <li>Quanto os turistas estão consumindo da moeda em suas viagens</li>
          <li>As taxas de juros (A taxa básica de juro) dos Estados Unidos, podendo até fazer os investidores migrarem seus investimentos para outros países</li>
          <li>No caso da cotação em relação ao real, ainda temos a interferência do Bacen com: compra e venda de dólares, a venda de títulos públicos em dólar, alterações nos impostos e as alterações na taxa Selic</li>
        </ul>
      </Paragraph>
      <Paragraph title="O que é o câmbio flutuante?" >
        <p>O câmbio flutuante é quando um país decide não impor uma política cambial e deixa com que o próprio mercado se regule livremente. Sendo assim, não há o controle por parte do governo da compra e venda das moedas o que favorece a lei da oferta e da procura.</p>
      </Paragraph>
      <Paragraph title="Qual a hora certa de comprar Dólar?" >
        <p>Existem algumas dicas para que você compre dólares de maneira mais satisfatória e rentável, dentre elas estão:</p>
        <ul>
          <li>Compre em etapas, assim você diminui os riscos de prejuízo ao comprar tudo de uma vez em uma cotação não tão favorável</li>
          <li>Acompanhe a tendência, não deixe de se atualizar da cotação e das notícias. Fatores como instabilidade política e alterações nos impostos são fatores muito importantes para alteração da cotação</li>
          <li>Pesquise em diferentes casas de câmbio e encontre aquela com a melhor oferta</li>
          <li>Seja rápido e não perca quedas súbitas no valor, deixar para amanhã pode te dar prejuízo</li>
        </ul>
      </Paragraph>
      <Paragraph title="Como identificar notas falsas de Dólar hoje?"  >
      <img src="https://cdn.pixabay.com/photo/2016/04/30/00/28/dollar-1362243_960_720.jpg" alt="dolar"/>
      <ul>
        <p>Dicas para você descobrir se a nota é falsa ou não:</p>
        <li>No toque é possível notar a qualidade do papel. </li>
        <li>Veja se a impressão é precisa e nítida, sem pontos borrados.</li>
        <li>Analise também os números de série, se estão separados de maneira uniforme e alinhadas. Há diferentes pontos na nota verdadeira em que se pode sentir o alto-relevo.</li>
        <li>Ao inclinar a nota, você verá o número 100 no canto inferior direito.</li>
        <li>Na nota de US$ 100, uma das mais falsificadas, há o filete de segurança ao visualizar contra a luz, assim como a marca d’água de Benjamin Franklin.</li>
        <li>Com uma lupa, você verá uma série de microimpressões que não constam nas notas falsas.*(mantido)</li>
      </ul>
      </Paragraph>
    </Wrapper>
  );
};

export default Content;
