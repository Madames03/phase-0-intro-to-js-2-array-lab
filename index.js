const cats = ["Milo", "Otis", "Garfield"]
cats.length = 0
cats.push('Milo', 'Otis', 'Garfield')
function destructivelyAppendCat(Ralph) {
    cats.push(Ralph)
    return cats
}
cats.length = 0
cats.push('Milo', 'Otis', 'Garfield')
function destructivelyPrependCat(Bob) {
    cats.unshift(Bob)
    return cats
}
cats.length = 0
cats.push('Milo', 'Otis', 'Garfield')
function destructivelyRemoveLastCat() {
    cats.pop()
    return cats
}
cats.length = 0
cats.push('Milo', 'Otis', 'Garfield')
function destructivelyRemoveFirstCat() {
    cats.shift()
    return cats
}
cats.length = 0
cats.push('Milo', 'Otis', 'Garfield')
function appendCat(Broom) {
    const newCats = [...cats, Broom]
    return newCats
}
cats.length = 0
cats.push('Milo', 'Otis', 'Garfield')
function prependCat(Arnold) {
    const newCats = [Arnold, ...cats]
    return newCats
}
cats.length = 0
cats.push('Milo', 'Otis', 'Garfield')
function removeLastCat() {
    const newCats = cats.slice(0, cats.length - 1)
    return newCats
}
cats.length = 0
cats.push('Milo', 'Otis', 'Garfield')
function removeFirstCat() {
    const newCats = cats.slice(1)
    return newCats
}