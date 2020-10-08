/* quiz.js */

import {$} from '../modules/nmlQ.js';
import {qzSetName, qzAddQ, qz2html} from '../modules/quiz.js';
import {quiz0} from '../data/quiz0.js';

const printQuiz = function (qz) {
    $('quiz').appendChild(qz2html(qz));
}

const init = function () {
    printQuiz(quiz0);
}

window.addEventListener('load', init);
