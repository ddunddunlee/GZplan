# GZ Plan

경영기획팀 업무 관리용 정적 PWA입니다. 별도 빌드 과정 없이 HTML 파일을 직접 열거나 정적 서버에 올려 실행하는 구조이며, 데이터는 Firebase Firestore를 사용합니다.

## 현재 구조

```text
gz-app-review/
  index.html          로그인
  dashboard.html      홈 대시보드
  member.html         팀원 업무 화면
  manager.html        팀장/관리자 업무 화면
  calendar.html       월간 캘린더
  weekly.html         주간 스케줄
  report.html         주간 보고 작성/관리
  report_all.html     주간 보고 전체 보기
  memo.html           개인 메모장
  admin.html          계정/조직/보고자 관리
  manifest.json       PWA manifest
  sw.js               서비스워커/알림
  assets/icons/       앱 아이콘
  docs/               유지보수 문서
  _removed/           제거한 기능 보관
```

## 제거한 기능

회의록 기능은 Groq API 키와 음성/AI 처리 코드가 클라이언트에 포함되어 있어 운영 리스크가 큽니다. 현재 활성 앱에서는 제외했고, 보관본은 `_removed/meeting.html`에 두되 Groq 키 값은 비워두었습니다.

## 작업 원칙

- 로그인/권한 구조는 현재 방식 그대로 유지합니다.
- 기능 수정 시 공통으로 복제된 코드가 있는지 먼저 확인합니다.
- 특히 사이드바, Firebase 설정, 멤버 목록, 캘린더/반복 일정 로직은 여러 HTML에 중복되어 있습니다.
- 큰 리팩터링 전에는 먼저 단일 기능을 고치고, 영향 범위를 확인하는 방식이 안전합니다.
