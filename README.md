# expect

jest 테스트의 핵심 구문

**사용방법**

-   expect 안에 사용구문을 넣음으로써 예측에 들어맞는지 확인하기 위함
    expect(사용구문)

-   matcher를 사용하여 expect의 유형을 정함
    expect(사용구문).toBeInTheDocument() => matcher 사용

-   toBeInTheDocument => 요소가 문서에 있거나 없는 것을 테스트 할 수 있음 (인수 X)
    toBeInTheDocument 같이 DOM 기반의 matcher는 가상돔에서만 사용 가능
    DOM 기반 매쳐에는 toBeVisible, toBeChecked 같은 matcher도 있다

-   toBe => tobe('hello') 인 경우 hello 란 글자가 있어야 함
-   toHaveLength => toHaveLength(7) 배열요소의 7 길이를 예상할 수 있음

-   test 사용법
    test(테스트 이름) => 실패시 테스트 이름을 통해 어떤 테스트가 실패 했는지 알게 된다.

**jest 특징**

-   jest의 테스트는 마지막 커밋 이후 변경된 파일에 한해 테스트한다.
-   빈 공백 일 땐 테스트에 통과 하며, throw new Error 구문을 사용하면 에러가 생기며 테스트에 실패하게 된다.
