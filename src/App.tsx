import { useLayoutEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/common/Footer";
import GNB from "./components/common/GNB";
import HomePage from "./components/home/HomePage";
import Path from "./utils/routes/Path";

function App() {
  const location = useLocation();
  const { HOME, LOGIN, NOVEL, SIGNUP, CARTOON, WORKLIST } = Path;

  const [hasNav, setHasNav] = useState<boolean>(false);
  const [hasFooter, setHasFooter] = useState<boolean>(false);
  useLayoutEffect(() => {
    const pathname =
      location.pathname.endsWith("/") && location.pathname.length > 1
        ? location.pathname.slice(0, -1)
        : location.pathname;

    const hasNav = [HOME, NOVEL, LOGIN, SIGNUP, CARTOON, WORKLIST].includes(
      pathname
    );
    setHasNav(hasNav);
    const hasFooter = [HOME, NOVEL, LOGIN, SIGNUP, CARTOON, WORKLIST].includes(
      pathname
    );
    setHasFooter(hasFooter);
  }, [location.pathname]);

  return (
    <div className="pt-28 pb-64 relative min-h-[100vh]">
      {hasNav && <GNB />}
      <div className="w-full min-h-[100%] px-16 py-8">
        <Routes>
          <Route path={HOME} element={<HomePage />} />
          <Route path={NOVEL} element={<HomePage />} />
          <Route path={CARTOON} element={<HomePage />} />
          <Route path={WORKLIST} element={<HomePage />} />
          <Route path={LOGIN} element={<HomePage />} />
          <Route path={SIGNUP} element={<HomePage />} />
          <Route path="*" element={<Navigate replace to={HOME} />} />
        </Routes>
      </div>
      {hasFooter && <Footer />}
    </div>
  );
}

export default App;
