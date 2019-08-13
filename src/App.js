import React, { useRef, useEffect, useState } from "react";

import "./App.css";

import Nav from "./navigation/Nav";

import { NavElement } from "./navigation/NavComponents";

function App() {
  const myRef = useRef(null);
  const [currentRef, setRef] = useState(null);

  const [cn, setCn] = useState("");

  useEffect(() => {
    setRef(myRef.current);
    console.log(currentRef);

    return () => {};
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return (
    <React.Fragment>
      <div ref={myRef} className={"sidemenuwrap " + cn} />
      <div className={"App " + cn}>
        <Nav logo={<Logo />} sideNavElement={currentRef} setCn={setCn} cn={cn}>
          <NavElement name="Work" />
          <NavElement name="About" />
          <NavElement name="Contact" />
        </Nav>
        <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed
          mattis quam. Cras venenatis ut erat ut egestas. Ut euismod molestie
          elementum. Mauris ullamcorper fringilla commodo. Ut sed vestibulum
          diam, fermentum tincidunt enim. Vestibulum ante eros, pulvinar vel
          pretium eleifend, vehicula sit amet magna. Etiam fermentum metus non
          eros facilisis, posuere posuere dui porttitor. <br />
          <br /> Ut condimentum volutpat ultrices. Aenean tincidunt tellus
          imperdiet, malesuada neque sit amet, dignissim sem. Vivamus dui quam,
          imperdiet sit amet mi at, fringilla semper leo. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Quisque et mauris consequat,
          molestie nisl nec, finibus enim. Maecenas at elementum odio, ac
          faucibus dui. Aliquam scelerisque sollicitudin elit, id convallis
          sapien vulputate non. Ut sit amet tincidunt mauris. Integer rutrum
          erat ac lorem porttitor dictum.
          <br />
          <br />
          Quisque condimentum massa a tortor scelerisque dignissim. Proin dictum
          erat in convallis pharetra. Vivamus imperdiet vestibulum arcu, sit
          amet malesuada purus. Pellentesque suscipit imperdiet molestie.
          Praesent aliquet, mauris eget sagittis pretium, leo sem commodo felis,
          auctor ultrices massa diam ac magna. Sed sed fringilla urna. Integer
          tempus leo nunc, vel condimentum lorem semper id. Integer faucibus
          nibh sed nisl tempus, sed faucibus eros fringilla. Mauris viverra
          varius ex, sit amet pretium justo facilisis quis. <br />
          <br /> Proin id ornare orci. Cras sit amet tellus eleifend, porttitor
          nisl a, suscipit metus. Nullam cursus blandit tortor, ac viverra lorem
          vehicula ut. Maecenas vitae sagittis ipsum. Duis in ipsum mattis,
          maximus dolor nec, consequat turpis. Duis ut pharetra augue. Phasellus
          volutpat vitae augue eu blandit. Quisque efficitur auctor libero ut
          suscipit.
          <br />
          <br />
          Phasellus rutrum nulla augue, ut imperdiet ligula blandit vel.
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Vestibulum faucibus euismod laoreet. Cras vestibulum justo in
          dignissim laoreet. Donec interdum pulvinar interdum. Proin nec
          tristique sapien. Quisque vitae purus non est pellentesque congue
          lacinia at velit. Duis sagittis nisl purus, sed suscipit arcu congue
          at. Morbi feugiat, neque et pellentesque dictum, quam ligula fringilla
          risus, sit amet tempus mi tortor sed erat. <br />
          <br /> Nunc a leo ligula. Nullam nec diam ex. Donec tincidunt purus a
          leo pellentesque facilisis id eget tellus. Pellentesque sit amet
          aliquet risus. Morbi vel viverra neque, non interdum tellus. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Mauris sit amet nunc sit amet nulla porta egestas.
          Praesent id justo vestibulum,
          <br />
          <br />
          fermentum ante sit amet, rhoncus est. Mauris iaculis nunc placerat
          purus interdum, sed posuere tellus ornare. Duis lacinia ultricies
          dapibus. Morbi tempus dolor at magna feugiat laoreet.
        </p>
      </div>
    </React.Fragment>
  );
}

const Logo = () => {
  return <div className="nav-element nav-logo">1508 Nav</div>;
};

export default App;
