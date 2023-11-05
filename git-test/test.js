let embedobj = {
    a: 1,
    b: { c: 1, d: 2 },
    e: { f: { g: 3, k: 9 } },
    h: 4
}

const flattenObj = function (obj) {
    let flattenobj = {}
    let key;
    for (let i in obj) {
        key = i;
        if (typeof obj[i] === "object") {
            const temp = flattenObj(obj[i])
            for (let j in temp) {
                flattenobj[`${i}.${j}`] = temp[j]
            }
        }
        else {
            flattenobj[key] = obj[i]
        }
    }
    return flattenobj
}

console.log(flattenObj(embedobj))