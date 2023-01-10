import { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./components/common/Footer";
import GNB from "./components/common/GNB";
import { auth } from "@utils/firebase";
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
    NOVEL_WORKLIST,
    SERIES,
    MY,
    MODIFYINFO,
    MANAGEMENTLIST,
    MANAGE_ADD,
    MANAGE_HOME,
    EVENT,
    VIEWER,
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
      NOVEL_WORKLIST,
      SERIES,
      MY,
      MODIFYINFO,
      MANAGE_HOME,
      MANAGEMENTLIST,
      MANAGE_ADD,
      EVENT,
    ].includes(pathname);

    // Footer 띄우는 PATH
    const hasFooter = [
      HOME,
      NOVEL,
      CARTOON,
      NOVEL_WORKLIST,
      SERIES,
      EVENT,
      MANAGE_HOME,
      MANAGEMENTLIST,
      MANAGE_ADD,
      MY,
    ].includes(pathname);
    setHasNav(hasNav);
    setHasFooter(hasFooter);
  }, [location.pathname, auth.currentUser]);

  return (
    <div
      className={`w-full h-full ${hasNav ? `pt-36` : ``}
      }`}
    >
      <header>{hasNav && <GNB />}</header>
      <main
        className={`w-full flex flex-1 flex-col justify-center ${
          location.pathname === VIEWER ? `` : `py-8`
        }`}
      >
        <div className={`w-full h-full`}>{RoutesComponent}</div>
      </main>
      <footer
        className="w-full h-fit flex items-end border-footer-contra
 bg-footer"
      >
        {hasFooter && <Footer />}
      </footer>
    </div>
  );
}

export default App;
