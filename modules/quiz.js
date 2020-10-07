'use strict';

import {$, roll} from './nmlQ.js';
import {q2html} from './question.js';

const score = function (c, a) {
    let tot = 0;
    for (let i = 0; i < c.length; i++) {
        if (c[i] === a[i])
            ++tot;
    }
    return tot;
}
    
const qzSetName = function (quiz, name) {
        quiz[0] = name;
};

const qzAddQ = function (quiz, question) {
    quiz[1].push(question);
};

const qz2html = function (quiz) {
    let quizHtmlElm = document.createElement('section');

    let h2 = document.createElement('h2');
    let tx = document.createTextNode(quiz[0] + ' Quiz');
    h2.appendChild(tx);
    quizHtmlElm.appendChild(h2);

    let corrects = [];
    let answers = [];
    for(let i = 0; i < quiz[1].length; i++) {
        corrects[i] = quiz[1][i][3];
        quizHtmlElm.appendChild(q2html(quiz[1][i], i, corrects, answers));
    }
    
    let btn = document.createElement('button');
    tx = document.createTextNode('Score the Quiz');
    btn.appendChild(tx);
    btn.addEventListener('click', function scx() {
        btn.removeEventListener('click', scx);
        let quizHtmlElmSc = document.createElement('section');

        let h2 = document.createElement('h2');
        let tx = document.createTextNode(name + ' Quiz Score');
        h2.appendChild(tx);
        quizHtmlElmSc.appendChild(h2);
        let d = document.createElement('div');
        d.style.fontSize = '1.5em';

        let s = document.createElement('span');
        s.setAttribute('id', 'rights');
        s.style.backgroundColor = "#0f0";
        tx = document.createTextNode('Correct answers: ');
        s.appendChild(tx);
        let scoreElm = document.createElement('span');
        scoreElm.setAttribute('id', 'score');
        tx = document.createTextNode(score(corrects, answers));
        scoreElm.appendChild(tx);
        s.appendChild(scoreElm);
        d.appendChild(s);

        s = document.createElement('span');
        s.setAttribute('id', 'totals');
        tx = document.createTextNode(' - Total number of questions: ');
        s.appendChild(tx);        
        tx = document.createTextNode(quiz[1].length);
        s.appendChild(tx);
        d.appendChild(s);

        quizHtmlElmSc.appendChild(d);
        $('quiz').appendChild(quizHtmlElmSc);

    });
    quizHtmlElm.appendChild(btn);

    return quizHtmlElm;
};

export {qzSetName, qzAddQ, qz2html};
