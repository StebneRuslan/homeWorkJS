function countChar(string, char) {
    let resCount = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            resCount++;
        }
    }
    return resCount;
}