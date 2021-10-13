import Nav from "./Nav";
import styles from "./Layout.module.css";
const Layout = (props) => {
  return (
    <div className={styles.layout}>
      <Nav />
      <main className={styles.container}>{props.children}</main>
    </div>
  );
};

export default Layout;
