import reversed from '../src/reverse';

test("reverse passed-in string", () => {
  expect(reversed("Safa")).toBe("afaS");
  expect(reversed("phillip")).not.toBe("phillip");
})