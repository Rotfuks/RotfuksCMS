import RfComponent from '@/models/rfComponents/rfComponent';

class Section {
    private readonly name: string;
    private readonly title: string;
    private readonly columns: number;
    private readonly components: RfComponent[];

    constructor(name: string, title: string, columns: number,
                components: RfComponent[]) {
        this.name = name;
        this.title = title;
        this.columns = columns;
        this.components = components;
    }

    public getName() {
        return this.name;
    }
    public getTitle() {
        return this.title;
    }
    public getColumns() {
        return this.columns;
    }
    public getComponents() {
        return this.components;
    }
}

export default Section;
