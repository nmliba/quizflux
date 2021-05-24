/* the Quiz class */
'use strict';

//import {$} from './nmlQ.js';
import {Question} from './Question.js';

export class Quiz {
    constructor(obj) {
        this.name = obj.name;
        this.context = obj.context;
        this.questions = [];
    }

    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }

    getContext() {
        return this.context;
    }
    setContext(context) {
        this.context = context;
    }

    addQuestion(question) {
        this.questions.push(question);
    }

    shuffle(really) {
        if (really) {
            // shuffle
        }
    }

    score(questions) {
        let totalCorrect = 0;
        let totalG = {'A' : 0, 'B': 0, 'C': 0};       
        for (let question of questions) {
            if ( question.correct === question.userCorr)
                totalCorrect++;
            totalG['A'] += question.userABZ == 'A' ? 1 : 0;
            totalG['B'] += question.userABZ == 'B' ? 1 : 0;
            totalG['C'] += question.userABZ == 'C' ? 1 : 0;
        }
        let res = `${questions.length} spørgsmål - A:${totalG['A']} B:${totalG['B']} C:${totalG['C']}`;
        return res;
    }

    toHtml(where) {
        let quizName = this.getName();
        let scoreFunction = this.score;
        let questions = this.questions;
        
        let quizHtmlElm = document.createElement('section');

        let h2 = document.createElement('h2');
        let tx = document.createTextNode(this.getName());
        h2.appendChild(tx);
        quizHtmlElm.appendChild(h2);
        let c = document.createElement('p');
        tx = document.createTextNode(this.getContext());
        c.appendChild(tx);
        quizHtmlElm.appendChild(c);

        let ans = this.answerSheet;
        this.questions.forEach(function(question, i) {
//            console.log(`${i} ${question.question}`);
            quizHtmlElm.appendChild(question.toHtml(i));
        });

        let btn = document.createElement('button');
        tx = document.createTextNode('Færdig, tæl op');
        btn.appendChild(tx);
        btn.addEventListener('click', function scx() {
            btn.removeEventListener('click', scx);
            let btnx1 = document.createElement('button');
            let tx1 = document.createTextNode('Retur til kursusside');
            btnx1.appendChild(tx1);
            btnx1.addEventListener('click', function () {window.location='https://www.iba.dk/efteruddannelser/webinar/nyhed-i-projektledelse-flux-modellen'});
            quizHtmlElm.appendChild(btnx1);
            let btnx2 = document.createElement('button');
            let tx2 = document.createTextNode('Tag quiz igen');
            btnx2.appendChild(tx2);
            btnx2.addEventListener('click', function () {window.location = './quiz.html'});
            quizHtmlElm.appendChild(btnx2);
            
            
            let quizHtmlElmSc = document.createElement('section');

            let h2 = document.createElement('h2');
            let tx = document.createTextNode(`${quizName}: Optælling`);
            h2.appendChild(tx);
            quizHtmlElmSc.appendChild(h2);
            let d = document.createElement('div');
            d.style.fontSize = '1.5em';

            let scoreElm = document.createElement('span');
            scoreElm.setAttribute('id', 'score');
            tx = document.createTextNode(scoreFunction(questions));     // scoring
            scoreElm.appendChild(tx);
            d.appendChild(scoreElm);

            quizHtmlElmSc.appendChild(d);
            where.appendChild(quizHtmlElmSc);

        });
        quizHtmlElm.appendChild(btn);
        return quizHtmlElm;
    };
}
