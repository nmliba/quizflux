/* the Answer class */
'use strict';

export class Answer {
    constructor(answer, correct, group) {
        this.answer = answer;
        this.correct = correct;
        this.group = group;
    }

    getAnswer() {
        return this.answer;
    }

    getCorrect() {
        return this.correct;
    }

    getGroup() {
        return this.group;
    }

    toHtml(no, question) {
        let span = document.createElement('span');
        let r = document.createElement('input');
        r.setAttribute('type', 'radio');
        let name = 'q' + (no + 1);
        r.setAttribute('name', name);
        let idpart = 'a' + '_' + (no + 1) + '_';
        let id = idpart + this.getGroup();
        r.setAttribute('id', id);

        r.addEventListener('click', function(e) {
            let grp = e.target.id.slice(-1);
            question.userCorr = 5;
            question.userABZ = grp;
        });

        let la = document.createElement('label');
        la.setAttribute('for', id);
//        la.setAttribute('id', 'q' + (no+1) + '_' + this.getGroup());
        let tx = document.createTextNode(' ' + this.getAnswer());
        la.appendChild(tx);
        span.appendChild(r);
        span.appendChild(la);
        return span;
    }
}
