## N석봉

> Project16-A-Account-Book

<div>
    <img src="https://img.shields.io/badge/React-v17.0.1-blue)"/>
    <img src="https://img.shields.io/badge/node-v14.15.1-green"/>
    <img src="https://img.shields.io/badge/storybook-v6.0.28-ff69b4"/>
    <img src="https://img.shields.io/badge/koa-v2.13.0-aaa"/>
    <img src="https://img.shields.io/badge/mongoose-v5.10.15-critical"/>
</div>

## 💸 [HOME PAGE](http://xn--n-b22fl8h.kro.kr/login)

돈은 너가 쓰거라, 관리는 내가 할테니

## 📌 소개

💰 개인 또는 공용으로 이용 할 수 있는 자산관리 서비스 입니다.

📈 입력된 데이터를 시작화하여 분석 및 파악 할 수 있는 기능을 제공합니다.

## 📌 팀원소개

|                                                       J128 윤석주                                                       |                                                                         J114 양예진                                                                         |                                                       J075 박상신                                                       |                                                       J081 박승환                                                       |
| :---------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: |
| <img src="https://ca.slack-edge.com/T019JFET9H7-U019R14MZQA-3fc3f52ba025-512" alt="img" height="150px" width="150px" /> | <img src="https://avatars1.githubusercontent.com/u/43772082?s=400&u=7b56e9b176e2f44faa90309d6b2e2820ea679a1c&v=4" alt="img" height="150px" width="150px" /> | <img src="https://ca.slack-edge.com/T019JFET9H7-U0198M695JT-ebc94d8fd643-512" alt="img" height="150px" width="150px" /> | <img src="https://ca.slack-edge.com/T019JFET9H7-U019L3LK929-3a96d76029a8-512" alt="img" height="150px" width="150px" /> |
|                                      [dbstjrwnekd](https://github.com/dbstjrwnekd)                                      |                                                           [yejineee](https://github.com/yejineee)                                                           |                                            [pkiop](https://github.com/pkiop)                                            |                                  [rolled-potatoes](https://github.com/rolled-potatoes)                                  |

## 📌 기술 스택

<center><img src="https://user-images.githubusercontent.com/44409642/99674728-c9ecfc80-2ab9-11eb-8039-06b9ebdc5e38.png"/></center>


## ⚙️ 프로젝트 구동 방법

우선 Repository clone한 후, Project16-A-Account-Book 폴더에 들어간다.
1. 몽고디비 설치 후 데이터베이스 생성
2. 백엔드
- 백엔드 환경 변수 설정
  - be 폴더 바로 밑에 .env 파일 생성
  - .env-template 안에 있는 내용 작성
  - .env 예시 (민감한 정보는 삭제하였습니다)
```
DB_USER=test
DB_PASSWORD=
DB_HOST=cluster0.3v1lt.mongodb.net
DB_DATABASE=account?retryWrites=true&w=majority
DB_PORT=
JWT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
HOST=http://localhost
BE_PORT=4000
FE_PORT=3000
EXPIRES_IN=24h
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

3. 프론트엔드
- 프론트엔드 환경 변수 설정
   - fe 폴더 바로 밑에 .env.development 파일 생성
   - .env_sample에 있는 내용 작성
   - .env 예시
```
REACT_APP_API_URL=http://localhost
REACT_APP_API_PORT=4000
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

3. localhost:BE_PORT 페이지 열기
