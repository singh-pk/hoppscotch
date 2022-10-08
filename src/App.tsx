import { useEffect } from 'react';

import { Routes, Route, useNavigate } from 'react-router-dom';

import Header from 'components/Header';

import { ROUTES } from 'utils';

import './App.scss';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === '/') {
      navigate('/table');
    }
  }, []);

  return (
    <div className='app'>
      <Header />

      <Routes>
        {ROUTES.map(({ path, element: Element }) => (
          <Route path={path} element={<Element />} key={path} />
        ))}

        <Route path='*' element={<div>404 Page Not Found</div>} />
      </Routes>
    </div>
  );
};

export default App;
