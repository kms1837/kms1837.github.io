import React from "react"
import styled from "styled-components"

const ItemWrap = styled.div`
  display: inline-block;

  width: ${props => props.width}px;
  margin: 0 auto;
  border: 1px solid #000;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-right: 10px;

`

const ThumbnailHover = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: #00000080;
  opacity: 0;
  transition: 0.35s opacity;
`

const HoverCenterTitle = styled.h2`
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  color: #fff;
`

const Thumbnail = styled.div`
  position: relative;
  height: 250px;
  box-sizing: border-box;
  border-radius: 3px 0 0px 3px;

  ${ThumbnailHover}:hover {
    opacity: 1;
  }
`

const ThumbnailImage = styled.img`
  height: 100%;
  width: 100%;
  background: #fff;
`

const ItemContent = styled.div`
  box-sizing: border-box;
  padding: 10px;
  height: 100%;
`

const ItemTitle = styled.h3`

`

const ItemDesc = styled.p`
  height: 120px;
  overflow: hidden;
  margin: 0;
`

const ProjectListItem = props => {
  const { info, width } = props;

  return (
    <ItemWrap width={width}>
      <Thumbnail>
        <ThumbnailHover>
          <HoverCenterTitle>자세히 보기</HoverCenterTitle>
        </ThumbnailHover>
        <ThumbnailImage></ThumbnailImage>
      </Thumbnail>
      <ItemContent>
        <ItemTitle>
          {info.title}
        </ItemTitle>
        <ItemDesc>
          {info.desc}
        </ItemDesc>
      </ItemContent>
    </ItemWrap>
  )
}

export default ProjectListItem