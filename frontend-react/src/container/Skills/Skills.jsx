import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoBriefcaseOutline as WorkIcon } from 'react-icons/io5';
import { PiGraduationCap as SchoolIcon } from 'react-icons/pi';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client'
import './Skills.scss'
import 'react-vertical-timeline-component/style.min.css'

import './Skills.scss'
const Skills = () => {

  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const experiencesQuery = '*[_type == "workExperience"]';
    const skillsQuery = '*[_type == "skills"]';
    
    client.fetch(experiencesQuery)
      .then((data) => {
        setExperiences(data.sort((a,b) => a.id - b.id));
      })

    client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
      })
  }, [])
  
  let workIconStyles = {background: '#06D6A0'};
  let schoolIconStyles = {background: '#f9c74f'};
  
  return (
    <>
    <h2 className='head-text'>Skills & Experience</h2>
    <div className='app__skills-container'>
      <motion.div className='app__skills-list'>
        {skills.map((skill, index) => (
          <motion.div
            whileInView={{opacity: [0, 1]}}
            transition={{duration: 0.5}}
            className='app__skills-item app__flex'
            key={`skill-${skill.name}-${index}`}
          >
            <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
              <img src={urlFor(skill.icon)} alt={skill.name} />
            </div>
            <p className='p-text'>{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
    <h1>Experience TimeLine</h1>
    <VerticalTimeline
      animate={true}
      lineColor='#edf2f8'
    >
      {
        experiences.map((element) => {
          let isWorkIcon = element.icon === 'work'
          return (
          <VerticalTimelineElement
            key={element.key}
            date={element.date}
            dateClassName='date'
            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
            icon={isWorkIcon ? <WorkIcon/> : <SchoolIcon/>}
          >
            <h3 className='vertical-timeline-element-title'>{element.name}</h3>
            <h5 className='vertical-timeline-element-subtitle'>{element.company}</h5>
            <p id='description'>{element.description}</p>
          </VerticalTimelineElement>
        )})
      }
    </VerticalTimeline>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'), 
  'skills',
  'app__whitebg'
);