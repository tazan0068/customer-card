# 시공사 지도 분포 팝업 — 카카오맵 키 설정 가이드

"지도 분포" 팝업은 카카오맵 JavaScript SDK를 씁니다. 키가 없어도 나머지 CRM
기능(고객 목록/상세/Firebase 동기화 등)은 전혀 영향받지 않고, 지도 팝업만
"지도 설정이 필요합니다" 안내를 보여줍니다.

키를 반영해야 하는 상황은 두 가지이고, 방법이 다릅니다.

## 1. 로컬에서 미리 보기(내 컴퓨터에서만)

1. `kakaoMapConfig.example.js`를 복사해 저장소 루트에 `kakaoMapConfig.js`로 저장합니다.
   (`kakaoMapConfig.js`는 `.gitignore`에 등록되어 있어 절대 커밋되지 않습니다.)
2. 파일 안의 `javascriptKey` 값을 카카오 디벨로퍼스에서 발급받은 **JavaScript 키**로 바꿉니다.
   - REST API 키/어드민 키는 사용하지 않습니다. 이 앱은 JavaScript 키만 씁니다.
3. `index.html`을 로컬 서버(예: `python3 -m http.server`)로 열면 지도가 뜹니다.

## 2. 실제 GitHub Pages 배포(https://hansol941201.github.io/card/)

로컬 파일(`kakaoMapConfig.js`)은 절대 커밋되지 않으므로, **실제 배포된 사이트는
이 파일을 갖고 있지 않습니다.** 대신 `.github/workflows/pages.yml`이 배포 빌드
시점에만 `kakaoMapConfig.js`를 자동 생성해서 배포 아티팩트에만 포함시킵니다 —
저장소 코드에는 키 값이 절대 남지 않습니다.

이 방식을 쓰려면 **GitHub 저장소 설정에서 딱 한 번**만 해주면 됩니다:

1. GitHub에서 `hansol941201/card` 저장소로 이동
2. **Settings → Secrets and variables → Actions → New repository secret**
3. Name: `KAKAO_MAP_JS_KEY`
4. Secret: 카카오 디벨로퍼스에서 발급받은 **JavaScript 키** 값을 붙여넣기
   (REST API 키/어드민 키 아님)
5. **Add secret** 클릭

이후 main 브랜치에 push될 때마다 배포 워크플로가 이 시크릿 값으로
`kakaoMapConfig.js`를 만들어 배포합니다. 시크릿을 등록하지 않으면 이전과 동일하게
"지도 설정이 필요합니다" 안내만 뜨고, 나머지 기능은 정상 동작합니다.

## 카카오 디벨로퍼스에서 허용 도메인 등록

JavaScript 키는 등록된 도메인에서만 동작합니다(클라이언트에 노출되는 걸 전제로
발급되는 키라 이 도메인 제한이 곧 보안 장치입니다). 카카오 디벨로퍼스 콘솔에서:

1. 내 애플리케이션 선택 → **플랫폼 → Web 플랫폼 등록**
2. 사이트 도메인에 `https://hansol941201.github.io` 추가

이 설정은 카카오 콘솔에서만 가능하고, 이 저장소의 코드나 GitHub Actions로는
확인·설정할 수 없습니다 — 직접 카카오 디벨로퍼스에서 확인해 주세요.

## 보안 원칙(이 프로젝트 전반에 적용)

- REST API 키·어드민 키는 이 프로젝트 어디에서도 쓰지 않습니다. JavaScript 키만 씁니다.
- 키는 절대 저장소 코드에 커밋되지 않습니다(`kakaoMapConfig.js`는 `.gitignore` 대상).
- 배포 시에는 GitHub Secrets → 빌드 시점 생성 → 배포 아티팩트에만 포함, 순서로만
  키가 반영됩니다.
- 지도 SDK 로드/지오코딩 실패는 지도 팝업 안에서만 안내되고, 고객 목록·상세·
  Firebase 동기화 등 나머지 CRM 기능과는 격리되어 있습니다.
