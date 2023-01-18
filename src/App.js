import './Style.scss';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Main from './components/Main'
import Contact from './components/Contact'
import Write from './components/Write'
import ReducerContext from './ReducerContext';

function App() {
  return (
    <ReducerContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/write" element={<Write/>}/>
        </Routes>
      </BrowserRouter>
    </ReducerContext>
  );
}

export default App;
