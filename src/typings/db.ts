export type FuelType = 'gasoline' | 'ev' | 'hybrid';
export type SegmentType = 'ALL' | 'E' | 'D' | 'C' | 'SUV';

export enum FUEL_TYPE_ENUM {
  gasoline = '가솔린',
  ev = '전기',
  hybrid = '하이브리드',
}

export enum SEGMENT_TYPE_ENUM {
  ALL = '전체',
  E = '대형',
  D = '중형',
  C = '소형',
  SUV = 'SUV',
}

// responseBody
export interface IResponseBody {
  payload: ICar[];
}

export interface ICar {
  id: number; // 아이디
  amount: number; // 가격
  attribute: IAttribute; // 차량 설명
  startDate: Date; // 구독 시작 가능일
  createdAt: Date; // 생성 날짜
  insurance?: IInsurance[]; // 보험 정보
  additionalProducts?: IAdditionalProducts[]; // 추가상품 정보
}

// 차량 상세정보
export interface IAttribute {
  brand: string; // 브랜드
  name: string; // 차량 이름
  segment: SegmentType; // 차량 크기분류(세그먼트)
  fuelType: FuelType; // 차량 연료분류
  imageUrl: string; // 이미지 URL
}

// 보험
export interface IInsurance {
  name: string; // 이름
  description: string; // 설명
}

export interface IAdditionalProducts {
  name: string; // 이름
  amount: number; // 가격
}
