import { Navigate } from "react-router-dom";

import { useAppSelector } from "../../../hooks/redux.hooks";

type Props = {
  children: React.ReactNode;
};

const RequireAuth = ({ children }: Props) => {
  const { isLoggedIn } = useAppSelector((state) => state.userStore);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export { RequireAuth };
