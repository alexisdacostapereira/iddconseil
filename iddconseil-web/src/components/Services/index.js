import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/svg-5.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ServicesUl
} from './ServicesElements';
import {
  NavBtn,
  NavBtnLink
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Nos Packs</ServicesH1>
      <ServicesWrapper>
      <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Starter Pack</ServicesH2>
          <ServicesUl>
          <ServicesP>
          • Adresse mail personnaliée
          </ServicesP>
          <ServicesP>
          • 1 Page
          </ServicesP>
          <ServicesP>
          • Formulaire de contact
          </ServicesP>
          <ServicesP>
          • 1 an de mise à jours
          </ServicesP>
          <ServicesP>
          • Reservation d'un nom de domaine
          </ServicesP>
          
          </ServicesUl>
          <NavBtn>
              <NavBtnLink >à partir de 600,00€ HT</NavBtnLink>
            </NavBtn>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Medium Pack</ServicesH2>
          <ServicesUl>
          <ServicesP>
          • Adresse mail personnaliée
          </ServicesP>
          <ServicesP>
          • 1 Page
          </ServicesP>
          <ServicesP>
          • Formulaire de contact
          </ServicesP>
          <ServicesP>
          • 1 an de mise à jours
          </ServicesP>
          <ServicesP>
          • Reservation d'un nom de domaine
          </ServicesP>
          
          </ServicesUl>
          <NavBtn>
              <NavBtnLink to='/contactform'>à partir de 800,00€ HT</NavBtnLink>
            </NavBtn>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Business Pack</ServicesH2>
          <ServicesUl>
          <ServicesP>
          • Adresse mail personnaliée
          </ServicesP>
          <ServicesP>
          • 1 Page
          </ServicesP>
          <ServicesP>
          • Formulaire de contact
          </ServicesP>
          <ServicesP>
          • 1 an de mise à jours
          </ServicesP>
          <ServicesP>
          • Reservation d'un nom de domaine
          </ServicesP>
          
          </ServicesUl>
          <NavBtn>
              <NavBtnLink to='/contactform'>à partir de 1000,00€ HT </NavBtnLink>
            </NavBtn>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
