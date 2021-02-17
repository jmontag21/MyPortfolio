import React from 'react';
import Icon1 from '../../images/dice.svg';
import Icon2 from '../../images/cube.svg';
import Icon3 from '../../images/dna.svg';
import Icon4 from '../../images/nlp.svg';
import Icon5 from '../../images/lol.svg';
import Icon6 from '../../images/kickstarter.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>My Projects</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>BankRoll</ServicesH2>
          <ServicesP>
            <a href = "http://bankrollai.herokuapp.com/" target = "_blank">Website</a>
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Rubiks Cube Solver</ServicesH2>
          <ServicesP>
          <a href = "https://github.com/jmontag21/Rubiks-Cube-Solver" target = "_blank">GitHub Code</a>
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Genetic Programming</ServicesH2>
          <ServicesP>
          <a href = "https://github.com/jmontag21/Genetic-Programming-" target = "_blank">GitHub Code</a>
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>NLP Classifier</ServicesH2>
          <ServicesP>
          <a href = "https://github.com/jmontag21/AI-Machine-Learning-Law" target = "_blank">GitHub Code</a>
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon5} />
          <ServicesH2>LOL Match Predictor</ServicesH2>
          <ServicesP>
          <a href = "https://github.com/jmontag21/LeagueOfLegends-Predictor" target = "_blank">GitHub Code</a>
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon6} />
          <ServicesH2>kickstarter Predictor</ServicesH2>
          <ServicesP>
          <a href = "https://github.com/jmontag21/KickPredictor" target = "_blank">GitHub Code</a>
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
