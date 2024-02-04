import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import Home from './Pages/Home/Home';
import Deposit from './Pages/Deposit/Deposit';
import Withdraw from './Pages/Withdraw/Withdraw';
import Transfer from './Pages/Transfer/Transfer';
import Statement from './Pages/Statement/Statement';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route exact path='/' element={<Login />}>
      </Route>
      </Routes>
      <Routes>
      <Route exact path='login' element={<Login />}>
      </Route>
      </Routes>
      <Routes>
      <Route exact path='register' element={<Registration />}>
      </Route>
      </Routes>
      <Routes>
      <Route exact path='home' element={<Home />}>
      </Route>
      </Routes>
      <Routes>
      <Route exact path='deposit' element={<Deposit />}>
      </Route>
      </Routes>
      <Routes>
      <Route exact path='withdraw' element={<Withdraw />}>
      </Route>
      </Routes>
      <Routes>
      <Route exact path='transfer' element={<Transfer />}>
      </Route>
      </Routes>
      <Routes>
      <Route exact path='statement' element={<Statement />}>
      </Route>
      </Routes>
      </Router>
     </div>
  );
}

export default App;
