import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Landing from "./screens/LandingPage/Landing";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} exact />
          <Route path="/login" element={<LoginScreen />} exact />
          <Route path="/register" element={<RegisterScreen />} exact />
          <Route path="/mynotes" element={<MyNotes />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
