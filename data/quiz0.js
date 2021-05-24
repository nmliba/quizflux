/* quiz0.js a sample quiz as a module */

/*
 * a quiz is an object, and has a name and an array of questions
 * a question is an object, and has a category, an question,
 * and some possible answers
 */

/*
 * a question is an array of
 * category, question,
 * an array of possible answers,
 * and a pointer to the correct answer
 */
export const quiz = {
    "quizName" : "Hvilken projekttype er I?",
    "context": "Spørgeskemaets formål er at undersøge virksomhedens projekttype ud fra Projekttype-modellen, så I kan bruge modellen mere effektivt i kommende projektarbejder. Vi har formuleret 10 diagnose-spørgsmål, der afklarer, hvilken type I typisk repræsenterer. Spørgsmålene handler om, hvordan du oplever, at I generelt håndterer projekter. Svar intuitivt. Der er ikke noget rigtigt eller forkert svar – der er blot forskellige svarmuligheder.",
    "questions": [
        {
            "category" : "Projekttype",
            "question": "Hvad er jeres grundlæggende holdning til planlægning af et projekt?",
            "answers": [
                "Det bedste er at udarbejde en plan fra starten.",
                "Vi laver ofte først en plan hen ad vejen.",
                "Vi udarbejder næsten aldrig en plan."
            ],
            "correctAnswer": 2
        },
        {
            "category" : "Projekttype",
            "question": "Hvordan oplever du generelt, at I har formuleret jeres mål for projekter?",
            "answers": [
                "Vi fastlægger og taler om projekternes mål - oftest også på skrift.",
                "Det er meget forskelligt hvad vi gør. De fleste gange taler vi om projekternes mål.",
                "Målene er ofte slet ikke formuleret – og vi ændrer det sommetider undervejs."
            ],
            "correctAnswer": 2
        },
        {
            "category" : "Projekttype",
            "question": "Holder I statusmøder for jeres projekter?",
            "answers": [
                "Ja – og med nogenlunde fast struktur.",
                "Nogle gange – men der er ikke nogen fast struktur herfor.",
                "Næsten aldrig – hvis vi gør det så er det faktisk ret tilfældigt."
            ],
            "correctAnswer": 2
        },
        {
            "category" : "Projekttype",
            "question": "Har I en projektmodel?",
            "answers": [
                "Ja – og vi forsøger at følge den ",
                "Ja – men vi følger den næsten aldrig.",
                "Nej - det har vi ikke."
            ],
            "correctAnswer": 2
        },
        {
            "category" : "Projekttype",
            "question": "Koordinering mellem medarbejdere/afdelinger?",
            "answers": [
                "Vi har faktisk ret meget fokus på koordinering.",
                "Koordinering sker kun ad hoc.",
                "Vi forsøger at fastholde en absolut minimal koordinering."
            ],
            "correctAnswer": 2
        },
        {
            "category" : "Projekttype",
            "question": "Hvordan organiser i jeres projekter generelt) (det er rollerne der er vigtige og ikke om I bruger titlerne)",
            "answers": [
                "Vi har næsten altid en projektejer/styregruppe, projektleder og projekt-deltagere.",
                "Vi har kun få gange en projektejer/styregruppe, projektleder og projekt-deltagere.",
                "Vi arbejder uden projektejer/styregruppe, projektleder og projektdeltagere."
            ],
            "correctAnswer": 2
        },
        {
            "category" : "Projekttype",
            "question": "Som projektleder skal du",
            "answers": [
                "Skabe noget struktur.",
                "Navigere meget fleksibelt.",
                "Være meget innovativ."
            ],
            "correctAnswer": 2
        },
        {
            "category" : "Projekttype",
            "question": "Vi tager beslutninger",
            "answers": [
                "Det er vigtigt at have et beslutningsgrundlag for at kunne tage rationelle beslutninger.",
                "Vi beslutter og handler ofte uden at have et beslutningsgrundlag.",
                "Det vigtigste for os er at vi kommer videre - action is king!"
            ],
            "correctAnswer": 2
        },
        {
            "category" : "Projekttype",
            "question": "Inddragelse af andre medarbejdere/afdelinger?",
            "answers": [
                "Samarbejder med mange.",
                "Samarbejder med relativt få.",
                "Samarbejder næsten alene"
            ],
            "correctAnswer": 2
        },
        {
            "category" : "Projekttype",
            "question": "Heltene i vores firma er:",
            "answers": [
                "Dem der forstår at få struktur, fremdrift og løst vores projekter.",
                "Dem der forstår at navigere uafhængigt af hvordan andre af vores projekter kører.",
                "Dem der forstår at skabe innovative løsninger."
            ],
            "correctAnswer": 2
        },
        {
            "category" : "Bonusspørgsmål",
            "question": "Ideelt set, vil vi som organisation gerne (ønske om fremtid)",
            "answers": [
                "Være struktureret i vores tilgang til.",
                "Håndtere projekter uden for meget struktur på.",
                "Bare gå i gang med at eksperimentere."
            ],
            "correctAnswer": 2
        }
    ]
};