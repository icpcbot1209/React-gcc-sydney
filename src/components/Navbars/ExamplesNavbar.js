/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
import logoLight from 'assets/gcc-horiz-light.svg';
import logoDark from 'assets/gcc-horiz-dark.svg';

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button
} from "reactstrap";
import { GiveModal } from "views/modals/GiveModal";

function ExamplesNavbar() {
  const [giveModal, setGiveModal] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const history = useHistory();

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand data-placement="bottom"
            to="/welcome"
            title="GCC Sydney"
            tag={Link}>
            <img
              alt="logo"
              src={navbarColor===""? logoLight: logoDark}
              style={{
                height: 64,
                width: 160
              }}
            />
          </NavbarBrand>

          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle
                aria-haspopup={true}
                caret
                color="default"
                data-toggle="dropdown"
                nav
                onClick={e => e.preventDefault()}
              >
                Home
              </DropdownToggle>
              <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                <DropdownItem
                  to="/welcome#meeting"
                  onClick={e => e.preventDefault()}
                >
                  Meeting Times
                </DropdownItem>
                <DropdownItem
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Connect
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>



            <NavItem>
              <NavLink to="/about" tag={Link}>
                About
              </NavLink>
            </NavItem>  
            <NavItem>
              <NavLink to="/believe" tag={Link}>
                What We Believe
              </NavLink>
            </NavItem>





            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/gccsydney"
                target="_blank" rel="noreferrer"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.youtube.com/gccsydney"
                target="_blank" rel="noreferrer"
                title="Follow us on Youtube"
              >
                <i className="fa fa-youtube-play" />
                <p className="d-lg-none">Youtube</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/gccsydneyau"
                target="_blank" rel="noreferrer"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="info@gccsydney.org"
                target="_blank" rel="noreferrer"
                title="Send Email"
              >
                <i className="fa fa-envelope-o" />
                <p className="d-lg-none">Mail</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <Button
                className="btn-round"
                color="danger"
                onClick={()=>setGiveModal(true)}
              >
                <i className="nc-icon nc-spaceship"></i> GIVE
              </Button>
            </NavItem>


          </Nav>

        </Collapse>
      </Container>
      <GiveModal isOpen={giveModal} toggleOpen={setGiveModal}/>
    </Navbar>

  );
}

export default ExamplesNavbar;
