import React, { useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 100);
    });
  }, []);

  return (
    <div className={`nav-container ${show && "nav-container-black"}`}>
      <img
        className="nav-logo"
        src="https://i.ibb.co/BL3NdVJ/footer.png"
        alt="Aluraflix"
      ></img>
      <img
        className="nav-avatar"
        src="https://i.ibb.co/WWDF5Wf/alura.jpg"
        alt="Alura"
      ></img>
    </div>
  );
}

export default Nav;