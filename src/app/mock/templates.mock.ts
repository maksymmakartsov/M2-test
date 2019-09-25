import { ItemModel, ItemType, ParagraphModel, SectionModel, TemplateDto } from '../shared/models';

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
                    [
                        new ParagraphModel(
                            2,
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
                            ],
                            'NACP PRIMARY POWER SUPPLY'
                        ),
                        new ParagraphModel(
                            3,
                            2,
                            [
                                new ParagraphModel(
                                    4,
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
                                    ],
                                    'NACP Battery'
                                ),
                                new ParagraphModel(
                                    5,
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
                                    ],
                                    'Generator'
                                )
                            ],
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
                            ],
                            'NACP SECONDARY POWER SUPPLY INFORMATION'
                        )
                    ],
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
                        ),

                    ],
                    'NAC Panel'
                ),
                new ParagraphModel(
                    6,
                    3,
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
                    ],
                    'NACP SECONDARY POWER SUPPLY CONCLUSION'
                )
            ]
        ),
        new SectionModel(
            2,
            'ALARM INITIATING DEVICES',
            2,
            [
                new ParagraphModel(
                    7,
                    1,
                    [
                        new ParagraphModel(
                            8,
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
                            ],
                            'Pull Station'
                        )
                    ],
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
                    ],
                    'Pull Station(s)'
                )
            ]
        )
    ]
);
