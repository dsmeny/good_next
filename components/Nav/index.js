import Link from "next/link";
import { useContext } from "react";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={classes.container}>
      <Link href="/" className={classes.links} passHref>
        <h2>
          Good<span style={{ fontSize: "5rem" }}>2</span>
          Watch
        </h2>
      </Link>
      <nav>
        <Link href="/good" className={classes.links} passHref>
          <li>GOOD picks</li>
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
