function getValues(obj) {
    var values = [];
    for (let key in obj) {
        values.push(obj[key]);
    }
    return values;
}
getValues({keyOne: 1, keyTwo: 2, keyThree: 3});