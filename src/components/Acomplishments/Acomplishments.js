import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 'https://cdn-icons-png.flaticon.com/512/732/732212.png', text: 'HTML'},
  { number: 'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-1024.png', text: 'CSS', },
  { number: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/bootstrap_plain_wordmark_logo_icon_146620.png', text: 'Bootstrap', },
  { number: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png?20211001194333', text: 'Tailwind', },
  { number: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Javascript-736400_960_720.png/640px-Javascript-736400_960_720.png', text: 'Javascript', },
  { number: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/202px-React-icon.svg.png', text: 'React JS', },
  { number: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/180px-Typescript_logo_2020.svg.png', text: 'Typescript', },
  { number: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/640px-PHP-logo.svg.png', text: 'PHP', },
  { number: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/640px-Laravel.svg.png', text: 'Laravel', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle >Tech Stacks</SectionTitle>
    <Boxes>
       {data.map((card,index) => (
        <Box key={index}
        >
          {/* <BoxNum><img src={card.number} alt={card.text} /></BoxNum> */}
          <img src={card.number} alt={card.text} width='50px' height='50px' />
          <BoxText>{card.text}</BoxText>
        </Box>
       ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
