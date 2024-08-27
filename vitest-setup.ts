import { expect, afterEach, beforeAll, afterAll } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import {server} from './src/__mock__/node';

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

beforeAll(() => server.listen())

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  server.resetHandlers()
  cleanup();
});

afterAll(() => server.close())
