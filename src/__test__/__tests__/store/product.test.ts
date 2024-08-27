import { describe, expect, test } from "vitest";

import productReducer, {
  initialState,
  addCards,
  refreshProductState
} from "../../../store/reducers/product.slice";
import { productAddMock, productStateMock } from "../../__mock__/productAdd.mock";

describe("Тестирование ProductReducer", () => {
  test("check initial state", () => {
    const state = productReducer(undefined, { type: "unknown" });
    expect(state).toEqual(initialState);
  });
  
    test("check action addCards", () => {
      const state = productReducer(initialState, addCards(productAddMock));
      expect(state).toEqual(productStateMock);
    });
  
  test("check action refreshProductState", () => {
    const likeCurrentState = productReducer(initialState, addCards(productAddMock));
    const state = productReducer(likeCurrentState, refreshProductState());
    expect(state).toEqual(initialState);
  });
});
