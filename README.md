# 리액트로 쇼핑몰 만들기

> 페이지 이름이 super-super-glue인 이유는 따로 없다.  
> 내가 보던 영화의 대사를 가져온 것 뿐이다.

```
✅ Firebase와 클라우디너리로 리액트 프로젝트 제작

- 제작기간: 2024.01.08 ~ 2024.02.22
- 구현환경: React, TailwindCSS, firebase, cloudinary
- 배포방법: Netlify
- 특징
  - 로그인
  - 상품 등록
  - 장바구니 추가/수정/삭제
  - 모듈 생성 후 작업(버튼, 뱃지 등등 컴포넌트보다 작은 단위)
  - 반응형
```

[💚 super-super-glue 💚](https://super-super-glue.netlify.app)

<details>
<summary>페이지 대표 이미지</summary>

<img width="1000" alt="스크린샷 2024-03-21 오후 2 40 50" src="https://github.com/DuetoPark/super-super-glue/assets/69448900/bbf3de72-e087-4dc2-9c26-a3da104b0947">
</details>

<br/>

## 🦄 프로젝트 관리 방법

### 프로젝트 기획

[GitHub Issue](https://github.com/DuetoPark/super-super-glue/issues)

<details>
<summary>GitHub Issue 예시 이미지</summary>

<img width="1000" alt="스크린샷 2024-03-21 오후 2 29 52" src="https://github.com/DuetoPark/super-super-glue/assets/69448900/f31ff3c7-3144-43c7-9570-cd2495e5a5b1">
<img width="1000" alt="스크린샷 2024-03-21 오후 2 30 55" src="https://github.com/DuetoPark/super-super-glue/assets/69448900/2b742f03-e6d2-4f2f-8b2d-1094bd8676c0">
</details>

<br/>

### 프로젝트 관리

[GitHub Project](https://github.com/users/DuetoPark/projects/3)

<details>
<summary>GitHub Project 예시 이미지</summary>

<img width="1000" alt="스크린샷 2024-03-21 오후 2 31 29" src="https://github.com/DuetoPark/super-super-glue/assets/69448900/5cc3d98b-a06f-426c-b03d-8a574eba9a14">
</details>

<br/>

### 문제와 해결

[GitHub WIKI](https://github.com/DuetoPark/super-super-glue/wiki)

<details>
<summary>GitHub WIKI 예시 이미지 및 링크</summary>

<img width="1000" alt="스크린샷 2024-03-21 오후 2 50 39" src="https://github.com/DuetoPark/super-super-glue/assets/69448900/220ec4f4-a635-4190-ad7e-ec2d9e8a202f">

#### 모듈

- [form file 유효성 검사](https://github.com/DuetoPark/super-super-glue/wiki/form-file-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC)

#### 헤더

- [Firebase google auth 연결](https://github.com/DuetoPark/super-super-glue/wiki/Firebase-google-auth-%EC%97%B0%EA%B2%B0)
- [google auth 로그인 로그아웃 구현](https://github.com/DuetoPark/super-super-glue/wiki/google-auth-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EB%A1%9C%EA%B7%B8%EC%95%84%EC%9B%83-%EA%B5%AC%ED%98%84)
- [Admin 여부 확인](https://github.com/DuetoPark/super-super-glue/wiki/Admin-%EC%97%AC%EB%B6%80-%ED%99%95%EC%9D%B8)
- [메뉴별 redirect](https://github.com/DuetoPark/super-super-glue/wiki/%EB%A9%94%EB%89%B4%EB%B3%84-redirect)

#### 어드민 - 등록 폼

- [이미지 저장 방법](https://github.com/DuetoPark/super-super-glue/wiki/%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%A0%80%EC%9E%A5-%EB%B0%A9%EB%B2%95)
- [하위 컴포넌트 state를 상위 컴포넌트로 옮기기](https://github.com/DuetoPark/super-super-glue/wiki/%ED%95%98%EC%9C%84-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-state%EB%A5%BC-%EC%83%81%EC%9C%84-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%A1%9C-%EC%98%AE%EA%B8%B0%EA%B8%B0)

#### 상세

- [cart 데이터 구조랑 호출](https://github.com/DuetoPark/super-super-glue/wiki/cart-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B5%AC%EC%A1%B0%EB%9E%91-%ED%98%B8%EC%B6%9C)
</details>

<br/>

### 브랜치 관리

- 기능별로 브랜치 생성하여 pull request

| 브랜치명       | 기능                                                               |
| -------------- | ------------------------------------------------------------------ |
| gnb            | 스타일 작업, 로그인, admin 권한, redirect                          |
| module         | 모듈 생성 ex) Button, Badge, FileInput, Input, Spinner, Toast, ... |
| feature-cart   | 장바구니 담기, 수정, 삭제 구현                                     |
| product-list   | 상품 데이터 fetching + print                                       |
| product-detail | 상세 데이터 fetching + print                                       |
| admin-regist   | 상품 등록                                                          |

<br/>

## 🧚 기능과 구현 화면

```
✅ 로그인
✅ 리다이렉트
✅ 장바구니 추가/수정/삭제
✅ 상품등록
```

<details>
<summary>로그인 구현 화면</summary>

https://github.com/DuetoPark/super-super-glue/assets/69448900/00d5d37e-a639-4dd5-a815-7dff960346b4

</details>

<details>
<summary>장바구니 구현 화면</summary>

#### 장바구니 추가

https://github.com/DuetoPark/super-super-glue/assets/69448900/93b9b0cb-ea16-4625-9b5f-77819ecda76a

#### 장바구니 수정

https://github.com/DuetoPark/super-super-glue/assets/69448900/7a939986-8703-4409-87a3-3f0ce8565500

#### 장바구니 삭제

https://github.com/DuetoPark/super-super-glue/assets/69448900/d21c8f35-9ddc-497f-b64b-34a6891eb9d8

</details>

<details>
<summary>상품등록 구현 화면</summary>

#### 유효성 검사 - string

https://github.com/DuetoPark/super-super-glue/assets/69448900/fb8973ee-29bb-4c7e-8f70-4ec8e529cbd1

#### 유효성 검사 - file

https://github.com/DuetoPark/super-super-glue/assets/69448900/7bf1d550-b276-4da6-9aec-b37657543b67

#### 상품등록

https://github.com/DuetoPark/super-super-glue/assets/69448900/580b3642-94e0-4ac0-a8eb-79eab453455a

</details>

<br/>

## 🚀 구현 방법

- 로그인
  - firebase google auth를 이용해 로그인 구현
  - 모바일은 signInWithRedirect를 사용해 액세시 차단 에러 수정
    - 데스크탑: popup 로그인
    - 모바일: redirect 로그인 (safari에서 서드파티 에러발생하여 수정 중입니다)
- 리다이렉트

  - <ProtectPage> 컴포넌트를 사용해 **로그인 상태와 회원 등급에 따라 페이지 접근 처리**
  - 로그인 상태 확인
    - 로그인: `useAuthContext` 에 저장된 `userInfo != null`
    - 비로그인: `useAuthContext` 에 저장된 `userInfo == null`
    - 비로그인은 장바구니(/cart), 어드민페이지( /admin/…) 접근 불가
  - 회원등급 확인
    - <ProtectPage> 컴포넌트의 `requiredAdmin` 속성을 선언하고 userInfo.admin을 확인
    - 어드민: `userInfo.admin == true`
    - 일반회원: `userInfo.admin == false`
  - 로그인과 회원등급에 따라 헤더 메뉴 변경

    - 메뉴 데이터에 role과 login 값을 확인하여 유저의 상태에 따라 메뉴를 filter

      | 로그인 상태 | 헤더 메뉴 구성                                          | 화면                                                                                                                                                                       |
      | ----------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
      | 비로그인    | 상품보기, 모듈, 로그인                                  | <img width="1000" alt="스크린샷 2024-03-27 오후 3 44 18" src="https://github.com/DuetoPark/super-super-glue/assets/69448900/6e07cd12-ddd7-462b-99e6-dfb04da7ef8c"> |
      | 일반회원    | 상품보기, 장바구니, 모듈, 로그아웃                      | <img width="1000" alt="스크린샷 2024-03-27 오후 3 44 13" src="https://github.com/DuetoPark/super-super-glue/assets/69448900/4dce1d27-571a-4e16-8154-661070dc7a8c"> |
      | 어드민      | 상품보기, 장바구니, 등록상품 리스트, 상품등록, 로그아웃 | <img width="1000" alt="스크린샷 2024-03-27 오후 3 44 32" src="https://github.com/DuetoPark/super-super-glue/assets/69448900/98fcd534-a695-40d6-a738-8720f52de4d3"> |

- 장바구니
  - 데이터 저장
    - Firebase realtime database를 사용하여 user.uid마다 장바구니 데이터 저장
  - `useMutation`을 사용하여 변경된 데이터를 장바구니 메뉴에 반영
    - 장바구니 데이터에 상품이 없는 경우: 메뉴 비활성
    - 장바구니 데이터에 상품이 있는 경우: 메뉴에 상품 개수 표기
- 상품 등록
  - 유효성 검사
    - `react-hook-form`을 사용하여 string 데이터의 유효성 검사 진행
    - `DataTransfer`를 사용하여 file 데이터의 유효성 검사 진행
  - 데이터 저장
    - Cloudinary에 file 저장하고 획득한 url을 사용해 Firebase realtime database에 상품 데이터 저장

<br/>

## 📦 사용한 packages

### 라우터

- react-dom-route

### 폼

- react-hook-form

### 스타일

- tailwind
- react-icons
- scss
- classnames
- framer-motion
- react-spinners

<br/>

## 🎨 페이지 구성 및 기능

### 글로벌 헤더

- 헤더
  - 로고
    - 홈으로 이동
  - 메뉴
    - 새 상품
    - 카트 (member)
    - 상품 등록 폼 (admin)
    - 등록 상품 리스트 (admin)
    - module
    - auth
