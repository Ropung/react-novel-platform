import NovelHomePage from "@components/novel/NovelHomePage";
import NovelWorkListPage from "@components/novel/works/NovelWorkListPage";
import NovelSeriesListPage from "@components/novel/series/NovelSeriesListPage";
import Path from "@utils/routes/Path";
import { Navigate, Route, Routes } from "react-router-dom";
import NovelViewPage from "@components/novel/view/NovelViewPage";

const ProtectedRoutes = () => {
  const { CARTOON, HOME, NOVEL, WORKLIST, SERIES, VIEWER } = Path;

  return (
    <Routes>
      <Route path={HOME} element={<NovelHomePage />} />
      <Route path={NOVEL} element={<NovelWorkListPage />} />
      <Route path={CARTOON} element={<NovelHomePage />} />
      <Route path={WORKLIST} element={<NovelWorkListPage />} />
      <Route path={SERIES} element={<NovelSeriesListPage />} />
      <Route path={VIEWER} element={<NovelViewPage />} />
      <Route path="*" element={<Navigate replace to={HOME} />} />
    </Routes>
  );
};

export default ProtectedRoutes;
