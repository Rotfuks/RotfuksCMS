interface RfComponent {
    readonly name: string;
    readonly type: RfComponentType;
    readonly title: string;

    getName(): string;
    getType(): RfComponentType;
    getTitle(): string;
}

export enum RfComponentType {
    ImageComponent,
    TextComponent,
}

export default RfComponent;
