import { useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./components/common/Footer";
import GNB from "./components/common/GNB";
import { db } from "@utils/firebase";
import "firebase/firestore";
import Path from "./utils/routes/Path";
import { signUp } from "@utils/firebase/user";
import UnauthenticatedRoutes from "@components/routes/UnauthenticatedRoutes";
import ProtectedRoutes from "@components/routes/ProtectedRoutes";

function App() {
  const location = useLocation();
  const { HOME, LOGIN, NOVEL, SIGNUP, CARTOON, WORKLIST } = Path;

  const [hasNav, setHasNav] = useState<boolean>(false);
  const [hasFooter, setHasFooter] = useState<boolean>(false);
  const [RoutesComponent, setRoutesComponent] =
    useState<React.ReactElement | null>(null);

  // FIXME 임시 Auth
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    isAuthenticated && setRoutesComponent(<ProtectedRoutes />);
    !isAuthenticated && setRoutesComponent(<UnauthenticatedRoutes />);
  }, [isAuthenticated]);

  useLayoutEffect(() => {
    const pathname =
      location.pathname.endsWith("/") && location.pathname.length > 1
        ? location.pathname.slice(0, -1)
        : location.pathname;

    const hasNav = [HOME, NOVEL, LOGIN, SIGNUP, CARTOON, WORKLIST].includes(
      pathname
    );
    setHasNav(hasNav);
    const hasFooter = [HOME, NOVEL, CARTOON, WORKLIST].includes(pathname);
    setHasFooter(hasFooter);
  }, [location.pathname]);

  useLayoutEffect(() => {
    signUp("abc123@naver.com", "1234")
      .then((result) => console.log(result))
      .catch(console.error);
  }, []);

  return (
    <div
      className={` relative min-h-[100vh] ${hasNav ? `pt-28` : ``} ${
        hasFooter ? `pb-64` : ``
      }`}
    >
      <header>{hasNav && <GNB />}</header>
      <div className="w-full min-h-[100%]">{RoutesComponent}</div>
      <footer>{hasFooter && <Footer />}</footer>
    </div>
  );
}

export default App;
