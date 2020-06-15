---
slug: "/portfolio/news_bot"
title: "디스코드 한국 게임뉴스봇"
start: "2020-01-01"
end: ""
date: "2020-06-16"
github: "https://github.com/kms1837/discord-game_news-bot"
file: ""
category: "python"
---

### 소개
디스이즈게임, 루리웹, 인벤, 트위터, 스팀 동시접속자 순위 등 페이지를 크롤링하여 채팅창에 최신 게임 뉴스 정보를 보여주는 디스코드 봇

### 팀 구성
* 1인 프로젝트

### 기술
Python 3.x, requests, Beautiful Soup, selenium

## 설명
- 해당 뉴스사이트의 최신글 페이지를 requests로 크롤링후 가공하여 채팅으로 내보냅니다.
- 동적 로딩 사이트인 경우 selenium을 이용해 데이터로드를 기다린후 크롤링합니다.