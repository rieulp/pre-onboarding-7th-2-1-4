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

### 모바일 웹 기준으로 제작 ( 360px ~ 450px )

### 차량 리스트 페이지(메인 페이지) 구현

### 차량 상세 페이지 구현

- 데이터가 없을 때 화면 처리
- 데이터를 로드중일 때 화면 처리

React Query를 사용해서 서버에서 데이터를 받아 화면을 구성하고,
useQuery에서 제공하는 `isLoading`로 로딩 상태 화면을 처리했습니다.

```tsx
const { isLoading, data } = useQuery();

if (isLoading) return <로딩중일 때 />;
if (!data) return <데이터 없을 때 />;
return <데이터 />;
```

### 상세 페이지에서 메인 페이지로 돌아갈 때 선택된 Category 상태 유지

카테고리를 선택할 때, 선택한 카테고리의 index를 **SessionStorage**에 저장해 상세페이지에서 메인 페이지로 돌아갈 때 메인페이지에서 선택했던 카테고리를 유지했습니다.

### SEO

- 카카오톡, 페이스북에 공유 시 차량 정보가 노출되도록 설정

CSR로 구현된 페이지에 각 페이지마다 다른 차량 정보가 담긴 OpenGraph meta tag를 적용하고, 크롤러가 추가된 meta tag를 읽을 수 있도록 **react-helmet-async**로 동적으로 meta tag를 설정하고 **react-snap**을 사용해서 각 상세페이지들을 프리렌더링했습니다.

## 개발 조건 및 환경

- TypeScript
- Styled Component
- React Query
- axios
- react-helmet-async
- react-snap
- dayjs
