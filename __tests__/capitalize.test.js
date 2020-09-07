import capitalized from '../src/capitilaze';

test('capitalize first letter of string', () => {
  expect(capitalized("safa")).toBe("Safa");
  expect(capitalized("phillip")).not.toBe("phillip");
})
