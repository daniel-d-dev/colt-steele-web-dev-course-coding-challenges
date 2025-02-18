// DEFINE YOUR FUNCTION BELOW:

function capitalize(word) {
    let part1 = word[0].toUpperCase();
    let part2 = word.slice(1);
    let newWord = part1 + part2;
    return newWord;
}