import React from "react";

// Contains an element for the nav, like a button
const NavElement = ({ name }) => {
  return <div className="nav-element">{name}</div>;
};

// Side menu for mobile
const SideMenu = ({ children, closeFn }) => {
  return (
    <div className={"nav-side"}>
      <div className="nav-side-close" onClick={() => closeFn(false)}>
        <SvgCloseBtn />
      </div>
      {children}
    </div>
  );
};

// Logo of the app
const NavLogo = () => {
  return <div className="nav-element nav-logo">1508 Nav</div>;
};

const SvgCloseBtn = () => (
  <svg width="15" height="15">
    <line x1="0" y1="0" x2="15" y2="15" stroke="white" strokeWidth="2" />
    <line x1="0" y1="15" x2="15" y2="0" stroke="white" strokeWidth="2" />
  </svg>
);

const SvgBurgerMenu = () => (
  <svg width="15" height="15">
    <line x1="0" y1="2" x2="15" y2="2" stroke="white" strokeWidth="2" />
    <line
      x1="0"
      y1={15 / 2}
      x2="15"
      y2={15 / 2}
      stroke="white"
      strokeWidth="2"
    />
    <line x1="0" y1={13} x2="15" y2={13} stroke="white" strokeWidth="2" />
  </svg>
);

export { NavElement, SideMenu, NavLogo, SvgBurgerMenu };
