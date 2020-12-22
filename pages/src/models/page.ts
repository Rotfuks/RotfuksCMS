import Section from '@/models/section';

class Page {
    private readonly id: string;
    private readonly name: string;
    private readonly title: string;
    private readonly url: string;
    private readonly sections: Section[];

    constructor(id: string, name: string, title: string,
                url: string, sections: Section[]) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.url = url;
        this.sections = sections;
    }

    public getName() {
        return this.name;
    }
    public getTitle() {
        return this.title;
    }
    public getUrl() {
        return this.url;
    }
    public getSections() {
        return this.sections;
    }
}

export default Page;
