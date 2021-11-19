import * as React from "react";
import Input from "../components/Input";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("This component must have a text 'Continuar'", () => {
  test("", () => {
    const b = render(<Input type="text" placeholder="Usuário" src="" alt="" />);

    expect(
      b.getByPlaceholderText(`${"Usuário" || "Senha"}`)
    ).toBeInTheDocument();
  });

  test("This component must have CSS's styles.", () => {
    const b = render(
      <Input
        type="text"
        placeholder="Usuário"
        src=""
        alt=""
        data-testid="my-input"
      />
    );
    expect(b.getByTestId("my-input")).toHaveStyle({
      backgroundColor: "transparent",
      borderRadius: "50px",
      border: "1px solid #FFFFFF",
      height: "60px",
      width: "50%",
    });
  });
});
