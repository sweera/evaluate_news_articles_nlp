import { checkForName } from "../src/client/js/nameChecker";

describe("Testing whether URL checker is valid", () => {
  test("Testing the checkForName() function", async () => {
    expect(checkForName).toBeDefined();
  });
});
