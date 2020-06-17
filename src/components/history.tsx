import React, { useEffect } from "react"
import styled from "styled-components"
import { motion, useAnimation } from "framer-motion"

const HistoryWrap = styled.div`
  position: relative;
  height: 200px;
`

const DateWrap = styled.div`
  position: absolute;
  top: -50%;
  text-align: center;
  width: 100%;
  font-size: 20px;
  font-weight: bold;

  color: #FF7700;
`

const EndCircle = styled.div`
  position: absolute;
  border-radius: 100%;
  width: 15px;
  height: 15px;
  background: #777;

  top: 50%;
  left: ${props => props.x}%;
  transform: translateY(-50%);
`

const EventWrap = styled(motion.div)`
  position: absolute;
  width: 100px;
  top: 43%;
  left: ${props => props.x}%;
  opacity: 0;
`

const PointCircle = styled.div`
  border-radius: 100%;
  border: 3px solid #FF7700;
  width: 30px;
  height: 30px;
  margin: 0 auto;
  background: #fff;
`

const EventLabel = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 12px;
`

const Line = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  height: 2px;
  width: 100%;
  background: #777;
`

const History = props => {
  const { play } = props;
  const eventAnimationControls = [];
  const commonAnimaSetting = {ease: "easeOut", duration: 0.5};
  const commonAnima = {opacity: [0, 1], top: ["0%", "43%"]};

  const evnetCount = 9

  for(let i=0; i<evnetCount; i++) {
    eventAnimationControls.push(useAnimation());
  }

  const sequence = async() => {
    for (const control of eventAnimationControls) {
      await control.start(commonAnima);
    }
  }

  useEffect(() => {
    if (play) {
      sequence();
    }
  }, [play]);

  return (
    <HistoryWrap>
      <EndCircle x={0}/>
      <Line/>
      <EventWrap x={5} animate={eventAnimationControls[0]} transition={commonAnimaSetting}>
        <DateWrap>
          1994
        </DateWrap>
        <PointCircle/>
        <EventLabel>제주도 출생</EventLabel>
      </EventWrap>

      <EventWrap x={15} animate={eventAnimationControls[1]} transition={commonAnimaSetting}>
        <PointCircle/>
        <EventLabel>제주도 지역 정보 올림피아드 동상</EventLabel>
      </EventWrap>

      <EventWrap x={22} animate={eventAnimationControls[2]} transition={commonAnimaSetting}>
        <PointCircle/>
        <EventLabel>한국 정보 올림피아드 장려</EventLabel>
      </EventWrap>

      <EventWrap x={30} animate={eventAnimationControls[3]} transition={commonAnimaSetting}>
        <PointCircle/>
        <EventLabel>특성화고 앱개발 경진대회 우수상</EventLabel>
      </EventWrap>

      
      <EventWrap x={40} animate={eventAnimationControls[4]} transition={commonAnimaSetting}>
        <DateWrap>
          2013
        </DateWrap>
        <PointCircle/>
        <EventLabel>세종대학교 입학</EventLabel>
      </EventWrap>

      <EventWrap x={47} animate={eventAnimationControls[5]} transition={commonAnimaSetting}>
        <PointCircle/>
        <EventLabel>게임개발 소모임 판도라큐브 가입</EventLabel>
      </EventWrap>

      <EventWrap x={55} animate={eventAnimationControls[6]} transition={commonAnimaSetting}>
        <PointCircle/>
        <EventLabel>SW마에스트로 4기</EventLabel>
      </EventWrap>

      <EventWrap x={65} animate={eventAnimationControls[7]} transition={commonAnimaSetting}>
        <DateWrap>
          2015
        </DateWrap>
        <PointCircle/>
        <EventLabel>SW개발병</EventLabel>
      </EventWrap>

      <EventWrap x={80} animate={eventAnimationControls[8]} transition={commonAnimaSetting}>
        <DateWrap>
          2019
        </DateWrap>
        <PointCircle/>
        <EventLabel>대학교 졸업</EventLabel>
      </EventWrap>
      <EndCircle x={100}/>
    </HistoryWrap>
  )
}

export default History
