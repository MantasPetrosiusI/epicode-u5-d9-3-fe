import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import LoginComponent from "./components/LoginComponent"
import UsersComponent from "./components/UsersComponent"
import HomeComponent from "./components/HomeComponent"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Auth Example</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/users">Users</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="users" element={<UsersComponent />} />
          </Routes>
        </BrowserRouter>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
