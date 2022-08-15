import "./App.css";
import { useAuth } from "./hook/UseAuth";
import { Private } from "./Private";
import { Login } from "./pages/login/Login";

function App() {
    const { token } = useAuth();

    if (token) {
      return <Private />;
    }
    return <Login />;
}
export default App;
