import { hello } from "../app/Service";


describe("Hello Test", () =>{
    test("Service Test", () =>{
        const serviceTest = hello();
        const expected = "Robot 3.0 Activate";
        expect(serviceTest).toBe(expected);
    })
})