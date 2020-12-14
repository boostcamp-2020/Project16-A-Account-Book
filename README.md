## N석봉 - 가계부 서비스
<p align='center'>
<img width='50%' src='https://i.imgur.com/c283ZvJ.png'>
</p>

<p align='center'>
    <img src="https://img.shields.io/badge/React-v17.0.1-blue?logo=React"/>
    <img src="https://img.shields.io/badge/node.js-v14.15.1-green?logo=Node.js"/>
    <img src="https://img.shields.io/badge/storybook-v6.0.28-ff69b4?logo=storybook"/>
    <img src="https://img.shields.io/badge/koa-v2.13.0-aaa?logo=Kaggle"/>
        <img src="https://img.shields.io/badge/mongodb-v4.0.10-critical?logo=mongodb"/>
        <img src="https://img.shields.io/badge/mongoose-v5.10.15-critical?logo=mongodb"/>
    <img src="https://img.shields.io/badge/Typescript-v4.0.5-blue?logo=typescript"/>
    <img src="https://img.shields.io/badge/jest-v26.6.3-orange?logo=jest"/>
    <img src="https://img.shields.io/badge/MobX-v6.0.4-orange?logo=Monster">
    <img src="https://img.shields.io/badge/prettier-^2.2.0-yellow?logo=prettier" />
    <img src="https://img.shields.io/badge/eslint-^7.11.0-yellow?logo=eslint">
    <img src="https://img.shields.io/badge/yarn-^1.22.5-yellow?logo=yarn">
</p>

## 🏠 [HOME PAGE](http://xn--n-b22fl8h.kro.kr)

돈은 너가 쓰거라 🤑, 관리는 내가 할테니 😎

## 📌 가계부 서비스 소개
###  👩‍👩‍👧‍👦 개인 또는 공용으로 관리할 수 있는 자산관리 가계부 서비스
> - 혼자만의 가계부를 관리할 수 있습니다.
> - 친구를 초대하여 함께 가계부를 관리할 수 있습니다. 
### 📈 지출과 수입에 대한 통계 제공
> - 그동안의 지출내역과 수입을 **분석**하여 입출금 현황을 파악할 수 있습니다.
### ✔️ 내가 보고 싶은 것들만 필터링
> - 원하는 내역만 **필터링**해서 볼 수 있는 기능을 제공합니다.
### 📆 달력을 통한 거래내역 확인
> - 달 별로 돈의 사용 내역을 확인할 수 있습니다!
### 📩 MMS를 입력하여 바로 거래내역에 추가
> - 문자로 온 거래내역을 치기만 하면, 바로 거래내역에 추가할 수 있습니다.

<!-- ## 📌 기획 배경
- 스마트폰 기기에 맞춘 웹 서비스
- 
바쁜 일상을 살아가는 현대사회인들은 자금을 관리해줄 서비스가 필요하지만 시간을 투자하기는 쉽지 않습니다. 가계부 서비스인 N석봉은 이부분에서 프로젝트 의도를 기획했습니다. 어쩌구 저쩌구
 -->
## 📌 [기술 및 논의 정리 - WIKI](https://github.com/boostcamp-2020/Project16-A-Account-Book/wiki)

## 📌 주요 기능

