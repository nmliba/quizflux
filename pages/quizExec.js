/* quizExec.js */
'use strict';

import {$} from '../modules/nmlQ.js';
import {Quiz} from '../modules/Quiz.js';
import {Question} from '../modules/Question.js';
import {Generate} from '../data/quizFlux.js';

const debugPrint = function (q) {
    for (let i = 0; i < q.questions.length; i++) {
        console.log(`QCorr: ${q.questions[i].correct}    SC: ${q.questions[i].userCorr} ${q.questions[i].userABZ}`)
    }
};

const init = function () {
    let quiz = Generate();
    quiz.shuffle(false);
    $('quiz').appendChild(quiz.toHtml($('score')));
//    debugPrint(quiz);
};

window.addEventListener('load', init);
