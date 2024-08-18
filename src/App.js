import './App.css';
import { Routes, Route, BrowserRouter, useRoutes } from "react-router-dom";
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/Home', element: <HomePage /> },
    { path: '*', element: <PageNotFound /> },
    // { path: '/about', element: <About /> },
    // add more routes here
  ]);

  return routes;
};

function App() {
  return (

      <>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>

        {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes> */}
      </>
  );
}

// const HomePage = () => <h2>Home</h2>;
// const About = () => <h2>About</h2>;

export default App;
