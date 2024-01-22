import { ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';

import {
  LoginPresentation,
  PageNotFoundPresentation,
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
    </Routes>
  );
};

export default Router;
