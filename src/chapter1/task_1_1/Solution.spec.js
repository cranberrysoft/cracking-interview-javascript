const { Solution } = require("./Solution")


describe('Task1_1', () => {

    it('should not be unique when two same chracters', () => {
        const task11 = new Solution()

        const unique = task11.isUnique("aa")

        expect(unique).toBeFalsy()
    })

    it('should be unique when empty String', () => {
        const task11 = new Solution()

        const unique = task11.isUnique("")

        expect(unique).toBeTruthy()
    })

    it('should not be unique when many empty spaces', () => {
        const task11 = new Solution()

        const unique = task11.isUnique("   ")

        expect(unique).toBeFalsy();
    })


    it('should be unique when one character', () => {
        const task11 = new Solution()

        const unique = task11.isUnique("a")

        expect(unique).toBeTruthy();
    })
})


