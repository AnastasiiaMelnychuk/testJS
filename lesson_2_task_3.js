function getKeys(obj) {
    var keys = [];
    for (let key in obj) {
        keys.push(key);
    }
    return keys;
}
getKeys({keyOne: 1, keyTwo: 2, keyThree: 3});