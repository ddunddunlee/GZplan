# Data Model

현재 코드 기준으로 확인한 Firestore 구조입니다.

```text
accounts/{accountId}
  displayName, password, role, disabled, createdAt, updatedAt

tasks/{memberId}/items/{taskId}
  title, desc, status, priority, reporter, occurredDate, startDate, due,
  order, pinned, history, members, sharedTaskId, isShared, isPrivate, updated

sharedTasks/{sharedTaskId}
  title, desc, priority, members, createdAt

taskPool/{poolTaskId}
  title, desc, priority, reporter, startDate, due, createdAt

schedules/{scheduleId}
  title, category, type, author, authorId, startDate, endDate, repeat,
  exceptions, memo, source, calendarId, seriesId, isException, createdAt

weeklyReports/{memberId}/weeks/{weekKey}
  weekKey, content, sections, tasks, taskMemo, registeredTasks, updatedAt

weeklyMgrNote/{weekKey}
  content, updatedAt

memos/{memberId}/items/{memoId}
  text, tags, author, date, edited, createdAt

config/memberOrder
  order, updatedAt

config/memberOrgs
  orgs, updatedAt

settings/reporters
  list

settings/calCategories
  list, overrides
```

