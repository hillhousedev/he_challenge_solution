/*
    ** ASCII Alpha numeric code of each english aplhabet will be used for the testing
    ** We won't use regex because of performance
    ** also we won't test for word lower case and start making comparison because
    ** our usecase is constrained within english alphabet A-Z and no need of other language, or ascent
*/


module.exports = function () {
    function isFirstLetterUpper(word) {
        if (typeof word !== 'string') {
            throw new Error('Only string is supported, your argument must string');
        }

        if (word.length === 0) {
            return false
        }

        const firstCharacter = String(word).charCodeAt(0);
        return firstCharacter >= 65 && firstCharacter <= 90;
    }

    return {isFirstLetterUpper}
}();