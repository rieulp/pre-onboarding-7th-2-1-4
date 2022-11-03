# pre-onboarding-7th-2-1-4

## 목표

- B2C 차량대여 서비스 모바일 웹 구현

## 배포 링크

[보러가기](http://pre-onboarding-7th-2-1-4-seven.vercel.app/)

## 프로젝트 실행 방법

1. husky 설정과 라이브러리를 설치합니다.

```shell
npm install
```

2. 프로젝트를 실행합니다.

```shell
npm start
```

## 구현내용

- [x] 모바일 웹 기준으로 제작 ( 360px ~ 450px )
- [x] 차량 리스트 페이지(메인 페이지) 구현
  - [x] 차량이 없을 때 화면 처리
  - [x] 차량 데이터를 로드중일 때 화면 처리
- [x] 차량 상세 페이지 구현
- [x] 상세 페이지에서 메인 페이지로 돌아갈 때 선택된 Category 상태 유지
- [ ] SEO
  - [ ] 카카오톡, 페이스북에 공유 시 차량 정보가 노출되도록 설정

## 개발 조건 및 환경

- TypeScript
- Styled Component
- React Query
- axios
- dayjs
