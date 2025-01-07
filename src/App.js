import './App.css';
import { BrowserRouter, useRoutes } from "react-router-dom";
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/SwastikPortfolio', element: <HomePage /> },
    { path: '*', element: <PageNotFound /> },
  ]);

  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
