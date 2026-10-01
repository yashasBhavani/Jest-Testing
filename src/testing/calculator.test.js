import { calulator } from "./calculator";

test('to check if addition works in calulator',() => {
    expect(calulator.add(5,3)).toEqual(8);
    expect(calulator.add(3,5)).toEqual(8);

})

test('to check if subtraction works in calulator',() => {
    expect(calulator.subtract(5,3)).toEqual(2);
    expect(calulator.subtract(3,5)).toEqual(-2);

})

test('to check if multiplication works in calulator',() => {
    expect(calulator.multiply(5,3)).toEqual(15);
    expect(calulator.multiply(3,5)).toEqual(15);

})

test('to check if division works in calulator',() => {
    expect(calulator.divide(4,2)).toEqual(2);
    expect(calulator.divide(2,4)).toEqual(0.5);

})