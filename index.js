// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name);
    return name 
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
    return drivers
}

function destructivelyRemoveLastDriver() {
    drivers.pop();
    return drivers 
}
function destructivelyRemoveFirstDriver() {
    drivers.shift();
    return drivers 
}

function appendDriver(name) {
    return [...drivers, name]
}

function prependDriver(name) {
    return [name, ...drivers]
} 
function removeLastDriver() {
    return drivers.slice(0, -1)
} 
function removeFirstDriver() {
    return drivers.slice(1)
}