|[🔗 로그인](https://github.com/boostcamp-2020/Project16-A-Account-Book/wiki/%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C#-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%ED%8E%98%EC%9D%B4%EC%A7%80%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C)|[🔗 가계부리스트]()|[🔗 메인페이지]()|[🔗 달력페이지](https://github.com/boostcamp-2020/Project16-A-Account-Book/wiki/%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C#-%EB%8B%AC%EB%A0%A5-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%86%8C%EA%B0%9C)|
|:--:|:--:|:--:|:--:|
|![](https://i.imgur.com/Vh06k4p.png)|![](https://i.imgur.com/lfBYG9C.png)|![](https://i.imgur.com/fp18GM8.png)|![](https://i.imgur.com/QqL7sad.png)|

|[🔗 통계페이지](https://github.com/boostcamp-2020/Project16-A-Account-Book/wiki/%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C#-%ED%86%B5%EA%B3%84-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%86%8C%EA%B0%9C)|[🔗 채팅페이지]()|[🔗 태그페이지]()|[🔗 알람 모달]()|
|:--:|:--:|:--:|:--:|
|![](https://i.imgur.com/RDIQb3Q.png)|![](https://i.imgur.com/rhwIsA1.png)|![](https://i.imgur.com/36NIY7b.png)|<img width='500' src='https://i.imgur.com/3N5mWKB.png'>|

## 📌서비스 흐름
![](https://i.imgur.com/w2UftIk.png)


## ⚙️ 프로젝트 구동 방법

우선 Repository clone한 후, Project16-A-Account-Book 폴더에 들어간다.

**1. 몽고디비 설치 후 데이터베이스 생성**
**2. 백엔드**
- 백엔드 환경 변수 설정
  - be 폴더 바로 밑에 .env 파일 생성
  - .env-template 안에 있는 내용 작성
  - .env 예시
      - mongodb cloud의 경우 DB_PORT는 작성하지 않기
    ```
    DB_USER=[데이터베이스 유저 이름 (ex. test)]
    
    DB_PASSWORD=[데이터베이스 password (ex. 123123)]
    
    DB_HOST=[데이터베이스 호스트 이름 (ex. cluster0.3v1lt.mongodb.net)]
    
    DB_DATABASE=[데이터베이스 이름 (ex. account?retryWrites=true&w=majority)]
    
    DB_PORT=[데이터베이스 포트 (ex. 27017)]
    
    JWT_SECRET=[JWT secret key (ex. ajsdFAG430tu04qkn) ]
    
    GITHUB_ID=[GitHub_OAuth_Client_Id (ex. 6df23f10bc0622c89804)]
    
    GITHUB_SECRET=[GitHub_OAuth_Client_Secret]
    
    HOST=[서버 주소 (ex. http://localhost)]
    
    BE_PORT=[백엔드엔드 서버 포트 (ex. 4000)]
    
    FE_PORT=[프론트엔드 서버 포트 (ex. 3000)]
    
    EXPIRES_IN=[JWT 토큰 만료 시간 (ex. 24h)]
    ```

- 실행

    ```jsx
    cd be
    yarn 
    yarn dev
    ```
    or
    ```jsx
    cd be
    npm install 
    npm run dev
    ```

**3. 프론트엔드**
- 프론트엔드 환경 변수 설정
   - fe 폴더 바로 밑에 .env.development 파일 생성
   - .env_sample에 있는 내용 작성
   - .env 예시
    ```
    REACT_APP_API_URL=[서버 주소 (ex. http://localhost)]
    
    REACT_APP_API_PORT=[프론트엔드 서버 포트 (ex. 4000)]
    ```

- 실행
    ```jsx
    cd fe
    yarn
    yarn start
    ```
    or
    ```jsx
    cd fe
    npm install 
    npm run start
    ```

## 📌 팀원소개

|                                                       J128 윤석주                                                       |                                                                         J114 양예진                                                                         |                                                       J075 박상신                                                       |                                                       J081 박승환                                                       |
| :---------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: |
| <img src="https://ca.slack-edge.com/T019JFET9H7-U019R14MZQA-3fc3f52ba025-512" alt="img" height="150px" width="150px" /> | <img src="https://avatars1.githubusercontent.com/u/43772082?s=400&u=7b56e9b176e2f44faa90309d6b2e2820ea679a1c&v=4" alt="img" height="150px" width="150px" /> | <img src="https://ca.slack-edge.com/T019JFET9H7-U0198M695JT-ebc94d8fd643-512" alt="img" height="150px" width="150px" /> | <img src="https://ca.slack-edge.com/T019JFET9H7-U019L3LK929-3a96d76029a8-512" alt="img" height="150px" width="150px" /> |
|                                      [dbstjrwnekd](https://github.com/dbstjrwnekd)                                      |                                                           [yejineee](https://github.com/yejineee)                                                           |                                            [pkiop](https://github.com/pkiop)                                            |                                  [rolled-potatoes](https://github.com/rolled-potatoes)                                  |


