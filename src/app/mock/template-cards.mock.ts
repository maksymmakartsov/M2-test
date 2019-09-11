import { TemplateCardDto } from "../shared/models";

export const DRAFT_TEMPLATES_MOCK: TemplateCardDto[] = [
    new TemplateCardDto('Annual Fire Inspection', 'Annual Fire Inspection', 'Fire', null, null, '2019.07.15', 'Ali Connors'),
    new TemplateCardDto('Annual Fire Inspection', 'Annual Fire Inspection', 'Fire', null, null, '2019.07.15', 'Ali Connors'),
    new TemplateCardDto('Annual Fire Inspection', 'Annual Fire Inspection', 'Fire', null, null, '2019.07.15', 'Ali Connors'),
    new TemplateCardDto('Annual Fire Inspection', 'Annual Fire Inspection', 'Fire', null, null, '2019.07.15', 'Ali Connors'),
    new TemplateCardDto('Annual Fire Inspection', 'Annual Fire Inspection', 'Fire', null, null, '2019.07.15', 'Ali Connors'),
    new TemplateCardDto('Annual Fire Inspection', 'Annual Fire Inspection', 'Fire', null, null, '2019.07.15', 'Ali Connors')
];

export const PUBLISHED_TEMPLATES_MOCK: TemplateCardDto[] = [
    new TemplateCardDto('Annual Backflow Inspection Template', 'Annual Backflow Inspection', 'Backflow', 1, 1, '2019.07.15', 'Ali Connors'),
    new TemplateCardDto('Template for 5 Year Obstruction Investigation with ...', '5 Year Obstruction Investigation with Check Valve an...', 'Fire', 2, 4, '2019.07.15', 'Ali Connors'),
    new TemplateCardDto('Inspection Template', 'Annual Fire Sprinkler System Inspection', 'Fire', 3, 1, '2019.07.15', 'Ali Connors'),
    new TemplateCardDto('Annual Fire Inspection', 'Annual Fire Inspection', 'Fire', 4, 2, '2019.07.15', 'Ali Connors'),
    new TemplateCardDto('Annual Fire Inspection', 'Annual Fire Inspection', 'Fire', 5, 1, '2019.07.15', 'Ali Connors'),
    new TemplateCardDto('Annual Fire Inspection', 'Annual Fire Inspection', 'Fire', 6, 3, '2019.07.15', 'Ali Connors'),
    new TemplateCardDto('Annual Fire Inspection', 'Annual Fire Inspection', 'Fire', 7, 1, '2019.07.15', 'Ali Connors')
];

export const FILTERED_DRAFT_TEMPLATES_MOCK: TemplateCardDto[] = [
    new TemplateCardDto('Annual Fire Inspection', 'Annual Fire Inspection', 'Fire', null, null, '2019.07.15', 'Ali Connors'),
    new TemplateCardDto('Annual Fire Inspection', 'Annual Fire Inspection', 'Fire', null, null, '2019.07.15', 'Ali Connors')
];

export const FILTERED_PUBLISHED_TEMPLATES_MOCK: TemplateCardDto[] = [
    new TemplateCardDto('Annual Fire Inspection', 'Annual Fire Inspection', 'Fire', null, null, '2019.07.15', 'Ali Connors'),
    new TemplateCardDto('Annual Fire Inspection', 'Annual Fire Inspection', 'Fire', null, null, '2019.07.15', 'Ali Connors'),
    new TemplateCardDto('Annual Fire Inspection', 'Annual Fire Inspection', 'Fire', null, null, '2019.07.15', 'Ali Connors')
];
