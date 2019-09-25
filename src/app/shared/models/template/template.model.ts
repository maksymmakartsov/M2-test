export class TemplateDto {
    constructor(
        public id: number,
        public name: string,
        public service: string,
        public description: string,
        public sections?: SectionModel[]
    ) {}
}

export class SectionModel {
    constructor(
        public id: number,
        public name: string,
        public position: number,
        public paragraphs?: ParagraphModel[],
        public version?: number
    ) {}
}

export class ParagraphModel {
    constructor(
        public id: number,
        public position: number,
        public parent?: ParagraphModel,
        public items?: ItemModel[],
        public heading?: string
    ) {}
}

export class ItemModel {
    constructor(
        public id: number,
        public label: string,
        public position: number,
        public itemType: ItemType,
        public category: string,
        public answerText?: string
    ) {}
}

export class ItemType {
    constructor(
        public name: string,
        public alias: string
    ) {}
}
