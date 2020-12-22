import RfComponent, {RfComponentType} from '@/models/rfComponents/rfComponent';

class RfTextComponent implements RfComponent {
    public readonly type: RfComponentType;
    public readonly name: string;
    public readonly title: string;
    public readonly markuptext: string;

    constructor(type: RfComponentType, name: string,
                title: string, markuptext: string) {
        this.type = type;
        this.name = name;
        this.title = title;
        this.markuptext = markuptext;
    }

    public getType() {
        return this.type;
    }
    public getName() {
        return this.name;
    }
    public getTitle() {
        return this.title;
    }
    public getMarkuptext() {
        return this.markuptext;
    }
}

export default RfTextComponent;
