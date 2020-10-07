/*
 * nQuery
 * @version 0.99, 2020-09
 * @author nml
 */

var $ = function(foo) {
    return document.getElementById(foo);
}

const roll = function(foo) {
    return Math.floor(Math.random() * foo + 1);
}

/*
 * replace - with char in string
 * s: input string
 * c: replacement character
 * j: position
 */
const strCharRepl = function(s, c, j) {
    let ns = "";
    for (let i = 0; i < s.length; i++) {
        if (j === i) {
            ns += c;
        } else {
            ns += s.charAt(i);
        }
    }
    return ns;
}

const copyr = function(bar) {
    let now = new Date();
    let sml = document.createElement("small");
    let cpr = document.createTextNode(`\u00a9nml, ${bar}-${now.getFullYear()}`);
    sml.appendChild(cpr);
    $('cpryear').appendChild(sml);
}

export {$, roll, copyr, strCharRepl};