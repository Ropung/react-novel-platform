import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./components/common/Footer";
import GNB from "./components/common/GNB";
import { db, auth } from "@utils/firebase";
import "firebase/firestore";
import Path from "./utils/routes/Path";
import UnauthenticatedRoutes from "@components/routes/UnauthenticatedRoutes";
import ProtectedRoutes from "@components/routes/ProtectedRoutes";

function App() {
  const location = useLocation();
  const {
    HOME,
    LOGIN,
    NOVEL,
    SIGNUP,
    CARTOON,
    WORKLIST,
    SERIES,
    VIEWER,
    MY,
    LOGOUT,
    MODIFYINFO,
  } = Path;

  const [hasNav, setHasNav] = useState<boolean>(false);
  const [hasFooter, setHasFooter] = useState<boolean>(false);

  const [RoutesComponent, setRoutesComponent] =
    useState<React.ReactElement | null>(null);

  useLayoutEffect(() => {
    auth.currentUser && setRoutesComponent(<ProtectedRoutes />);
    !auth.currentUser && setRoutesComponent(<UnauthenticatedRoutes />);

    console.log("로그인상태:", auth.currentUser);
  }, [auth.currentUser]);

  useLayoutEffect(() => {
    const pathname =
      location.pathname.endsWith("/") && location.pathname.length > 1
        ? location.pathname.slice(0, -1)
        : location.pathname;

    // Nav 띄우는 PATH
    const hasNav = [
      HOME,
      NOVEL,
      LOGIN,
      SIGNUP,
      CARTOON,
      WORKLIST,
      SERIES,
      MY,
      MODIFYINFO,
    ].includes(pathname);
    // Footer 띄우는 PATH
    const hasFooter = [HOME, NOVEL, CARTOON, WORKLIST, SERIES].includes(
      pathname
    );
    setHasNav(hasNav);
    setHasFooter(hasFooter);
  }, [location.pathname, auth.currentUser]);

  return (
    <div
      className={`relative min-h-[100vh] ${hasNav ? `pt-36` : ``} ${
        hasFooter ? `pb-64` : ``
      }`}
    >
      <header>{hasNav && <GNB />}</header>
      <div className="w-full h-full">{RoutesComponent}</div>
      <footer>{hasFooter && <Footer />}</footer>
    </div>
  );
}

export default App;
