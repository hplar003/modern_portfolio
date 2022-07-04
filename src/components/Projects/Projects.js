import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((project) => (
       <BlogCard key={project.id}>
          <Img src={project.image} alt={project.title} />
          <TitleContent>
            <HeaderThree title>
               {project.title}
            </HeaderThree>
            <Hr />
            <CardInfo>
              {project.description}
            </CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {project.tags.map((tag,index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks target='_blank' href={project.visit}>Code</ExternalLinks>
              <ExternalLinks target='_blank' href={project.source}>Live</ExternalLinks>
            </UtilityList>
          </TitleContent>

       </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;