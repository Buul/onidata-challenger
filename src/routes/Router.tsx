import { ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainLayout, PrivateRoute } from '@/components';
import {
  LoginPresentation,
  PageNotFoundPresentation,
  ProductFormPresentation,
  ProductsPresentation,
  ProductViewPresentation,
  RegisterPresentation,
} from '@/presentation';

type RenderMultiRoutesPayload = {
  element: ReactNode;
  paths: string[];
};

const Router: React.FC = () => {
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
      <Route path="/registrar" element={<RegisterPresentation />} />
      {renderMultiRoutes({
        paths: ['/', '/sign'],
        element: <LoginPresentation />,
      })}

      <Route
        path="/produtos"
        element={
          <PrivateRoute>
            <MainLayout>
              <ProductsPresentation />
            </MainLayout>
          </PrivateRoute>
        }
      />

      <Route
        path="/adicionar-produto"
        element={
          <PrivateRoute>
            <MainLayout>
              <ProductFormPresentation />
            </MainLayout>
          </PrivateRoute>
        }
      />

      <Route
        path="/editar-produto"
        element={
          <PrivateRoute>
            <MainLayout>
              <ProductFormPresentation />
            </MainLayout>
          </PrivateRoute>
        }
      />

      <Route
        path="/visualizar-produto"
        element={
          <PrivateRoute>
            <MainLayout>
              <ProductViewPresentation />
            </MainLayout>
          </PrivateRoute>
        }
      />

      {renderMultiRoutes({
        paths: ['/home', '/configuracoes', '/usuarios'],
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
