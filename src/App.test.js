import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("버튼의 초기 색상이 바른지 확인하고, 클릭시 업데이트 되는지 확인", () => {
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

    // 버튼 클릭
    fireEvent.click(colorButton);

    // 백그라운드 컬러가 파란색인지 테스트한다.
    expect(colorButton).toHaveStyle({
        "background-color": "blue",
    });

    // 텍스트는 '빨간색으로 변경'으로 변경됐는지 테스트한다.
    expect(colorButton).toHaveTextContent("빨간색으로 변경");
});

test("초기 상태", () => {
    render(<App />);
    // 버튼이 활성화 상태로 시작하는지 테스트합니다.
    const colorButton = screen.getByRole("button", { name: "파란색으로 변경" });
    expect(colorButton).toBeEnabled();

    // 체크박스가 체크가 안된 상태로 시작하는지 테스트 합니다.
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
});

test("체크박스 활성화 시 버튼 비활성화 테스트", () => {
    render(<App />);

    // 체크박스를 클릭합니다.
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    // 버튼이 비활성화 되었는지 테스트 합니다.
    const colorButton = screen.getByRole("button", { name: "파란색으로 변경" });
    expect(colorButton).toBeDisabled();
});

test("체크박스 비활성화 시 버튼 활성화 테스트", () => {
    render(<App />);
    const checkbox = screen.getByRole("checkbox", { name: "버튼 비활성화" });
    const colorButton = screen.getByRole("button", { name: "파란색으로 변경" });

    // 체크박스를 체크해 활성화 시킵니다.
    fireEvent.click(checkbox);

    // 체크박스가 활성화 되어있는지 테스트 합니다.
    expect(checkbox).toBeChecked();

    // 체크박스를 다시 클릭합니다.
    fireEvent.click(checkbox);

    // 버튼이 활성화 되었는지 테스트 합니다.
    expect(colorButton).toBeEnabled();
});

test("버튼이 비활성화 시 버튼 색상 테스트", () => {
    render(<App />);
    const checkbox = screen.getByRole("checkbox", { name: "버튼 비활성화" });
    const colorButton = screen.getByRole("button", { name: "파란색으로 변경" });

    // 체크박스를 클릭합니다.
    fireEvent.click(checkbox);

    // 버튼이 비활성화 됐는지 확인합니다.
    expect(colorButton).toBeDisabled();

    // 버튼의 색상이 변경됐는지 확인합니다.
    expect(colorButton).toHaveStyle({ "background-color": "gray" });

    // 체크박스를 다시 클릭합니다.
    fireEvent.click(checkbox);

    // 버튼이 활성화 됐는지 확인합니다.
    expect(colorButton).toBeEnabled();

    // 버튼의 색상이 변경됐는지 확인합니다.
    expect(colorButton).toHaveStyle({ "background-color": "red" });
});

test("버튼이 파란색일 때 비활성화시 테스트", () => {
    render(<App />);
    const colorButton = screen.getByRole("button", { name: "파란색으로 변경" });
    const checkbox = screen.getByRole("checkbox", { name: "버튼 비활성화" });

    // 버튼을 클릭해 색상을 파란색으로 변경합니다.
    fireEvent.click(colorButton);

    // 체크박스를 클릭해 버튼을 비활성화 시킵니다.
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ "background-color": "gray" });

    // 다시 활성화 시킵니다.
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ "background-color": "blue" });
});
