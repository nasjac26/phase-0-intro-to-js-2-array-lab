const cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const newCats = [...cats, "Broom"];
    return newCats;
} 

function prependCat(name) {
    const newCats = ["Arnold", ...cats];
    return newCats;
}   

function removeLastCat(){
    return cats.slice(0, -1);
}

function removeFirstCat(){
    return cats.slice(1);
}
