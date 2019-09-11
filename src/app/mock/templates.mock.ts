import { ItemModel, ParagraphModel, SectionModel, TemplateDto } from "../shared/models";

export const TEMPLATES_MOCK = [
    new TemplateDto(
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
                                4,
                                1,
                                [],
                                [
                                    new ItemModel(
                                        10,
                                        'Primary Power Supply Nominal Voltage:',
                                        1,
                                        'input'
                                    ),
                                    new ItemModel(
                                        11,
                                        'Primary Power Supply Amps:',
                                        2,
                                        'input'
                                    ),
                                    new ItemModel(
                                        12,
                                        'Overcurrent Protection Type:',
                                        3,
                                        'select'
                                    )
                                ]
                            )
                        ],
                        [
                            new ItemModel(
                                1,
                                'Primary Power Supply Nominal Voltage:',
                                1,
                                'input'
                            ),
                            new ItemModel(
                                2,
                                'Primary Power Supply Amps:',
                                2,
                                'input'
                            ),
                            new ItemModel(
                                3,
                                'Overcurrent Protection Type:',
                                3,
                                'select'
                            )
                        ]
                    ),
                    new ParagraphModel(
                        2,
                        2,
                        [
                            new ParagraphModel(
                                5,
                                1,
                                [
                                    new ParagraphModel(
                                        6,
                                        1,
                                        [],
                                        [
                                            new ItemModel(
                                                16,
                                                'Primary Power Supply Nominal Voltage:',
                                                1,
                                                'input'
                                            ),
                                            new ItemModel(
                                                17,
                                                'Primary Power Supply Amps:',
                                                2,
                                                'input'
                                            ),
                                            new ItemModel(
                                                18,
                                                'Overcurrent Protection Type:',
                                                3,
                                                'select'
                                            )
                                        ]
                                    )
                                ],
                                [
                                    new ItemModel(
                                        13,
                                        'Primary Power Supply Nominal Voltage:',
                                        1,
                                        'input'
                                    ),
                                    new ItemModel(
                                        14,
                                        'Primary Power Supply Amps:',
                                        2,
                                        'input'
                                    ),
                                    new ItemModel(
                                        15,
                                        'Overcurrent Protection Type:',
                                        3,
                                        'select'
                                    )
                                ]
                            )
                        ],
                        [
                            new ItemModel(
                                4,
                                'Primary Power Supply Nominal Voltage:',
                                1,
                                'input'
                            ),
                            new ItemModel(
                                5,
                                'Primary Power Supply Amps:',
                                2,
                                'input'
                            ),
                            new ItemModel(
                                6,
                                'Overcurrent Protection Type:',
                                3,
                                'select'
                            )
                        ]
                    ),
                    new ParagraphModel(
                        3,
                        3,
                        [],
                        [
                            new ItemModel(
                                7,
                                'Primary Power Supply Nominal Voltage:',
                                1,
                                'input'
                            ),
                            new ItemModel(
                                8,
                                'Primary Power Supply Amps:',
                                2,
                                'input'
                            ),
                            new ItemModel(
                                9,
                                'Overcurrent Protection Type:',
                                3,
                                'select'
                            )
                        ]
                    )
                ]
            )
        ]
    )
];

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
                            4,
                            1,
                            [],
                            [
                                new ItemModel(
                                    10,
                                    'Primary Power Supply Nominal Voltage:',
                                    1,
                                    'input'
                                ),
                                new ItemModel(
                                    11,
                                    'Primary Power Supply Amps:',
                                    2,
                                    'input'
                                ),
                                new ItemModel(
                                    12,
                                    'Overcurrent Protection Type:',
                                    3,
                                    'select'
                                )
                            ]
                        )
                    ],
                    [
                        new ItemModel(
                            1,
                            'Primary Power Supply Nominal Voltage:',
                            1,
                            'input'
                        ),
                        new ItemModel(
                            2,
                            'Primary Power Supply Amps:',
                            2,
                            'input'
                        ),
                        new ItemModel(
                            3,
                            'Overcurrent Protection Type:',
                            3,
                            'select'
                        )
                    ]
                ),
                new ParagraphModel(
                    2,
                    2,
                    [
                        new ParagraphModel(
                            5,
                            1,
                            [
                                new ParagraphModel(
                                    6,
                                    1,
                                    [],
                                    [
                                        new ItemModel(
                                            16,
                                            'Primary Power Supply Nominal Voltage:',
                                            1,
                                            'input'
                                        ),
                                        new ItemModel(
                                            17,
                                            'Primary Power Supply Amps:',
                                            2,
                                            'input'
                                        ),
                                        new ItemModel(
                                            18,
                                            'Overcurrent Protection Type:',
                                            3,
                                            'select'
                                        )
                                    ]
                                )
                            ],
                            [
                                new ItemModel(
                                    13,
                                    'Primary Power Supply Nominal Voltage:',
                                    1,
                                    'input'
                                ),
                                new ItemModel(
                                    14,
                                    'Primary Power Supply Amps:',
                                    2,
                                    'input'
                                ),
                                new ItemModel(
                                    15,
                                    'Overcurrent Protection Type:',
                                    3,
                                    'select'
                                )
                            ]
                        )
                    ],
                    [
                        new ItemModel(
                            4,
                            'Primary Power Supply Nominal Voltage:',
                            1,
                            'input'
                        ),
                        new ItemModel(
                            5,
                            'Primary Power Supply Amps:',
                            2,
                            'input'
                        ),
                        new ItemModel(
                            6,
                            'Overcurrent Protection Type:',
                            3,
                            'select'
                        )
                    ]
                ),
                new ParagraphModel(
                    3,
                    3,
                    [],
                    [
                        new ItemModel(
                            7,
                            'Primary Power Supply Nominal Voltage:',
                            1,
                            'input'
                        ),
                        new ItemModel(
                            8,
                            'Primary Power Supply Amps:',
                            2,
                            'input'
                        ),
                        new ItemModel(
                            9,
                            'Overcurrent Protection Type:',
                            3,
                            'select'
                        )
                    ]
                )
            ]
        )
    ]
);
