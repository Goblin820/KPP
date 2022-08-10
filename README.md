# KPP

Korean Pop People의 줄임말로, 한국 대중가요에 대한 소개 및 커뮤니티 사이트입니다.

한국 대중가요에 대한 뮤직비디오 소개 및 엔터테이먼트의 실시간 주가확인이 가능합니다. 한국 대중가요의 간단한 역사 소개, 게시판을 통한 커뮤니티 활성화, 실시간 채팅을 지원합니다.

- 진행 기간 : 2021-03-08 ~ 2021-03-24
- 사이트 링크 : <http://boovelop.duckdns.org:3001/>
- 블로그 기록 : <https://velog.io/@goblin820/%EA%B0%9C%EC%9D%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-KPP-1>
- 2022-08 리팩토링 및 버그 수정 진행중, [리팩토링 하면서 고민한 흔적](https://github.com/trevor1107/KPP/blob/main/think.md)

## 사용 기술 및 라이브러리

- HTML, CSS, JavaScript
- Node.js, Express, MySQL, socket.io, Sequelize
- jQuery, Pug, SlickSlider, SummerNote
- 카카오 API 로그인, 로그아웃
- 오라클 클라우드 플랫폼 가상서버 배포

## 구현 기술

#### HTML

- pug 템플릿으로 간결한 코드 작성

#### Auth

- 카카오 API 연동 로그인 및 로그아웃 기능 구현

#### 메인 페이지

- 로컬 비디오파일 랜덤 재생 및 플레이 리스트 자동 재생 구현
- 크롤링 기술으로 주식 정보를 스크랩하고 주식 정보를 자동 스크롤 모션으로 표시
- Slick Slider 라이브러리 활용, 특정 폴더의 이미지 파일들을 동적으로 추가하여 표시
- 로컬 json파일 파싱하여 슬라이더 이미지 클릭시 유튜브 팝업 표시

#### KPOP 페이지

- 대중가요 역사를 소개하는 스크롤링 애니메이션 구현

#### Community 페이지

- 게시판 CRUD, SummerNote 라이브러리 활용, 이미지 업로드 커스텀
- Node.js socket.io 라이브러리 활용, 소켓 통신으로 실시간 전체 채팅 구현

#### DB

- Node.js Sequelize 라이브러리 활용, DB 모델링 설계 및 관리

#### 배포

- OracleCloud 인스턴싱 컴퓨팅 서버에 배포 및 DNS, 포트 포워딩 설정
