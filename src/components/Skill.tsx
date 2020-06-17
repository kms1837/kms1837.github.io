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
  transition: 0.5s background;
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
  background: #fff;
  font-size: 95px;
  color: #777;
  margin-bottom: 25px;
`
const Title = styled.h1`
  text-align: center;
`

const Desc = styled.p`
  text-align: left;
  height: 80px;
`
const DetailProgress = styled.div`
  position: relative;
  height: 80px;
`

const Note = styled.div`
  position: absolute;
  bottom: -20px;
  width: 100%;
  font-size: 12px;
  overflow: hidden;
`

const NoteLeft = styled.div`
  float: left;
  width: 20%;
  white-space: nowrap;
`

const NoteCenter = styled.div`
  float:left;
  width: 60%;
  white-space: nowrap;
  text-align: center;
`

const NoteRight = styled.div`
  float: right;
  width: 20%;
  text-align: right;
  white-space: nowrap;
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
  height: 550px;

  .open {
    background: #777;
    color: #fff;
  }
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
    background: #777;
    color: #fff;
  }
`
const ListItem = styled.li`
  height: 40px;
  padding-left: 30px;
  cursor: pointer;
  margin: 0;
  position: relative;

  transition: 0.5s background;
`
const Itemtitle = styled.p`
  float:left;
  max-width: 160px;
  width: 25%;
  margin: 0;
  line-height: 40px;

  user-select: none;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
const ProgressWrap = styled.div`
  position: relative;
  float:left;
  width: 72%;
  height: 100%;
`

const Progress = styled.div`
  position: absolute;
  
  background: #EEEEEE;
  width: 100%;
  height: 80%;
  top: 50%;

  border-radius: 5px;
  overflow: hidden;

  transform: translateY(-50%);
`

const Bar = styled.div`
  float: left;
  height: 100%;
  background: #FF7700;

  width: 0%;
  width: ${props => props.rate}%;
  transition: 1s width;
`

const CenterLine = styled.div`
  position: absolute;
  width: 2px;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
  
  background: #777;
`

const Skill = props => {
  const { project, desc, play } = props;
  const [ skillIndex, setSkillIndex ] = useState(-1);
  const currentSkill = SkillData.skill[skillIndex];

  return (
    <SkillWrap>
      <SkillDetail className={currentSkill && "open"}>
        { currentSkill ?
          <DetailWrap>
            <Rank>{currentSkill.rank}</Rank>
            <Title>{currentSkill.title}</Title>
            <Desc>{currentSkill.desc}</Desc>
            <DetailProgress>
              <Progress>
                <CenterLine />
                <Bar rate={currentSkill.rate}></Bar>
              </Progress>
              <Note>
                <NoteLeft>기초학습</NoteLeft>
                <NoteCenter>사용가능</NoteCenter>
                <NoteRight>자신있음</NoteRight>
              </Note>
            </DetailProgress>
          </DetailWrap>
          :
          <DetailWrap>
            <h3>오른쪽에 탭을 선택해주세요</h3>
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
                      <Bar rate={play ? item.rate: 0}></Bar>
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