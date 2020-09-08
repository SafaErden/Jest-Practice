import cipher from '../src/ceaserCipher';

test('takes in string and number and returns encrypted version of string', () => {
  expect(cipher('safa', 2)).toBe('uchc');
  expect(cipher('safa, phillip!', 48)).toBe('owbw, ldehhel!');
  expect(cipher('WheRe...', 500)).toBe('CnkXk...');
});