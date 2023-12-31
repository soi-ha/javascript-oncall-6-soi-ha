# 기능 구현 목록

## 개발자 비상근무

## 사용예시

```
비상 근무를 배정할 월과 시작 요일을 입력하세요> 5,월
평일 비상 근무 순번대로 사원 닉네임을 입력하세요> 준팍,도밥,고니,수아,루루,글로,솔로스타,우코,슬링키,참새,도리
휴일 비상 근무 순번대로 사원 닉네임을 입력하세요> 수아,루루,글로,솔로스타,우코,슬링키,참새,도리,준팍,도밥,고니

5월 1일 월 준팍
5월 2일 화 도밥
5월 3일 수 고니
5월 4일 목 수아
...
```

**사용자가 잘못된 값을 입력할 경우 throw문을 사용해 예외를 발생시킨다. 그런 다음, "[ERROR]"로 시작하는 에러 메시지를 출력하고 해당 부분부터 입력을 다시 받는다.**

## UI 로직

### 입력 (InputView)

- 비상근무 시작 날짜 입력 (writeEmergencyDates)

  `비상 근무를 배정할 월과 시작 요일을 입력하세요> `

- 비상근무 순번

  - 평일 비상근무 순번 (writeWeekday)

    `평일 비상 근무 순번대로 사원 닉네임을 입력하세요> `

  - 휴일(토요일, 일요일, 법정공휴일) 비상근무 순번 (writeHoliday)

    `휴일 비상 근무 순번대로 사원 닉네임을 입력하세요> `

**평일 순번 또는 휴일 순번의 입력 값이 올바르지 않은 경우, '평일 순번'부터 다시 입력 받는다.**

```
비상 근무를 배정할 월과 시작 요일을 입력하세요> 1,금
평일 비상 근무 순번대로 사원 닉네임을 입력하세요> 준팍,도밥,고니,수아,루루,글로
휴일 비상 근무 순번대로 사원 닉네임을 입력하세요> 수아,수아,글로,고니,도밥,준팍
[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.
평일 비상 근무 순번대로 사원 닉네임을 입력하세요>
```

### 출력 (OutputView)

- 비상 근무표 출력 (printEmergencySchedule)

  - 평일이면서 법정공휴일의 경우에만 요일 뒤에 (휴일) 표기를 해야 한다.
  - 비상 근무표 출력을 완료하면 프로그램은 종료된다.

    ```
    5월 1일 월 준팍
    5월 2일 화 도밥
    5월 3일 수 고니
    5월 4일 목 수아
    5월 5일 금(휴일) 루루
    5월 6일 토 수아
    5월 7일 일 글로
    5월 8일 월 루루
    5월 9일 화 글로
    5월 10일 수 솔로스타
    5월 11일 목 우코
    5월 12일 금 슬링키
    5월 13일 토 솔로스타
    5월 14일 일 우코
    5월 15일 월 참새
    5월 16일 화 도리
    5월 17일 수 준팍
    5월 18일 목 도밥
    5월 19일 금 고니
    5월 20일 토 슬링키
    5월 21일 일 참새
    5월 22일 월 수아
    5월 23일 화 루루
    5월 24일 수 글로
    5월 25일 목 솔로스타
    5월 26일 금 우코
    5월 27일 토 도리
    5월 28일 일 준팍
    5월 29일 월 슬링키
    5월 30일 화 참새
    5월 31일 수 도리
    ```

## 도메인 로직

### 비상근무 시작 날짜 (EmergencyDates.js)

- 월(숫자)과 시작 요일(일, 월, 화, 수, 목, 금, 토) 정보를 입력
- 배열의 길이는 2만 가능
- 월(0번째 배열)은 무조건 숫자만 가능
- 시작 요일(1번째 배열)은 무조건 `Day`에 존재하는 값만 입력 가능
- [ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.

### 비상근무 순번 (EmergencyShiftNumber.js)

- 중복된 이름 불가
- `,`를 기준으로 나눔
- 각 이름은 최대 5글자
- 각 이름은 영어 혹은 한글만 입력받을 것
- 최소 5명 입력
- 최대 35명을 넘지 않을 것
- 평일 비상근무 순번의 이름 리스트와 휴일 비상근무 순번 리스트의 이름은 모두 동일해야 함
- [ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.

### 입력받은 월의 달력 만들기 (CreateCalendar.js)

- InputView.writeEmergencyDates()에서 입력받은 값을 활용
- calendar.js의 LASTDAY와 HOLIDAY 활용
- return `[[1,'월'],[2,'화'],[3,'수(휴일)']]`

### 비상근무 배치 (WorkArrangement.js)

- 근무자 보호와 비상 근무 운영의 효율을 위해, 비상 근무자는 어떤 경우에도 연속 2일은 근무할 수 없음
- 순번상 특정 근무자가 연속 2일 근무하게 되는 상황에는, 다음 근무자와 순서를 바꿔 편성
- 비상 근무자 배정 시 다음 근무자와 순서를 바꿔야 하는 경우에는, 앞의 날짜부터 순서를 변경해야 한다.

- 각 배열의 1번째 값에 `토,일,휴일`이 포함되면 휴일 비상근무 순번(holidays) 사용
- `월,화,수,목,금`이면 평일 비상근무 순번(weekdays) 사용

## 데이터 관리 (constants)

### 에러 문구 (error.js)

```
[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.
```

### 달력 (calendar.js)

- 법정 공휴일 (HOLIDAY)

  ```
  {
  1: '1',
  3: '1',
  5: '5',
  6: '6',
  8: '15',
  10: ['3', '9'],
  12: '25',
  }
  ```

- 요일 (DAY)

  `['일','월','화','수','목','금','토']`

- 마지막 날짜 (LASTDAY)

  - 0번째 = 1월
  - 11번째 = 12월

  ```
  [31,28,31,30,31,30,31,31,30,31,30,31]
  ```
