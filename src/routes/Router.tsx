import { FC, ReactNode, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainLayout, PrivateRoute } from '@/components';
import { getUserInfo } from '@/flux/modules/user/actions';
import { useAppDispatch } from '@/hook/store';
import {
  HomePresentation,
  LoginPresentation,
  PageNotFoundPresentation,
} from '@/presentation';
import { isAuthenticated } from '@/utils/services/auth';

type RenderMultiRoutesPayload = {
  element: ReactNode;
  paths: string[];
};

const Router: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthenticated()) {
      dispatch(getUserInfo.request());
    }
  }, []);

  const renderMultiRoutes = ({
    element: Element,
    paths,
    ...rest
  }: RenderMultiRoutesPayload) =>
    paths.map((path: string) => (
      <Route key={path} path={path} {...rest} element={Element} />
    ));

  return (
    <Routes>
      <Route path="*" element={<PageNotFoundPresentation />} />

      {renderMultiRoutes({
        paths: ['/', '/sign'],
        element: <LoginPresentation />,
      })}

      <Route
        path="/home"
        element={
          <PrivateRoute>
            <MainLayout>
              <HomePresentation />
            </MainLayout>
          </PrivateRoute>
        }
      />

      {renderMultiRoutes({
        paths: [
          '/alunos',
          '/pais',
          '/funcionarios',
          '/funcionarios',
          '/relatorios',
        ],
        element: (
          <PrivateRoute>
            <MainLayout>
              <div>Página em construção...</div>
            </MainLayout>
          </PrivateRoute>
        ),
      })}
    </Routes>
  );
};

export default Router;
