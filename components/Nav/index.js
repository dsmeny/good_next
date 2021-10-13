import Link from "next/link";
import { useContext } from "react";
import MovieContext from "../../providers/MediaContextProvider";
import classes from "./Nav.module.css";

const Nav = () => {
  const { showMedia } = useContext(MovieContext);

  return (
    <div className={classes.container}>
      <Link href="/" className={classes.links} passHref>
        <h2>
          Good<span style={{ fontSize: "5rem" }}>2</span>
          Watch
        </h2>
      </Link>
      <nav>
        <Link href="/Shows" className={classes.links} passHref>
          <li className={showMedia === "Shows" ? classes.active : ""}>Shows</li>
        </Link>
        <Link href="/Movies" className={classes.links} passHref>
          <li className={showMedia === "Movies" ? classes.active : ""}>
            Movies
          </li>
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
