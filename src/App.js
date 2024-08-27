// import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Layout/>
    </div>
  );
}

export default App;
