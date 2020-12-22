import Component, {RfComponentType} from '@/models/rfComponents/rfComponent';

class RfImageComponent implements Component {
    public readonly type: RfComponentType;
    public readonly name: string;
    public readonly title: string;
    public readonly alttext: string;
    public readonly src: string;
    public readonly rounded: boolean;

    constructor(type: RfComponentType, name: string, title: string,
                alttext: string, src: string, rounded: boolean) {
        this.type = type;
        this.name = name;
        this.title = title;
        this.alttext = alttext;
        this.src = src;
        this.rounded = rounded;
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
    public getAlttext() {
        return this.alttext;
    }
    public getSrc() {
        return this.src;
    }
    public getRounded() {
        return this.rounded;
    }
}

export default RfImageComponent;
