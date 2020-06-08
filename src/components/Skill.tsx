import React, { useState } from "react"
import styled from "styled-components"

import SkillData from "../json/skill.json"

const SkillDetail = styled.div`
  position: relative;
  float: left;
  width: 50%;
  height: 100%;
  padding: 10px;
  background: #fff;
`

const DetailWrap = styled.div`
  position: absolute;
  left: 50%;
  top: 50%; 
  transform: translate(-50%,-50%);
`

const Rank = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 150px;
  height: 150px;
  line-height: 150px;
  background: #ccc;
  font-size: 95px;
  color: #fff;
  margin-bottom: 10px;
`
const Title = styled.h1`
  text-align: center;
`
const Desc = styled.p`
  text-align: left;
`
const SkillList = styled.div`
  position: relative;
  float: right;
  width: 50%;
  height: 100%;
  padding: 10px;
  background: #fff;
`

const SkillWrap = styled.div`
  height: 500px;
`

const ListWrap= styled.div`
  position: absolute;
  left: 50%;
  top: 50%; 
  transform: translate(-50%,-50%);
  width: 100%;

  ul {
    list-style: none;
    margin: 0;
  }

  .seleted {
    background: #ccc;
  }
`
const ListItem = styled.li`
  height: 40px;
  padding-left: 30px;
  cursor: pointer;
  margin: 0;
  position: relative;
`
const Itemtitle = styled.p`
  float:left;
  width: 160px;
  margin: 0;
  line-height: 40px;
`
const ProgressWrap = styled.div`
  float:left;
`

const Progress = styled.div`
  position: absolute;
  
  background: #ccc;
  width: 320px;
  height: 80%;
  top: 50%;

  transform: translateY(-50%);
`

const Bar = styled.div`
  float: left;
  height: 100%;
  background: #000;

  width: ${props => props.rate}%;
`

const Skill = props => {
  const { project, desc } = props;
  const [ skillIndex, setSkillIndex ] = useState(-1);
  const currentSkill = SkillData.skill[skillIndex];

  return (
    <SkillWrap>
      <SkillDetail>
        { currentSkill &&
          <DetailWrap>
            <Rank>{currentSkill.rank}</Rank>
            <Title>{currentSkill.title}</Title>
            <Desc>{currentSkill.desc}</Desc>
          </DetailWrap>
        }
      </SkillDetail>
      <SkillList>
        <ListWrap>
          <ul>
            {SkillData.skill.map((item:any, index:number) => {
              return (
                <ListItem key={index} className={skillIndex==index ? "seleted" : ""} onClick={ () => { setSkillIndex(skillIndex===index? -1: index); }}>
                  <Itemtitle>{item.title}</Itemtitle>
                  <ProgressWrap>
                    <Progress>
                      <Bar rate={item.rate}></Bar>
                    </Progress>
                  </ProgressWrap>
                </ListItem>
              )
            })}
          </ul>
        </ListWrap>
      </SkillList>
    </SkillWrap>
  )
}

export default Skill