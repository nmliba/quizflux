/*
 * nmlQ
 * @version 0.999, 2020-10
 * @author nml
 */

export const $ = function(foo) {
    return document.getElementById(foo);
};

export const roll = function(foo) {
    return Math.floor(Math.random() * foo + 1);
};

/*
 * replace some char with char 'c' in string at pos 'j'
 * s: input string
 * c: replacement character
 * j: position
 */
export const strCharRepl = function(s, c, j) {
    let ns = "";
    for (let i = 0; i < s.length; i++) {
        if (j === i) {
            ns += c;
        } else {
            ns += s.charAt(i);
        }
    }
    return ns;
};

export const copyr = function(bar) {
    let now = new Date();
    let sml = document.createElement("small");
    let cpr = document.createTextNode(`\u00a9nml, ${bar}-${now.getFullYear()}`);
    sml.appendChild(cpr);
    $('cpryear').appendChild(sml);
};