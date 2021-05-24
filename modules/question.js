/* the question module */
'use strict';

import {$} from './nmlQ.js';

export const setCat = function (q, cat) {
        q[0] = cat;
};

export const setQuestion = function (q, question) {
        q[1] = question;
};

export const addAnswer = function (q, answer) {
        q[2].push(answer);
};

export const setCorrect = function (q, index) {
        q[3] = index;
};

export const q2html = function (q, no, c, a) {
    let qn = document.createElement('article');

    let h3 = document.createElement('h3');
    let tx = document.createTextNode(`Category: ${q.category}, Question: ${no + 1}`);
    h3.appendChild(tx);
    qn.appendChild(h3);

    let quep = document.createElement('p');
    let em = document.createElement('em');
    let quet = document.createTextNode(`${q.question}`);
    em.appendChild(quet);
    quep.appendChild(em);
    qn.appendChild(quep);

    let quea = document.createElement('p');
    for (let i = 0; i < q.answers.length; i++) {
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
                    a[no] = j;
                }
            }
        });

        let la = document.createElement('label');
        la.setAttribute('for', id);
        la.setAttribute('id', 'q' + i + 'lab');
        tx = document.createTextNode(' ' + q.answers[i]);
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