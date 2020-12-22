import NavLink from './navLink';

class Navbar {
    private readonly logo: string;
    private readonly text: string;
    private readonly mainNav: NavLink[];
    private readonly sideNav: NavLink[];
    private readonly type: string;
    private readonly variant: string;

    constructor(logo: string, text: string, mainNav: NavLink[],
                sideNav: NavLink[], type: string, variant: string) {
        this.logo = logo;
        this.text = text;
        this.mainNav = mainNav;
        this.sideNav = sideNav;
        this.type = type;
        this.variant = variant;
    }

    public getLogo() {
        return this.logo;
    }
    public getText() {
        return this.text;
    }
    public getMainNav() {
        return this.mainNav;
    }
    public getSideNav() {
        return this.sideNav;
    }
    public getType() {
        return this.type;
    }
    public getVariant() {
        return this.variant;
    }
}

export default Navbar;
