# ShoppingMall-Toy Project

## 🖥 프로젝트 소개
React를 이용하여 구성한 쇼핑몰 사이트입니다. 쇼핑몰 사이트의 구조를 참고하여 개발했습니다.

## 📆 개발 기간
2022.10.07 - 현재 (미정)

## ⚙ 개발 환경
- **TypeScript**
- **Framework**: React
- 

## ESLint 설정
이 템플릿은 Vite에서 React를 사용하여 HMR 및 ESLint 규칙을 설정하는 최소한의 구성을 제공합니다.

### 공식 플러그인
- `@vitejs/plugin-react`: Babel을 사용하여 Fast Refresh 제공
- `@vitejs/plugin-react-swc`: SWC를 사용하여 Fast Refresh 제공

### ESLint 구성 확장
생산 애플리케이션을 개발 중이라면, 다음과 같이 타입 인식 lint 규칙을 활성화하는 것이 좋습니다:

1. **top-level `parserOptions` 구성**:
   ```javascript
   export default tseslint.config({
     languageOptions: {
       parserOptions: {
         project: ['./tsconfig.node.json', './tsconfig.app.json'],
         tsconfigRootDir: import.meta.dirname,
       },
     },
   });
