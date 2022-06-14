import { Nav } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import EmployeeList from "./Employee/EmployeeList";
import EmpSalary from "./Employee/EmpSalary";

function App() {
    return (<> {< h1 > This is main page </h1>}  <Nav variant="tabs" > <Nav.Item > <
        Nav.Link> <Link to="/" > Home </Link></Nav.Link>
    </Nav.Item>
        <Nav.Item>
            <Nav.Link > <Link to="/salary" > Salary </Link></Nav.Link >
        </Nav.Item> < Nav.Item >
            <Nav.Link> <Link to="/services" > Services </Link></Nav.Link >
        </Nav.Item> <Nav.Item>
            <Nav.Link> <Link to="/contactus" > Contact Us </Link></Nav.Link >
        </Nav.Item> </Nav>

        <Routes>
            <Route path="/" element={< EmployeeList />} />
            <Route path="/Salary" element={< EmpSalary />} />
        </Routes >
    </>

    );
}

export default App;