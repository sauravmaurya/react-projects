import { Container } from "react-bootstrap"
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login"
import PrivateRoutes from "./PrivateRoutes";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        < div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Routes>
                < Route element={<PrivateRoutes />}>
                  <Route path='/' element={<Dashboard />}></Route>
                  <Route path='/update-profile' element={<UpdateProfile />} />
                </Route>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </AuthProvider >
  );
}

export default App;
