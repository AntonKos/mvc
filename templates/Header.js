import Burger from './Burger.js';

const Header = () => `
<header class="header wrapper">
    <div class="header-wrapper">
        ${Burger()}
    </div>
</header>
`;

export default Header;