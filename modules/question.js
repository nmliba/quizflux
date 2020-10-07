'use strict';
import {$} from './nmlQ.js';

const setCat = function (q, cat) {
        q[0] = cat;
};

const setQuestion = function (q, question) {
        q[1] = question;
};

const addAnswer = function (q, answer) {
        q[2].push(answer);
};

const setCorrect = function (q, index) {
        q[3] = index;
};

const isCorrect = function (q, answer) {
        return q[3] === answer;
};

const q2html = function (q, no, c, a) {
    let qn = document.createElement('article');

    let h3 = document.createElement('h3');
    let tx = document.createTextNode(`Category ${q[0]}, Question ${no + 1}`);
    h3.appendChild(tx);
    qn.appendChild(h3);
    
    let quep = document.createElement('p');
    let em = document.createElement('em');
    let quet = document.createTextNode(`${q[1]}`);
    em.appendChild(quet);
    quep.appendChild(em);
    qn.appendChild(quep);
    
    let quea = document.createElement('p');
    for (let i = 0; i < q[2].length; i++) {
        let span = document.createElement('span');
        let r = document.createElement('input');
        r.setAttribute('type', 'radio');
        let name = 'q' + (no + 1);
        r.setAttribute('name', name);
        let idpart = 'a' + '_' + (no + 1) + '_';
        let id = idpart + i;
        r.setAttribute('id', id);

        r.addEventListener('click', function(e) {
            for (let j = 0; j < q[2].length; j++) {
                if (e.target.id === idpart + j) {
                    //$(e.target.id).setAttribute('checked', 'checked');
                    console.log(`index ${no}:${j} ${c[no] === j}`);
                    a[no] = j; 
                } else {
                    //$(idpart + j).setAttribute('disabled', 'disabled');
                }
            }
        });

        let la = document.createElement('label');
        la.setAttribute('for', id);
        la.setAttribute('id', 'q' + i + 'lab');
        tx = document.createTextNode(' ' + q[2][i]);
        la.appendChild(tx);
        span.appendChild(r);
        span.appendChild(la);
        quea.appendChild(span);
        quea.appendChild(document.createElement('br'));
    };
    // create lock to make radio readonly
    qn.appendChild(quea);
    return qn;
}

export {setCat, setQuestion, addAnswer, setCorrect, isCorrect, q2html};