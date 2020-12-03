import React from 'react';
import Paragraph from '../../../components/Paragraph';

import { Wrapper, Image, Text, List } from './styles';

const Content: React.FC = () => {
  return (
    <Wrapper>
      <Paragraph title="O que é euro comercial?" >
        <Text>O euro comercial é a moeda utilizada para o fechamento de transferências para o exterior, importação e exportação, operações do governo, dentre outras. Como o euro comercial pode ser adquirido virtualmente, gera menos gastos de logística e entrega ao destino, refletindo diretamente no seu valor que é mais barato que o euro turismo.</Text>
      </Paragraph>
      <Paragraph title="O que é euro turismo?" >
        <Text>Euro turismo é a moeda comprada por turistas para suas viagens podendo ser adquirida em casas de câmbio ou bancos. O valor é resultado do euro comercial com acréscimo do Imposto sobre Operações Financeiras (IOF) e outros custos ligados à logística de transporte e operações necessários para que a moeda chegue até o seu destino.</Text>
      </Paragraph>
      <Paragraph title="Como comprar euro turismo?" >
        <Text>O euro turismo pode ser comprado em casas de câmbio ou bancos, em dinheiro vivo ou cartão pré-pago. Caso você queira começar a comprar, atente-se às seguintes dicas:</Text>
        <List>
          <li>Compre em etapas, assim você diminui os riscos de prejuízo ao comprar tudo de uma vez em uma cotação não tão favorável.</li>
          <li>Acompanhe a tendência, não deixe de se atualizar da cotação e das notícias. Fatores como instabilidade política e alterações nos impostos são fatores muito importantes para alteração da cotação.</li>
          <li>Pesquise em diferentes casas de câmbio e encontre aquela com a melhor oferta.</li>
          <li>Seja rápido e não perca quedas súbitas no valor, deixar para amanhã pode te dar prejuízo.</li>
        </List>
      </Paragraph>
      <Paragraph title="Por que o Euro está mais caro que o dólar?" >
        <Text>A moeda europeia leva vantagem pelas dívidas que os Estados Unidos tem de guerras em que participou recentemente. Até hoje eles pagam as contas da guerra contra o Iraque. A estabilidade política também conta muito na cotação das moedas, assim como aumenta a segurança dos investidores ao aplicarem seu dinheiro.</Text>
      </Paragraph>
      <Paragraph title="Quais países usam o euro?" >
        <Text>Segundo o site da União Europeia os países que estão na zona / área do euro são:</Text>
        <List>
          <li>Áustria</li>
          <li>Bélgica</li>
          <li>Chipre</li>
          <li>Estónia</li>
          <li>Finlândia</li>
          <li>França</li>
          <li>Alemanha</li>
          <li>Grécia</li>
          <li>Irlanda</li>
          <li>Itália</li>
          <li>Letónia</li>
          <li>Lituânia</li>
          <li>Luxemburgo</li>
          <li>Malta</li>
          <li>Países Baixos</li>
          <li>Portugal</li>
          <li>Eslováquia</li>
          <li>Eslovénia</li>
          <li>Espanha</li>
        </List>
      </Paragraph>
      <Paragraph title="Como identificar uma nota de euro falsa?" >
        <Text>Existem algumas observações a se fazer ao entrar em contato como uma nota de euro para saber se a mesma é falsificada ou não, dentre elas:</Text>
        <List>
          <li>Reconheça os valores de notas existentes: 5 €, 10 €, 20 €, 50 €, 100 €, 200 € e 500 €. Caso tenha algum valor diferente desses, a nota é falsa</li>
          <li>As notas de euro são ilustradas com elementos presentes na história europeia. Por isso, a frente de cada cédula é ilustrada com uma janela, porta ou portal, verso com uma ponte (e um mapa da Europa).</li>
          <li>Meça as cédulas. os tamanhos originais são:</li>
          <li>5 €: 120 x 62 mm</li>
          <li>10 €: 127 x 67 mm</li>
          <li>20 €: 133 x 72 mm</li>
          <li>50 €: 140 x 77 mm</li>
          <li>100 €: 147 x 82 mm</li>
          <li>200 €: 153 x 82 mm</li>
          <li>500 €: 160 x 82 mm</li>
          <li>Sinta a textura da cédula e observe os relevos que ela pode apresentar.</li>
          <li>As cédulas mais recentes possuem a marca d’agua que faz referência a deusa grega Europa.</li>
          <li>Analisem se o holograma e a banda de segurança estão presentes e como se apresentam contra à luz</li>
        </List>
      </Paragraph>
      <Paragraph title="Qual é a história do euro?" >
        <Image src="https://cdn.pixabay.com/photo/2019/08/20/14/20/money-4418922_960_720.jpg" alt="Cédulas de euro no valor de 10 e 20 euros"/>
        <Text>Apesar da ideia da moeda única europeia ter começado na década de 70, sendo defendida por economistas como Fred Arditti e Neil Dowling, sua teoria só passou para o Direito em 1992 pelo Tratado de Maastricht. Os critério para adesão ao euro foram estabelecidos pelo Pacto de Estabilidade e Crescimento de 1997, entrando em vigor em 1999 por forma não material (como em transferências e em cheques) e em 01 de janeiro de 2002 começaram a circular oficialmente as notas e moedas. Hoje, existe a ameaça que o euro acabe pelos esforços necessários pelos países participantes da zona do euro para a manutenção da moeda. Com as quedas e instabilidades como a de 2010 esta pauta pode voltar a tona, porém hoje o euro atingiu máximas históricas com relação ao real e seguem como uma das moedas mais valorizadas do mercado.</Text>
      </Paragraph>
    </Wrapper>
  );
};

export default Content;
