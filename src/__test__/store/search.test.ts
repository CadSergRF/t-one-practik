import { describe, expect, test } from "vitest";

import searchReducer, {
  initialState,
  refreshSearchQuery,
  refreshSearchSkipState,
  refreshSearchTotalState,
} from "../../store/reducers/search.slice";

describe("Тестирование SearchReducer", () => {
  test("check initial state", () => {
    const state = searchReducer(undefined, { type: "unknown" });
    expect(state).toEqual(initialState);
  });

  test("check action refreshSearchQuery", () => {
    const state = searchReducer(initialState, refreshSearchQuery("find"));
    expect(state).toEqual({
      total: 0,
      skip: 0,
      limit: 12,
      searchQuery: "find",
    });
  });

  test("check action refreshSearchSkipState", () => {
    const state = searchReducer(initialState, refreshSearchSkipState(5));
    expect(state).toEqual({
      total: 0,
      skip: 5,
      limit: 12,
      searchQuery: "",
    });
  });

  test("check action refreshSearchQuery", () => {
    const state = searchReducer(initialState, refreshSearchTotalState(50));
    expect(state).toEqual({
      total: 50,
      skip: 0,
      limit: 12,
      searchQuery: "",
    });
  });

});
