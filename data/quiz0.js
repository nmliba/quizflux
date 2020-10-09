/* quiz0.js a sample quiz as a module */

/*
 * a quiz is an array of a name and an array of questions
 */
 
/*
 * a question is an array of
 * category, question,
 * an array of possible answers,
 * and a pointer to the correct answer
 */
export const quiz0 = [
    'Testquiz',
    [
        [
            'JavaScript in the Browser',
            'Which of the following lists contain only JavaScript types?',
            [
                'Boolean, Number, Text, Array',
                'Boolean, Number, Text, Collection',
                'Boolean, Integer, Float, Text, Array',
                'Boolean, Number, String, Array, Null'
            ],
            3
        ],
        [
            'JavaScript in the Browser',
            'Which of the following statements makes a module available to JavaScript?',
            [
                'require',
                'request',
                'import',
                'require once'
            ],
            2
        ],
        [
            'JavaScript in the Browser',
            'What is AJaX?',
            [
                'A window cleaning chemical',
                'A way for JavaScript to access a server',
                'An iPhone app written in JavaScript',
                'A specific integrated development environment'
            ],
            1
        ],
        [
            'JavaScript in the Browser',
            'How do you add 1 to the variable foo?',
            [
                'foo = foo + 1;',
                'foo++;',
                'foo += 1;',
                '++foo;',
                'any of the above;',
                'none of the above'
            ],
            4
        ],
        [
            'JavaScript in the Browser',
            'How do you define an array in JavaScript?',
            [
                "let arr = (1, 2, 'a', b);",
                "let arr = (1; 2; 'a'; b);",
                "let arr = [1, 2, 'a', b];",
                "let arr = 1, 2, 'a', b;",
                "let arr = \"1, 2, 'a', b\";",
            ],
            2
        ]
    ]
];
