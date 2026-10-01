import { capitalize } from "./capitalize";

test('to check that if the first letter is capital',() => {
    expect(capitalize("hi")).toMatch("Hi");
    expect(capitalize("   hi")).toMatch("   Hi");
    expect(capitalize("34hi")).toMatch("34Hi");
    expect(capitalize("hi bro")).toMatch("Hi bro");
    expect(capitalize("/*732hi")).toMatch("/*732Hi");
})