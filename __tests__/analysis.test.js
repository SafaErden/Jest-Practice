import analyze from "../src/analysis";

test("should return an object", ()=> {
  expect(typeof analyze([1, 8, 3, 4, 2, 6])).toBe('object');
})

test("takes in an array and returns an object containing avg, min, max & length", () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({ average: 4, min: 1, max: 8, length: 6 }) 
})

test('should have property average', ()=>{
  expect(analyze([1, 8, 3, 4, 2, 6]).average).toBe(4);
})

test('should have property min', () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).min).toBe(1);
})

test('should have property max', () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).max).toBe(8);
})

test('should have property length', () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).length).toBe(6);
})
