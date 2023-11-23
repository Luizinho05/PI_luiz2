import Rotas from './routes'
import AuthProvider from './Context/authContext'
import { ToastContainer } from "react-toastify";
import './App.scss'

function App() {
  return (
    <AuthProvider>
    <div>
      <Rotas />
      <ToastContainer
      position="top-center"
      autoClose={2200}
      theme='colored'
      />
    </div>
    </AuthProvider>
  );
}

export default App;