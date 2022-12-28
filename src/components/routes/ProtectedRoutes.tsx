import HomePage from "@components/home/HomePage";
import NovelPage from "@components/novel/NovelPage";
import SignupPage from "@components/users/signup/SignupPage";
import Path from "@utils/routes/Path";
import { Navigate, Route, Routes } from "react-router-dom";

const ProtectedRoutes = () => {
  const { CARTOON, HOME, NOVEL, WORKLIST } = Path;

  return (
    <Routes>
      <Route path={HOME} element={<HomePage />} />
      <Route path={NOVEL} element={<NovelPage />} />
      <Route path={CARTOON} element={<HomePage />} />
      <Route path={WORKLIST} element={<HomePage />} />
      <Route path="*" element={<Navigate replace to={HOME} />} />
    </Routes>
  );
};

export default ProtectedRoutes;
