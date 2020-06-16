import React from "react"
import styled from "styled-components"
import Image from "../components/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ItemWrap = styled.div`
  display: inline-block;

  width: ${props => props.width}px;
  margin: 0 auto;
  border: 1px solid #999;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-bottom: 10px;
  margin-right: 10px;
  background: #fff;
`

const ThumbnailHover = styled.a`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  background: #00000080;
  opacity: 0;
  transition: 0.35s opacity;
`

const HoverCenterTitle = styled.h2`
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  color: #fff;

  width: 50%;
  margin: 0 auto;
  border: 3px solid #fff;
  border-radius: 5px;
  padding: 5px 0;
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

const ThumbnailImage = styled.div`
  height: 100%;
  width: 100%;
  background: #777;
`

const ItemContent = styled.div`
  box-sizing: border-box;
  padding: 10px;
  height: 100%;
`

const ItemTitle = styled.h3`

`

const ItemDesc = styled.p`
  height: 80px;
  overflow: hidden;
  margin: 0;
`

const ItemLinks = styled.div`
  height: 35px;
  overflow: hidden;
  text-align: right;
`

const ProjectListItem = props => {
  const { info, width } = props;

  return (
    <ItemWrap width={width}>
      <Thumbnail>
        <ThumbnailImage>
          {info.thumbnail && <Image file={`thumbnail/${info.thumbnail}`}/>}
        </ThumbnailImage>
        <ThumbnailHover href={`${info.url}`}>
          <HoverCenterTitle>
            자세히 보기
          </HoverCenterTitle>
        </ThumbnailHover>
      </Thumbnail>
      <ItemContent>
        <ItemTitle>
          {info.title}
        </ItemTitle>
        <ItemDesc>
          {info.desc}
        </ItemDesc>
        <ItemLinks>
          {info.github && <a href={info.github}>
            <FontAwesomeIcon icon={faGithub} size="2x"/>
          </a>}
        </ItemLinks>
      </ItemContent>
    </ItemWrap>
  )
}

export default ProjectListItem