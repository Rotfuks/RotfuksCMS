
class NavLink {
    private readonly id: string;
    private readonly label: string;
    private readonly url: string;
    private readonly newTab: boolean;

    public constructor(id: string, label: string, url: string, newTab: boolean) {
        this.id = id;
        this.label = label;
        this.url = url;
        this.newTab = newTab;
    }

    public getId() {
        return this.id;
    }
    public getLabel() {
        return this.label;
    }
    public getUrl() {
        return this.url;
    }
    public getNewTab() {
        return this.newTab;
    }
}

export default NavLink;
