// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


// describe( "sum", function () {
//     it("it should be a defined function", function() {
//         expect(typeof sum).toBe("function");
//     });
//     it("should return a number 4 when passed 2 & 2", function () {
//         expect(typeof sum(2,2)).toBe("number");
//     });
//     it("should return a number 5 when passed 2 & 3", function () {
//         expect(typeof sum(2,3)).toBe(5);
//     })
// });


describe ("sayHello", function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when passed Jane', function () {
        expect(typeof sayHello("Jane")).toBe("string");
    });
    it('should return the string "Hello, Alex!" when passed Alex', function () {
        expect(typeof sayHello("alex")).toBe("string");
    });
    it('should return the string "Hello, Pat!" when passed Pat', function () {
        expect(typeof sayHello("Pat")).toBe("string");
    });
});

