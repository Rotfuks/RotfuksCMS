import Navbar from '../models/navbar';
import NavLink from '../models/navLink';

class NavigationService {
    private readonly navbar: Navbar;

    public constructor() {
        const navLink = new NavLink(
            '123',
            'Test me!',
            '/test',
            false,
        );
        this.navbar = new Navbar(
            'https://avatars2.githubusercontent.com/u/16223546?s=460&u=5d168af9dc37107035a4fe74532d5d33ca36194c&v=4',
            'Hello World',
            new Array<NavLink>(navLink),
            new Array<NavLink>(),
            'dark',
            'dark',
        );
    }

    public getNavbar() {
        return this.navbar;
    }
}

const navigationService = new NavigationService();
export default navigationService;
