import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Layout } from '../components/Layout/Layout';
import { Register } from '../pages/Register/Register';
import { Login } from '../pages/Login/Login';
import { NotFound } from '../pages/NotFound/NotFound';
import { WithAuthRoute } from './withAuth';
import { WithoutAuth } from './withoutAuth';

export function Router(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <WithAuthRoute redirectLink="/">
              <Register />
            </WithAuthRoute>
          }
        />
        <Route
          path="login"
          element={
            <WithAuthRoute redirectLink="/">
              <Login />
            </WithAuthRoute>
          }
        />
        <Route
          path="/"
          element={
            <WithoutAuth redirectLink="/">
              <div>main</div>
            </WithoutAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
