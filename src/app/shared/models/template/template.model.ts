export class TemplateDto {
    constructor(
        public readonly templateName: string,
        public readonly serviceName: string,
        public readonly division: string,
        public readonly id?: number,
        public readonly version?: number,
        public readonly lastEdited?: string,
        public readonly lastEditedBy?: string
    ) { }
}
