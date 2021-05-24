/* quizFlux,
 * The Generate function generates a Quiz object with content
 * 
 * a quiz is an object, and has a name, a context, and an array of questions
 * a question has a category, question, and an array of possible answers,
 * an answer is a possible answer, a boolean for right or wrong answer, and a group-indicator
 * 
 */
import {Quiz} from '../modules/Quiz.js';
import {Question} from '../modules/Question.js';
import {Answer} from '../modules/Answer.js';

export const Generate = function () {
    let quiz = new Quiz({
            "name" : "Hvilken projekttype er I?",
            "context": "Spørgeskemaets formål er at undersøge virksomhedens projekttype ud fra Projekttype-modellen, så I kan bruge modellen mere effektivt i kommende projektarbejder. Vi har formuleret 10 diagnose-spørgsmål, der afklarer, hvilken type I typisk repræsenterer. Spørgsmålene handler om, hvordan du oplever, at I generelt håndterer projekter. Svar intuitivt. Der er ikke noget rigtigt eller forkert svar – der er blot forskellige svarmuligheder."
        });

    let question = new Question({
        "category" : "Projekttype",
        "question": "Hvad er jeres grundlæggende holdning til planlægning af et projekt?"
    });
    let answer = new Answer("Det bedste er at udarbejde en plan fra starten.", false, 'A');
    question.addAnswer(answer);
    answer = new Answer("Vi laver ofte først en plan hen ad vejen.", false, 'B');
    question.addAnswer(answer);
    answer = new Answer("Vi udarbejder næsten aldrig en plan.", false, 'C');
    question.addAnswer(answer);
    quiz.addQuestion(question);

    question = new Question({
        "category" : "Projekttype",
        "question": "Hvordan oplever du generelt, at I har formuleret jeres mål for projekter?"
    });
    answer = new Answer("Vi fastlægger og taler om projekternes mål - oftest også på skrift.", false, 'A');
    question.addAnswer(answer);
    answer = new Answer("Det er meget forskelligt hvad vi gør. De fleste gange taler vi om projekternes mål.", false, 'B');
    question.addAnswer(answer);
    answer = new Answer("Målene er ofte slet ikke formuleret – og vi ændrer det sommetider undervejs.", false, 'C');
    question.addAnswer(answer);
    quiz.addQuestion(question);

    question = new Question({
        "category" : "Projekttype",
        "question": "Holder I statusmøder for jeres projekter?"
    });
    answer = new Answer("Ja – og med nogenlunde fast struktur.", false, 'A');
    question.addAnswer(answer);
    answer = new Answer("Nogle gange – men der er ikke nogen fast struktur herfor.", false, 'B');
    question.addAnswer(answer);
    answer = new Answer("Næsten aldrig – hvis vi gør det så er det faktisk ret tilfældigt.", false, 'C');
    question.addAnswer(answer);
    quiz.addQuestion(question);

    question = new Question({
            "category" : "Projekttype",
            "question": "Har I en projektmodel?"
    });
    answer = new Answer("Ja – og vi forsøger at følge den ", false, 'A');
    question.addAnswer(answer);
    answer = new Answer("Ja – men vi følger den næsten aldrig.", false, 'B');
    question.addAnswer(answer);
    answer = new Answer("Nej - det har vi ikke.", false, 'C');
    question.addAnswer(answer);
    quiz.addQuestion(question);


    question = new Question({
        "category" : "Projekttype",
        "question": "Koordinering mellem medarbejdere/afdelinger?"
    });
    answer = new Answer("Vi har faktisk ret meget fokus på koordinering.", false, 'A');
    question.addAnswer(answer);
    answer = new Answer("Koordinering sker kun ad hoc.", false, 'B');
    question.addAnswer(answer);
    answer = new Answer("Vi forsøger at fastholde en absolut minimal koordinering.", false, 'C');
    question.addAnswer(answer);
    quiz.addQuestion(question);

    question = new Question({
        "category" : "Projekttype",
        "question": "Hvordan organiser i jeres projekter generelt) (det er rollerne der er vigtige og ikke om I bruger titlerne)"
    });
    answer = new Answer("Vi har næsten altid en projektejer/styregruppe, projektleder og projekt-deltagere.", false, 'A');
    question.addAnswer(answer);
    answer = new Answer("Vi har kun få gange en projektejer/styregruppe, projektleder og projekt-deltagere.", false, 'B');
    question.addAnswer(answer);
    answer = new Answer("Vi arbejder uden projektejer/styregruppe, projektleder og projektdeltagere.", false, 'C');
    question.addAnswer(answer);
    quiz.addQuestion(question);

    question = new Question({
        "category" : "Projekttype",
        "question": "Som projektleder skal du"
    });
    answer = new Answer("Skabe noget struktur.", false, 'A');
    question.addAnswer(answer);
    answer = new Answer("Navigere meget fleksibelt.", false, 'B');
    question.addAnswer(answer);
    answer = new Answer("Være meget innovativ.", false, 'C');
    question.addAnswer(answer);
    quiz.addQuestion(question);

    question = new Question({
        "category" : "Projekttype",
        "question": "Vi tager beslutninger"
    });
    answer = new Answer("Det er vigtigt at have et beslutningsgrundlag for at kunne tage rationelle beslutninger.", false, 'A');
    question.addAnswer(answer);
    answer = new Answer("Vi beslutter og handler ofte uden at have et beslutningsgrundlag.", false, 'B');
    question.addAnswer(answer);
    answer = new Answer("Det vigtigste for os er at vi kommer videre - action is king!", false, 'C');
    question.addAnswer(answer);
    quiz.addQuestion(question);

    question = new Question({
        "category" : "Projekttype",
        "question": "Inddragelse af andre medarbejdere/afdelinger?"
    });
    answer = new Answer("Samarbejder med mange.", false, 'A');
    question.addAnswer(answer);
    answer = new Answer("Samarbejder med relativt få.", false, 'B');
    question.addAnswer(answer);
    answer = new Answer("Samarbejder næsten alene", false, 'C');
    question.addAnswer(answer);
    quiz.addQuestion(question);

    question = new Question({
        "category" : "Projekttype",
        "question": "Heltene i vores firma er:"
    });
    answer = new Answer("Dem der forstår at få struktur, fremdrift og løst vores projekter.", false, 'A');
    question.addAnswer(answer);
    answer = new Answer("Dem der forstår at navigere uafhængigt af hvordan andre af vores projekter kører.", false, 'B');
    question.addAnswer(answer);
    answer = new Answer("Dem der forstår at skabe innovative løsninger.", false, 'C');
    question.addAnswer(answer);
    quiz.addQuestion(question);

    question = new Question({
        "category" : "Bonusspørgsmål",
        "question": "Ideelt set, vil vi som organisation gerne (ønske om fremtid)"
    });
    answer = new Answer("Være struktureret i vores tilgang til.", false, 'A');
    question.addAnswer(answer);
    answer = new Answer("Håndtere projekter uden for meget struktur på.", false, 'B');
    question.addAnswer(answer);
    answer = new Answer("Bare gå i gang med at eksperimentere.", false, 'C');
    question.addAnswer(answer);
    quiz.addQuestion(question);
   
    return quiz;
};
