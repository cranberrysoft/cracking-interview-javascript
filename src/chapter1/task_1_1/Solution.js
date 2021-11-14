class Solution {


    isUnique(text) {
        // return this.simple(text)
        return this.simple2(text)
    }

    simple(text) {

        var characters = [];
        for (let i = 0; i < text.length; i++) {
            if (characters[text.charAt(i)]) {
                return false
            }
            characters[text.charAt(i)] = true
        }
        return true;
    }


    simple2(text) {
        var characters = [];
        for(const character of text){
            if (characters[character]) {
                return false
            }
            characters[character] = true
        }
        return true;
    }

}

module.exports = {
    Solution: Solution
}

