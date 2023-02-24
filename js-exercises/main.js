function add7(n) {
    console.log(+n + 7)
}

function multiply(n1, n2) {
    console.log(n1 * n2);
}

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
//  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function returnLastLetter(string) {
    return string.slice(-1);
}