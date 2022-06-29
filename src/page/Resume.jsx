import React, { Fragment } from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import styled from "styled-components";
import getResumeInfo from "../store/resume";
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';

const ResumeWrapper = styled.div`
  padding: 10px 0 0 0;
`
const ExperienceHeader = styled.div`
  background-color: #2eca7f;
  height: 50px;
  text-align: left;
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 600;
  font-size: 24px;
  text-indent:2em;
  margin-top: 50px;
`
const ExperienceIntro = styled.div`
  padding: 20px 40px 20px 40px;
  text-align: start;
`

const Highlight = styled.div`
  padding: 30px 40px 0px 40px;
`

const HightlightTtitle = styled.div`
  color: #2eca7f;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
`
const HightlightFont = styled.div`
  padding: 0 0 0 10px;
  color: black;
`

const HeightlightListBorder = styled.div`
  padding: 0 0 0 10px;
`
const HightLightList = styled.ul`
  border-left: 2px solid #2eca7f;
  list-style-type: none;
`
const HightLightListItem = styled.li`
  text-align: start;
  padding: 5px 0 5px 10px;
`
const ProjectPreviewWrapper = styled.div`
  width: 500px;
`
const ProjectImg = styled.img`
  width: 100%;
  padding: 30px 40px 20px 40px;
`

const Link = styled.a`
  cursor: 'pointer';
  text-decoration: none;
`;
  
const Resume = () => {
  const resumeInfo = getResumeInfo();

  const renderHightLight = (title, lists) => {

    const isALink = (item) => {
      if(item.indexOf("http") !== 0) {
          return (
            item
          )
      }
      return <Link href={item} target="_blank" rel="noopener noreferrer">{item}</Link>
    }
    return (
      <Highlight>
        <HightlightTtitle>
          <CircleTwoToneIcon/>
          <HightlightFont>
            {title}
          </HightlightFont>
        </HightlightTtitle>
        <HeightlightListBorder>
          <HightLightList>
            {lists.map((project,i)=>(
              <HightLightListItem key={i}>
                {isALink(project)}
              </HightLightListItem>
            ))}
          </HightLightList>
        </HeightlightListBorder>
      </Highlight>
    )
  }  

  const renderResume = () => {
    return (
      resumeInfo.map((project, index) =>(
        <Fragment key={index}>
          <ExperienceHeader>
            {project.ExperienceHeader}
          </ExperienceHeader>
          <ExperienceIntro>
            {project.ExperienceIntro}
          </ExperienceIntro>
          {renderHightLight("Tech Stacks & Project Hightlight",project.Hightlight)}
          <ProjectPreviewWrapper>
          {renderHightLight("Project Links:", project.projectLinks)}
            <ProjectImg src={project.projectPreview} alt="jr-dashboard-preview"/>
          </ProjectPreviewWrapper>
        </Fragment>
      ))
    )
  }


  return (
    <Layout>
      <Navbar />
        <ResumeWrapper>
          {renderResume()}
        </ResumeWrapper>
    </Layout>
  )
}

export default Resume;