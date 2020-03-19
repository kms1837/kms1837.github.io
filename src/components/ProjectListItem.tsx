import React from "react"
import styled from "styled-components"

const ItemWrap = styled.div`
  width: 800px;
  height: 150px;
  margin: 0 auto;
  border: 1px solid #000;
  border-radius: 5px;
  margin-bottom: 10px;
`

const Thumbnail = styled.div`
  float: left;
  height: 100%;
  width: 30%;
  background: #ccc;
  box-sizing: border-box;
  border-radius: 3px 0 0px 3px;
`

const ItemContent = styled.div`
  float: left;
  width: 70%;
  box-sizing: border-box;
  padding: 10px;
  height: 100%;
`

const ItemTitle = styled.h2`

`

const ItemDesc = styled.p`

`

const ProjectListItem = props => {
  const { title, desc } = props;

  return (
    <ItemWrap>
      <Thumbnail>

      </Thumbnail>
      <ItemContent>
        <ItemTitle>
          {title}
        </ItemTitle>
        <ItemDesc>
          {desc}
        </ItemDesc>
      </ItemContent>
    </ItemWrap>
  )
}

export default ProjectListItem