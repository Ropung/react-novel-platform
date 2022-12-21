import { useLayoutEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import GNB from "./components/common/GNB";
import HomePage from "./components/home/HomePage";
import Path from "./utils/routes/Path";

function App() {
  const location = useLocation();
  const { HOME, LOGIN, NOVEL, SIGNUP } = Path;

  const [hasNav, setHasNav] = useState<boolean>(false);

  useLayoutEffect(() => {
    const pathname =
      location.pathname.endsWith("/") && location.pathname.length > 1
        ? location.pathname.slice(0, -1)
        : location.pathname;

    const hasNav = [HOME, NOVEL, LOGIN, SIGNUP].includes(pathname);
    setHasNav(hasNav);
  }, [location.pathname]);

  return (
    <div className="pt-32">
      {hasNav && <GNB />}
      <Routes>
        <Route path={HOME} element={<HomePage />} />
        <Route path={NOVEL} element={<HomePage />} />
        <Route path={LOGIN} element={<HomePage />} />
        <Route path={SIGNUP} element={<HomePage />} />
        <Route path="*" element={<Navigate replace to={HOME} />} />
      </Routes>
    </div>
  );
}

export default App;
