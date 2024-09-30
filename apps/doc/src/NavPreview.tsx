import { VscBook, VscCode, VscHome } from "react-icons/vsc";
import { Nav, NavItem, NavItemIcon, NavItemLabel } from "ui";

const NavPreview = () => {
  return (
    <Nav>
      <NavItem>
        <NavItemIcon>
          <VscHome />
        </NavItemIcon>
        <NavItemLabel>Home</NavItemLabel>
      </NavItem>
      <NavItem>
        <NavItemIcon>
          <VscBook />
        </NavItemIcon>
        <NavItemLabel>Blog</NavItemLabel>
      </NavItem>
      <NavItem>
        <NavItemIcon>
          <VscCode />
        </NavItemIcon>
        <NavItemLabel>Code</NavItemLabel>
      </NavItem>
    </Nav>
  );
};

export default NavPreview;
