import { analizeArray } from "./analizeArray";

test('to check array length in object',() => {
    expect(analizeArray([2,3,4,3])).toMatchObject({
        average : 3,
        max : 4,
        min : 2,
        length : 4
    });
    expect(analizeArray([8,12])).toMatchObject({
        average : 10,
        max : 12,
        min : 8,
        length : 2
    });
})