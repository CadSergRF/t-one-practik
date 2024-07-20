import { fireEvent, screen } from "@testing-library/react";

import { renderWithProviders } from "../../../utils/test-utils";
import { AddedControl } from "../../../../components/molecules/AddedControl/AddedControl";

describe("Тестирование AddedControl", () => {
  let quantityText: HTMLParagraphElement;
  let btnMinus: HTMLButtonElement;
  let btnPlus: HTMLButtonElement;

  test("Рендер компонентов", async () => {
    renderWithProviders(<AddedControl id={13} quantity={3} stock={5} />);
    quantityText = screen.getByText("3 items");
    btnMinus = screen.getByRole("button", {
      name: "Reduce the number of items in the cart by 1",
    });
    btnPlus = screen.getByRole("button", {
      name: "Increase the number of items in the cart by 1",
    });
    expect(quantityText).toBeInTheDocument();
    expect(btnMinus).toBeInTheDocument();
    expect(btnPlus).toBeInTheDocument();
  });

  test("Disable PlusButton", () => {
    renderWithProviders(<AddedControl id={13} quantity={5} stock={5} />);
    btnPlus = screen.getByRole("button", {
      name: "Increase the number of items in the cart by 1",
    });
    expect(btnPlus).toBeInTheDocument();
    expect(btnPlus).toBeDisabled();
  });

  test("Disable кнопок при отправки запроса", () => {
    renderWithProviders(<AddedControl id={13} quantity={3} stock={5} />);
    btnMinus = screen.getByRole("button", {
      name: "Reduce the number of items in the cart by 1",
    });
    btnPlus = screen.getByRole("button", {
      name: "Increase the number of items in the cart by 1",
    });

    fireEvent.click(btnMinus);
    expect(btnMinus).toBeInTheDocument();
    expect(btnPlus).toBeInTheDocument();
    expect(btnMinus).toBeDisabled();
    expect(btnPlus).toBeDisabled();

    fireEvent.click(btnPlus);
    expect(btnMinus).toBeInTheDocument();
    expect(btnPlus).toBeInTheDocument();
    expect(btnMinus).toBeDisabled();
    expect(btnPlus).toBeDisabled();
  });
});
