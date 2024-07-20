import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { AddedButton } from "../../../../components/atoms/AddedButton/AddedButton";
import userEvent from "@testing-library/user-event";

describe("Тестирование AddedButton", () => {
    const disBtn = false;
    const onClickBtn = vi.fn();
    let button: HTMLButtonElement;

    beforeEach(() => {
      render(
        <AddedButton
          location="AddButton"
          handler={onClickBtn}
          disabled={disBtn}
        />
      );
      button = screen.getByRole("button");
    });

    afterEach(() => {
      vi.clearAllMocks();
    });

    test("AddedButton use html tag button", () => {
      expect(button.tagName).toBe("BUTTON");
    });

    test("hover event trigger onMouseEnter event", async () => {
      await userEvent.hover(button);
      expect(onClickBtn).not.toBeCalled();

      await userEvent.unhover(button);
      expect(onClickBtn).not.toBeCalled();
    });

    test("Click event trigger onMouseEnter event", async () => {
      await userEvent.click(button);
      expect(onClickBtn).toBeCalled();
    });
});
