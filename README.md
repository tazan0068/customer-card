# 고객관리카드

고객 정보와 상담·업무 기록을 한곳에서 관리하기 위한 독립형 CRM 웹앱입니다.

## 바로 사용하기

**[고객관리카드 열기](https://tazan0068.github.io/customer-card/)**

별도의 설치 없이 웹브라우저에서 바로 사용할 수 있습니다.

## 주요 특징

- 고객관리카드 전용 독립 저장소
- 브라우저에서 바로 실행되는 정적 웹앱
- Firebase Firestore 연동 지원
- Firebase 설정이 없을 때 로컬 저장 방식으로 동작
- GitHub Pages 자동 배포

## 프로젝트 구조

```text
index.html                   고객관리카드 메인 화면
firebaseConfig.js            Firebase 연결 설정
firebaseConfig.example.js    Firebase 설정 예시
.github/workflows/            GitHub Pages 배포 설정
```

## Firebase 설정

`firebaseConfig.example.js`를 참고해 Firebase 프로젝트 정보를 설정합니다. 실제 데이터 접근 권한은 Firestore 보안 규칙에서 관리해야 합니다.

> 고객 정보나 인증정보를 공개 저장소에 직접 올리지 마세요.
