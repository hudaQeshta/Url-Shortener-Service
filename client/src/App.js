import { BrowserRouter as Router, Route } from "react-router-dom";
import UrlForm from "./components/UrlForm";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <Router>
      <Route path="/" component={UrlForm} exact />
      <Route path="/login" component={LoginForm} exact />
      <Route path="/register" component={RegisterForm} exact />
    </Router>
  );
}

export default App;
