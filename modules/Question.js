/* the Question class */
'use strict';
import {Answer} from './Answer.js';

export class Question {
    constructor(obj) {
        this.category = obj.category;
        this.question = obj.question;
        this.correct = 0;
        this.answers = [];
        this.userCorr = 'n';
        this.userABZ = 'Z'
    }

    getCategory() {
        return this.category;
    }
    setCategory(category) {
        this.category = category;
    }

    getQuestion() {
        return this.question;
    }
    setQuestion(question) {
        this.question = question;
    }

    addAnswer(answer) {
            this.answers.push(answer);
    }

    toHtml(no) {
        let qn = document.createElement('article');

        let h3 = document.createElement('h3');
        let tx = document.createTextNode(`Category: ${this.getCategory()}, Question: ${no + 1}`);
        h3.appendChild(tx);
        qn.appendChild(h3);

        let quep = document.createElement('p');
        let em = document.createElement('em');
        let quet = document.createTextNode(`${this.getQuestion()}`);
        em.appendChild(quet);
        quep.appendChild(em);
        qn.appendChild(quep);

        let quea = document.createElement('p');
        let i = 0;
        for (let answer of this.answers) {
            quea.appendChild(answer.toHtml(no, this));
            if (answer.correct)
                this.correct = i;
            quea.appendChild(document.createElement('br'));
            i++;
        };

        // create lock to make radio readonly
        qn.appendChild(quea);
        return qn;
    }
}
