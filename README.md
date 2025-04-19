# 🧱 NestJS DDD Tutorial - Domain Driven Design Practice

본 프로젝트는 **NestJS**를 기반으로 **도메인 주도 설계(DDD)**를 연습하고 실제 코드로 구현한 예제입니다. 계층화된 아키텍처와 DDD 개념을 바탕으로, **도메인 중심의 모듈화와 책임 분리를 학습하는 목적**으로 작성되었습니다.

---

## 🧠 핵심 아이디어

> "애플리케이션의 복잡도를 낮추기 위해 도메인 모델 중심의 설계와 계층 간 책임 분리를 실현한다."

- Entity, Value Object, Aggregate Root, Domain Service 구조 학습
- Command / Query 패턴 기반 유스케이스 설계
- Repository, Infrastructure Layer 분리
- 각 모듈은 독립적으로 확장 가능하도록 설계

---

## 🛠 사용 기술

| 영역 | 기술 |
|------|------|
| 서버 프레임워크 | **NestJS (v11)** |
| 언어 | **TypeScript** |
| 데이터베이스 | **TypeORM + MySQL** |
| 설계 패턴 | **DDD, CQRS** |
| 테스트 | **Jest** |

---

## 🔍 주요 특징

### 📌 도메인 중심 아키텍처 구성
- 계층 구분: Application, Domain, Infrastructure, Presentation
- 유스케이스 단위의 Command / Query 클래스 구성
- Repository 인터페이스를 Domain 계층에 선언 → 구현은 Infrastructure 계층에 분리

### 📌 Value Object / Entity 예제 포함
- Email, UserId, Nickname 등 VO 객체 정의
- Aggregate Root를 중심으로 도메인 로직 캡슐화

### 📌 테스트 친화적 구조
- 각 계층이 의존성 주입 기반으로 구성되어 유닛 테스트 용이
- 비즈니스 로직은 Application/Domain 계층에 집중

---

## 📜 주의사항

- 본 레포는 **학습 목적**으로 설계되었으며, 실제 서비스 환경에선 추가적인 고려사항(CQRS 분리, 이벤트 버스, 모듈 단위 분리 등)이 필요합니다.
- TypeORM 기반이므로 Repository 패턴은 추상화된 형태로 작성되어 있습니다.

---

## 🙌 기여자

- 🧑‍💻 개발 및 설계: [ggalmury (GitHub)](https://github.com/ggalmury)

---

## 📎 레포 링크

👉 [ggalmury/nestjs-ddd-tutorial](https://github.com/ggalmury/nestjs-ddd-tutorial)
