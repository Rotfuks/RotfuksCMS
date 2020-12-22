import Page from '@/models/page';
import Section from '@/models/section';
import RfTextComponent from '@/models/rfComponents/rfTextComponent';
import RfComponent, {RfComponentType} from '@/models/rfComponents/rfComponent';
import RfImageComponent from '@/models/rfComponents/rfImageComponent';

class PageService {
    private static createPage(title: string, name: string, url: string) {
        const imageComponent = new RfImageComponent(RfComponentType.ImageComponent,
          'helloImage', 'Hello Image', 'An hello image',
          'https://avatars2.githubusercontent.com/u/16223546?s=460&u=5d168af9dc37107035a4fe74532d5d33ca36194c&v=4',
          true);
        const textComponent = new RfTextComponent(RfComponentType.TextComponent,
          'helloText', title, '**Really** nice to have *you* here :)');
        const section = new Section('firstSection', 'Welcome!', 2,
          new Array<RfComponent>(imageComponent, textComponent));

        return new Page('1234', name, 'Welcome Home!',
          url, new Array<Section>(section));
    }

    private readonly pages: Page[];

    constructor() {
        const home: Page = PageService.createPage('Hello World!', 'home', '/');
        const page1: Page = PageService.createPage('Hello World, Again!', 'test', '/test');
        this.pages = new Array<Page>(home, page1);
    }

    public getPages() {
        return this.pages;
    }
}

const pageService = new PageService();
export default pageService;
