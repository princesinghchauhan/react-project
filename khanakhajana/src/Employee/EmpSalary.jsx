import {Table} from 'react-bootstrap';
function EmpSalary(){
return(
    <>
    <h2>Account Department</h2>
    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Arti</td>
      <td>Pandit</td>
      <td>Rs. 50,000</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Rohit</td>
      <td>Singh</td>
      <td>Rs. 25,000</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Lucky</td>
      <td>Singh</td>
      <td>Rs. 40,000</td>
    </tr>
  </tbody>
</Table>
    </>
)
}
export default EmpSalary;