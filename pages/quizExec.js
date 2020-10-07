/* quiz.js */

import {$} from '../modules/nmlQ.js';
import {setCat, setQuestion, addAnswer, setCorrect} from '../modules/question.js';
import {qzSetName, qzAddQ, qz2html} from '../modules/quiz.js';

const buildQuiz = function (qz) {
    qzSetName(qz, 'test');
    
    let q1 = [,,[],];

    setCat(q1, 'Faglig');
    setQuestion(q1, 'I hvilken af følgende er alle typer gyldige JavaScript typer?');
    addAnswer(q1, 'Boolean, Number, Text, Array');
    addAnswer(q1, 'Boolean, Number, Text, Collection');
    addAnswer(q1, 'Boolean, Integer, Float, Text, Array');
    addAnswer(q1, 'Boolean, Number, String, Array, Null');
    setCorrect(q1, 3);
    qzAddQ(qz, q1);

    q1 = [,,[],];
    setCat(q1, 'Faglig');
    setQuestion(q1, 'Hvilket statement stiller et "module" til rådighed for JavaScript?');
    addAnswer(q1, 'require');
    addAnswer(q1, 'request');
    addAnswer(q1, 'import');
    addAnswer(q1, 'require once');
    setCorrect(q1, 2);
    qzAddQ(qz, q1);
}

const printQuiz = function (qz) {
    $('quiz').appendChild(qz2html(qz));
}

const init = function () {
    let quiz = [,[]];
    buildQuiz(quiz);
//    console.log(quiz);
    printQuiz(quiz);
}

window.addEventListener('load', init);
