import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import IndexView from './views/IndexView';
import CreateView from './views/CreateView';
import DetailView from './views/DetailView';
import EditView from './views/EditView';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

function App(){
  return (
      <div>
      <Router>
        <IndexView path='/' />
        <CreateView path='/create' />
        <DetailView path="/:id" />
        <EditView path="/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
