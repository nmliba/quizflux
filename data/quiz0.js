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
            'Git',
            'What is a repo?',
            [
                'Another term for an array',
                'A reproduction of an old painting',
                'Directories and files of a project'
            ],
            2
        ],
        [
            'Git',
            'What is a commit?',
            [
                'A checkpoint snapshot of a project repo',
                'A copy of a file',
                'A marriage certificate'
            ],
            0
        ],
        [
            'Git',
            'What is a branch?',
            [
                'A bank on a neighbourhood corner',
                'A separate copy of project files meant for secure development',
                'A subdirectory of the filesystem'
            ],
            1
        ]
    ]
];
