const compress = require("./SolutionSimpleLoop");

describe('Task-1-6', () => {


    it("should compress string with the same letters", () => {
        //given
        let input = "aaa";

        //when
        let compressed = compress(input);

        //then
        expect(compressed).toEqual("a3")
    })

    it("should compress string with different letters letters", () => {
        //given
        let input = "aaabbb";

        //when
        let compressed = compress(input);

        //then
        expect(compressed).toEqual("a3b3")
    })

    it("should return original string if compressed string is not smaller", () => {
        //given
        let input1 = "a";
        let input2 = "ab";

        //when
        let compressed1 = compress(input1);
        let compressed2 = compress(input2);

        //then
        expect(compressed1).toEqual("a")
        expect(compressed2).toEqual("ab")
    })

    it("should return original string if compressed string is same size", () => {
        //given
        let input = "aab";
        //when
        let compressed = compress(input);

        //then
        expect(compressed).toEqual("aab")
    })

    it("should return empty string for empty input", () => {
        //given
        let input = "";

        //when
        let compressed = compress(input);

        //then
        expect(compressed).toEqual("")
    })

    it("should compress string when duplicated characters in different position", () => {
        //given
        let input = "aaabbaa";

        //when
        let compressed = compress(input);

        //then
        expect(compressed).toEqual("a3b2a2")
    })

});
