import { ItemModel, ItemType, ParagraphModel, SectionModel, TemplateDto } from '../shared/models';

// export const TEMPLATES_MOCK = [
//     new TemplateDto(
//         1,
//         'Annual Fire Alarm System Inspection',
//         'Annual Fire Inspection',
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         [
//             new SectionModel(
//                 1,
//                 'NAC Panels',
//                 1,
//                 [
//                     new ParagraphModel(
//                         1,
//                         1,
//                         [
//                             new ParagraphModel(
//                                 4,
//                                 1,
//                                 [],
//                                 [
//                                     new ItemModel(
//                                         10,
//                                         'Info',
//                                         1,
//                                         'input'
//                                     ),
//                                     new ItemModel(
//                                         11,
//                                         'Text',
//                                         2,
//                                         'input'
//                                     ),
//                                     new ItemModel(
//                                         12,
//                                         'One option from list',
//                                         3,
//                                         'select'
//                                     )
//                                 ]
//                             )
//                         ],
//                         [
//                             new ItemModel(
//                                 1,
//                                 'Info',
//                                 1,
//                                 'input'
//                             ),
//                             new ItemModel(
//                                 2,
//                                 'Text',
//                                 2,
//                                 'input'
//                             ),
//                             new ItemModel(
//                                 3,
//                                 'One option from list',
//                                 3,
//                                 'select'
//                             )
//                         ]
//                     ),
//                     new ParagraphModel(
//                         2,
//                         2,
//                         [
//                             new ParagraphModel(
//                                 5,
//                                 1,
//                                 [
//                                     new ParagraphModel(
//                                         6,
//                                         1,
//                                         [],
//                                         [
//                                             new ItemModel(
//                                                 16,
//                                                 'Info',
//                                                 1,
//                                                 'input'
//                                             ),
//                                             new ItemModel(
//                                                 17,
//                                                 'Text',
//                                                 2,
//                                                 'input'
//                                             ),
//                                             new ItemModel(
//                                                 18,
//                                                 'One option from list',
//                                                 3,
//                                                 'select'
//                                             )
//                                         ]
//                                     )
//                                 ],
//                                 [
//                                     new ItemModel(
//                                         13,
//                                         'Info',
//                                         1,
//                                         'input'
//                                     ),
//                                     new ItemModel(
//                                         14,
//                                         'Text',
//                                         2,
//                                         'input'
//                                     ),
//                                     new ItemModel(
//                                         15,
//                                         'One option from list',
//                                         3,
//                                         'select'
//                                     )
//                                 ]
//                             )
//                         ],
//                         [
//                             new ItemModel(
//                                 4,
//                                 'Info',
//                                 1,
//                                 'input'
//                             ),
//                             new ItemModel(
//                                 5,
//                                 'Text',
//                                 2,
//                                 'input'
//                             ),
//                             new ItemModel(
//                                 6,
//                                 'One option from list',
//                                 3,
//                                 'select'
//                             )
//                         ]
//                     ),
//                     new ParagraphModel(
//                         3,
//                         3,
//                         [],
//                         [
//                             new ItemModel(
//                                 7,
//                                 'Info',
//                                 1,
//                                 'input'
//                             ),
//                             new ItemModel(
//                                 8,
//                                 'Text',
//                                 2,
//                                 'input'
//                             ),
//                             new ItemModel(
//                                 9,
//                                 'One option from list',
//                                 3,
//                                 'select'
//                             )
//                         ]
//                     )
//                 ]
//             )
//         ]
//     )
// ];

export const TEMPLATE_MOCK = new TemplateDto(
    1,
    'Annual Fire Alarm System Inspection',
    'Annual Fire Inspection',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    [
        new SectionModel(
            1,
            'NAC Panels',
            1,
            [
                new ParagraphModel(
                    1,
                    1,
                    null,
                    [
                        new ItemModel(
                            1,
                            'Info',
                            1,
                            new ItemType('Information phone', 'information_phone'),
                            'information'
                        ),
                        new ItemModel(
                            2,
                            'Text',
                            2,
                            new ItemType('Text input', 'text_input'),
                            'question'
                        ),
                        new ItemModel(
                            3,
                            'One option from list',
                            3,
                            new ItemType('Single-selection list', 'select'),
                            'question'
                        ),
                        new ItemModel(
                            4,
                            'One option from list',
                            4,
                            new ItemType('Single-selection list', 'select'),
                            'question'
                        )
                    ]
                ),
                new ParagraphModel(
                    4,
                    1,
                    new ParagraphModel(
                        1,
                        1,
                        null,
                        [
                            new ItemModel(
                                1,
                                'Info',
                                1,
                                new ItemType('Information phone', 'information_phone'),
                                'information'
                            ),
                            new ItemModel(
                                2,
                                'Text',
                                2,
                                new ItemType('Text input', 'text_input'),
                                'question'
                            ),
                            new ItemModel(
                                3,
                                'One option from list',
                                3,
                                new ItemType('Single-selection list', 'select'),
                                'question'
                            ),
                            new ItemModel(
                                4,
                                'One option from list',
                                4,
                                new ItemType('Single-selection list', 'select'),
                                'question'
                            )
                        ]
                    ),
                    [
                        new ItemModel(
                            1,
                            'Info',
                            1,
                            new ItemType('Information phone', 'information_phone'),
                            'information'
                        ),
                        new ItemModel(
                            2,
                            'Text',
                            2,
                            new ItemType('Text input', 'text_input'),
                            'question'
                        ),
                        new ItemModel(
                            3,
                            'One option from list',
                            3,
                            new ItemType('Single-selection list', 'select'),
                            'question'
                        ),
                        new ItemModel(
                            4,
                            'One option from list',
                            4,
                            new ItemType('Single-selection list', 'select'),
                            'question'
                        )
                    ]
                ),
                new ParagraphModel(
                    2,
                    2,
                    null,
                    [
                        new ItemModel(
                            1,
                            'Info',
                            1,
                            new ItemType('Information phone', 'information_phone'),
                            'information'
                        ),
                        new ItemModel(
                            2,
                            'Text',
                            2,
                            new ItemType('Text input', 'text_input'),
                            'question'
                        ),
                        new ItemModel(
                            3,
                            'One option from list',
                            3,
                            new ItemType('Single-selection list', 'select'),
                            'question'
                        ),
                        new ItemModel(
                            4,
                            'One option from list',
                            4,
                            new ItemType('Single-selection list', 'select'),
                            'question'
                        )
                    ]
                ),
                new ParagraphModel(
                    6,
                    1,
                    new ParagraphModel(
                        5,
                        1,
                        new ParagraphModel(
                            2,
                            2,
                            null,
                            [
                                new ItemModel(
                                    1,
                                    'Info',
                                    1,
                                    new ItemType('Information phone', 'information_phone'),
                                    'information'
                                ),
                                new ItemModel(
                                    2,
                                    'Text',
                                    2,
                                    new ItemType('Text input', 'text_input'),
                                    'question'
                                ),
                                new ItemModel(
                                    3,
                                    'One option from list',
                                    3,
                                    new ItemType('Single-selection list', 'select'),
                                    'question'
                                ),
                                new ItemModel(
                                    4,
                                    'One option from list',
                                    4,
                                    new ItemType('Single-selection list', 'select'),
                                    'question'
                                )
                            ]
                        ),
                        [
                            new ItemModel(
                                1,
                                'Info',
                                1,
                                new ItemType('Information phone', 'information_phone'),
                                'information'
                            ),
                            new ItemModel(
                                2,
                                'Text',
                                2,
                                new ItemType('Text input', 'text_input'),
                                'question'
                            ),
                            new ItemModel(
                                3,
                                'One option from list',
                                3,
                                new ItemType('Single-selection list', 'select'),
                                'question'
                            ),
                            new ItemModel(
                                4,
                                'One option from list',
                                4,
                                new ItemType('Single-selection list', 'select'),
                                'question'
                            )
                        ]
                    ),
                    [
                        new ItemModel(
                            1,
                            'Info',
                            1,
                            new ItemType('Information phone', 'information_phone'),
                            'information'
                        ),
                        new ItemModel(
                            2,
                            'Text',
                            2,
                            new ItemType('Text input', 'text_input'),
                            'question'
                        ),
                        new ItemModel(
                            3,
                            'One option from list',
                            3,
                            new ItemType('Single-selection list', 'select'),
                            'question'
                        ),
                        new ItemModel(
                            4,
                            'One option from list',
                            4,
                            new ItemType('Single-selection list', 'select'),
                            'question'
                        )
                    ]
                ),
                new ParagraphModel(
                    5,
                    1,
                    new ParagraphModel(
                        2,
                        2,
                        null,
                        [
                            new ItemModel(
                                1,
                                'Info',
                                1,
                                new ItemType('Information phone', 'information_phone'),
                                'information'
                            ),
                            new ItemModel(
                                2,
                                'Text',
                                2,
                                new ItemType('Text input', 'text_input'),
                                'question'
                            ),
                            new ItemModel(
                                3,
                                'One option from list',
                                3,
                                new ItemType('Single-selection list', 'select'),
                                'question'
                            ),
                            new ItemModel(
                                4,
                                'One option from list',
                                4,
                                new ItemType('Single-selection list', 'select'),
                                'question'
                            )
                        ]
                    ),
                    [
                        new ItemModel(
                            1,
                            'Info',
                            1,
                            new ItemType('Information phone', 'information_phone'),
                            'information'
                        ),
                        new ItemModel(
                            2,
                            'Text',
                            2,
                            new ItemType('Text input', 'text_input'),
                            'question'
                        ),
                        new ItemModel(
                            3,
                            'One option from list',
                            3,
                            new ItemType('Single-selection list', 'select'),
                            'question'
                        ),
                        new ItemModel(
                            4,
                            'One option from list',
                            4,
                            new ItemType('Single-selection list', 'select'),
                            'question'
                        )
                    ]
                ),
                new ParagraphModel(
                    3,
                    3,
                    new ParagraphModel(
                        2,
                        2,
                        null,
                        [
                            new ItemModel(
                                1,
                                'Info',
                                1,
                                new ItemType('Information phone', 'information_phone'),
                                'information'
                            ),
                            new ItemModel(
                                2,
                                'Text',
                                2,
                                new ItemType('Text input', 'text_input'),
                                'question'
                            ),
                            new ItemModel(
                                3,
                                'One option from list',
                                3,
                                new ItemType('Single-selection list', 'select'),
                                'question'
                            ),
                            new ItemModel(
                                4,
                                'One option from list',
                                4,
                                new ItemType('Single-selection list', 'select'),
                                'question'
                            )
                        ]
                    ),
                    [
                        new ItemModel(
                            1,
                            '',
                            1,
                            new ItemType('Information phone', 'information_phone'),
                            'information'
                        ),
                        new ItemModel(
                            2,
                            'Text',
                            2,
                            new ItemType('Text input', 'text_input'),
                            'question'
                        ),
                        new ItemModel(
                            3,
                            'One option from list',
                            3,
                            new ItemType('Single-selection list', 'select'),
                            'question'
                        ),
                        new ItemModel(
                            4,
                            'One option from list',
                            4,
                            new ItemType('Single-selection list', 'select'),
                            'question'
                        )
                    ]
                )
            ]
        )
    ]
);
