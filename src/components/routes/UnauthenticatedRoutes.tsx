import NovelHomePage from "@components/novel/NovelHomePage";
import NovelListPage from "@components/novel/works/NovelListPage";
import NovelSeriesListPage from "@components/novel/series/NovelSeriesListPage";
import LoginPage from "@components/users/login/LoginPage";
import SignupPage from "@components/users/signup/SignupPage";
import Path from "@utils/routes/Path";
import { Navigate, Route, Routes } from "react-router-dom";
import NovelViewPage from "@components/novel/view/NovelViewPage";

const UnauthenticatedRoutes = () => {
  const {
    CARTOON,
    HOME,
    LOGIN,
    NOVEL,
    SIGNUP,
    NOVEL_WORKLIST,
    SERIES,
    VIEWER,
  } = Path;

  return (
    <Routes>
      <Route path={HOME} element={<NovelHomePage />} />
      <Route path={NOVEL} element={<NovelListPage />} />
      <Route path={CARTOON} element={<NovelHomePage />} />
      <Route path={NOVEL_WORKLIST} element={<NovelListPage />} />
      <Route path={SERIES} element={<NovelSeriesListPage />} />
      <Route path={VIEWER} element={<NovelViewPage />} />
      <Route path={LOGIN} element={<LoginPage />} />
      <Route path={SIGNUP} element={<SignupPage />} />
      <Route path="*" element={<Navigate replace to={HOME} />} />
    </Routes>
  );
};

export default UnauthenticatedRoutes;
