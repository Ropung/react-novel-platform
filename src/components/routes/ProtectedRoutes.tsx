import NovelHomePage from "@components/novel/NovelHomePage";
import NovelListPage from "@components/novel/works/NovelListPage";
import NovelSeriesListPage from "@components/novel/series/NovelSeriesListPage";
import Path from "@utils/routes/Path";
import { Navigate, Route, Routes } from "react-router-dom";
import NovelViewPage from "@components/novel/view/NovelViewPage";
import MyPage from "@components/users/my/MyPage";
import ModifyUserInfo from "@components/users/my/\bwidgets/ModifyUserInfo";
import EventPage from "@components/home/event/EventPage";
import ManagementHome from "@components/novel/management/ManagementHome";
import ManagementWorkList from "@components/novel/management/widgets/ManagementWorkList";
import ManagementAdd from "@components/novel/management/widgets/ManagementAdd";

const ProtectedRoutes = () => {
  const {
    CARTOON,
    HOME,
    NOVEL,
    SERIES,
    VIEWER,
    MY,
    MODIFYINFO,
    MANAGEMENTLIST,
    MANAGE_ADD,
    MANAGE_HOME,
    EVENT,
  } = Path;

  return (
    <Routes>
      <Route path={HOME} element={<NovelHomePage />} />
      <Route path={NOVEL} element={<NovelListPage />} />
      <Route path={CARTOON} element={<NovelListPage />} />
      <Route path={SERIES} element={<NovelSeriesListPage />} />
      <Route path={VIEWER} element={<NovelViewPage />} />
      <Route path={MY} element={<MyPage />} />
      <Route path={MODIFYINFO} element={<ModifyUserInfo />} />
      {/* 작품관리 */}
      <Route path={MANAGE_HOME} element={<ManagementHome />} />
      <Route path={MANAGEMENTLIST} element={<ManagementWorkList />} />
      <Route path={MANAGE_ADD} element={<ManagementAdd />} />
      <Route path={EVENT} element={<EventPage />} />
      <Route path="*" element={<Navigate replace to={HOME} />} />
    </Routes>
  );
};

export default ProtectedRoutes;
