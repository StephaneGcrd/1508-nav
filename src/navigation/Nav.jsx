import React, { useState, useEffect } from "react";
import { useWindowSize } from "./helpers";

import ReactDOM from "react-dom";
import { SvgBurgerMenu, SideMenu } from "./NavComponents";

const Nav = ({ logo, children, sideNavElement, setCn, cn }) => {
  const size = useWindowSize(); // Custom Hook to get the window size

  const [isMobile, setMobile] = useState(false);
  const [isMenuActive, toggleMenuVisibility] = useState(false);

  const showMenu = () => {
    toggleMenuVisibility(true);
    setCn("push");
  };

  const hideMenu = withAnimation => {
    if (withAnimation) setCn("hide"); // If animation, add the className hide to trigger the hiding animation
    setTimeout(
      () => {
        toggleMenuVisibility(false); // Delete side-nav of the DOM after the animation
        setCn("");
      },
      withAnimation ? 290 : 0 // If no Animation, directly delete the side-nav
    );
  };

  // Here, useEffect is called whenever the size change
  useEffect(() => {
    if (size && size.width < 600) {
      setMobile(true);
    } else {
      setMobile(false);
      hideMenu(isMenuActive ? true : false);
    }

    return () => {};
  }, [size.width]);

  // Wrap the childrens in the SideMenu element
  const sideMenu = (
    <SideMenu
      closeFn={() => {
        hideMenu(true);
      }}
      cn={cn}
    >
      {children}
    </SideMenu>
  );

  return (
    <React.Fragment>
      <div className="nav-wrapper">
        <div className={isMobile ? "nav mobile" : "nav"}>
          {logo}
          {isMobile ? (
            <div
              className="nav-element burger-menu"
              onClick={() => {
                showMenu();
              }}
            >
              <SvgBurgerMenu />
            </div>
          ) : null}

          {/* If not mobile, display the childrens in the NavBar */}
          {!isMobile && <div>{children}</div>}
        </div>
      </div>

      {isMenuActive &&
        isMobile &&
        ReactDOM.createPortal(sideMenu, sideNavElement)
      // If the menu have to be shown (mobile), push it to the React portal
      }
    </React.Fragment>
  );
};

export default Nav;
