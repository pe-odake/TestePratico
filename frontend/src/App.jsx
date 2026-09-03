import './styles/App.css';
import AppRouters from './routes/AppRouters.jsx';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
      <AppRouters /> 
    </BrowserRouter>
  )
}

export default App