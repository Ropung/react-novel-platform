import HomePage from "@components/home/HomePage";
import SignupPage from "@components/users/signup/SignupPage";
import Path from "@utils/routes/Path";
import { Navigate, Route, Routes } from "react-router-dom";

const ProtectedRoutes = () => {
  const { CARTOON, HOME, LOGIN, NOVEL, SIGNUP, WORKLIST } = Path;

  return (
    <Routes>
      <Route path={HOME} element={<HomePage />} />
      <Route path={NOVEL} element={<HomePage />} />
      <Route path={CARTOON} element={<HomePage />} />
      <Route path={WORKLIST} element={<HomePage />} />
      <Route path={LOGIN} element={<HomePage />} />
      <Route path={SIGNUP} element={<SignupPage />} />
      <Route path="*" element={<Navigate replace to={HOME} />} />
    </Routes>
  );
};

export default ProtectedRoutes;
