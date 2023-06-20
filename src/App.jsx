import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout.component';
import Home from './components/home/home.component';
import About from './components/about/about.component';
import SignUp from './components/sign-up/sign-up.component';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='sign-up' element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
