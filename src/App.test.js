import { render, screen } from "@testing-library/react";
import App from "./App";

test("처음 버튼 색상이 옳게 되어있는가?", () => {
    render(<App />);

    // 이 테스트 문구로 버튼 여부와 텍스트가 파란색으로 변경인지 확인한다.
    const colorButton = screen.getByRole("button", { name: "파란색으로 변경" });

    // 백그라운드 컬러가 빨간색인지 확인한다
    expect(colorButton).toHaveStyle({
        "background-color": "red",
    });

    // 아래와 같이 테스트할 경우 아무 문자열을 넣어도 테스트가 성공하는 버그가 있다. 이를 방지하기 위해 위처럼 케밥케이스로 테스트를 하면 해결 된다.
    // expect(colorButton).toHaveStyle({
    //     backgroundColor: "I can put anything I want in here",
    // });
});

test("버튼 클릭시 블루 색상으로 바뀌는가?", () => {});
