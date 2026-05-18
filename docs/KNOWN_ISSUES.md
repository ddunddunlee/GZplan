# Known Issues

## 우선 확인된 문제

1. `calendar.html`과 `weekly.html`의 일정/반복/카테고리 로직이 거의 중복되어 있습니다. 한쪽만 수정하면 다른 화면과 동작이 달라질 수 있습니다.
2. 사이드바와 권한별 메뉴 처리도 페이지마다 조금씩 다릅니다. 새 메뉴를 추가하거나 제거할 때 전체 HTML을 검색해야 합니다.
3. `MEMBER_IDS`, Firebase 설정, 기본 카테고리 등이 여러 파일에 하드코딩되어 있습니다. `config/memberOrder`를 일부 화면만 반영하므로 멤버 변경 시 화면별 차이가 날 수 있습니다.
4. `member.html`의 서비스워커 등록은 해당 페이지에서만 실행됩니다. 다른 페이지에서 알림 기능을 기대하면 등록 상태에 따라 동작이 다를 수 있습니다.
5. 회의록 기능은 `_removed/meeting.html`로 격리했습니다. 다시 살릴 경우 API 키를 서버 프록시나 Cloud Function으로 숨기는 구조가 필요합니다.
6. 일부 이벤트는 inline `onclick`과 전역 `window.*` 함수에 의존합니다. 문자열 삽입이 많은 화면은 따옴표가 포함된 데이터에서 오류가 날 수 있습니다.
7. Firestore 오류를 빈 `catch`로 삼키는 코드가 여러 곳에 있습니다. 운영 중 “아무 반응 없음”처럼 보일 수 있어 토스트/로그 처리가 필요합니다.
8. 로그인은 현재 요청대로 유지했지만, 평문 비밀번호와 `localStorage.tt_user` 기반 권한 판정은 보안상 약합니다. Firestore 보안 규칙 확인이 필수입니다.

## 다음 정리 후보

1. `shared/config.js`: Firebase 설정, 멤버 목록, 공통 색상
2. `shared/session.js`: 로그인 세션 확인, 역할 판정, 로그아웃
3. `shared/sidebar.js`: 사이드바 렌더링과 접기 상태
4. `shared/calendar.js`: 반복 일정 계산, 카테고리 처리
5. `shared/firestore-paths.js`: 컬렉션/문서 경로 헬퍼

