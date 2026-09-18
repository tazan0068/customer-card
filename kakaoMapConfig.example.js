// 시공사 지도 분포 팝업(§지도 분포 라운드) — 카카오맵 JavaScript 키 설정 예시 파일.
//
// 사용법:
// 1. 이 파일을 복사해서 저장소 루트에 kakaoMapConfig.js라는 이름으로 저장한다
//    (kakaoMapConfig.js는 .gitignore에 등록되어 있어 커밋되지 않는다).
// 2. 아래 javascriptKey 값을 카카오 디벨로퍼스에서 발급받은 "JavaScript 키"로 바꾼다.
//    - REST API 키/어드민 키는 여기 넣지 않는다(이 앱은 JavaScript 키만 사용한다).
//    - 카카오 디벨로퍼스 콘솔 > 내 애플리케이션 > 플랫폼 > Web 플랫폼에
//      실제 서비스 도메인(예: https://hansol941201.github.io)이
//      "허용 도메인"으로 등록되어 있어야 한다 — JavaScript 키는 이 도메인 제한으로
//      보호되며(카카오가 클라이언트 노출을 전제로 발급하는 키), REST API 키와는
//      성격이 다르다.
// 3. index.html은 이 파일이 없어도 정상 동작한다 — 지도 분포 팝업만
//    "지도 설정이 필요합니다" 안내를 보여주고, 나머지 고객관리 기능/Firebase
//    연동/localStorage는 전혀 영향받지 않는다.
//
// 실제 GitHub Pages 배포에 키를 반영하는 방법(로컬 미리보기용 이 파일과는 별개):
// 이 파일은 절대 커밋되지 않으므로, 실제 배포된 사이트는 이 파일을 갖고 있지 않다.
// 대신 .github/workflows/pages.yml이 배포 빌드 시점에 GitHub Secrets의
// KAKAO_MAP_JS_KEY 값으로 kakaoMapConfig.js를 자동 생성해 배포 아티팩트에만 넣는다
// (저장소 코드에는 키가 절대 남지 않는다). 자세한 설정 절차는 KAKAO_MAP_SETUP.md 참고.
window.SHIN2_KAKAO_MAP_CONFIG = {
  javascriptKey: 'YOUR_KAKAO_JAVASCRIPT_KEY'
};
