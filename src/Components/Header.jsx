import Logo from "../images/logo.png";

import { HeaderContainer } from "./Header.styles";

export function Header() {
    return (
        <HeaderContainer>
            <img src={Logo} alt="" />
        </HeaderContainer>
    )
}