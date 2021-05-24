/* the quiz module */
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

export const qzSetName = function (quiz, name) {
        quiz[0] = name;
};

export const qzAddQ = function (quiz, question) {
    quiz[1].push(question);
};

export const qz2html = function (quiz) {
    let quizHtmlElm = document.createElement('section');

    let h2 = document.createElement('h2');
    let tx = document.createTextNode(quiz.quizName);
    h2.appendChild(tx);
    quizHtmlElm.appendChild(h2);
    let c = document.createElement('p');
    tx = document.createTextNode(quiz.context);
    c.appendChild(tx);
    quizHtmlElm.appendChild(c);

    let corrects = [];
    let answers = [];

    for(let i = 0; i < quiz.questions.length; i++) {
        corrects[i] = quiz.questions[i].correctAnswer;
        quizHtmlElm.appendChild(q2html(quiz.questions[i], i, corrects, answers));
    }

    let btn = document.createElement('button');
    tx = document.createTextNode('Score the Quiz');
    btn.appendChild(tx);
    btn.addEventListener('click', function scx() {
        btn.removeEventListener('click', scx);
        let quizHtmlElmSc = document.createElement('section');

        let h2 = document.createElement('h2');
        let tx = document.createTextNode(`${quiz.name} Score`);
        h2.appendChild(tx);
        quizHtmlElmSc.appendChild(h2);
        let d = document.createElement('div');
        d.style.fontSize = '1.5em';

        let scoreElm = document.createElement('span');
        scoreElm.setAttribute('id', 'score');
        tx = document.createTextNode(`${score(corrects, answers)}/${quiz[1].length}`);
        scoreElm.appendChild(tx);
        d.appendChild(scoreElm);

        quizHtmlElmSc.appendChild(d);
        $('quiz').appendChild(quizHtmlElmSc);

    });
    quizHtmlElm.appendChild(btn);

    return quizHtmlElm;
};
