import React from "react"
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
  text-align: center;
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
  width: 80%;

  ul {
    list-style: none;
  }
`
const ListItem = styled.li`
  height: 30px;
`
const Itemtitle = styled.p`
  float:left;
  width: 120px;
  margin-right: 10px;
`
const Progress = styled.div`
  float:left;
  background: #ccc;
  width: 320px;
  height: 100%;
`

const Bar = styled.div`
  float: left;
  height: 100%;
  background: #000;

  width: ${props => props.rate/100 * 320}px;
`

const Skill = props => {
  const { project, desc } = props;

  return (
    <SkillWrap>
      <SkillDetail>
        <DetailWrap>
          <Rank>B</Rank>
          <Title>C++</Title>
          <Desc>desc</Desc>
        </DetailWrap>
      </SkillDetail>
      <SkillList>
        <ListWrap>
          <ul>
            {SkillData.skill.map((item, index:number) => {
              return (
                <ListItem>
                  <Itemtitle>{item.title}</Itemtitle>
                  <Progress>
                    <Bar rate={item.rate}></Bar>
                  </Progress>
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