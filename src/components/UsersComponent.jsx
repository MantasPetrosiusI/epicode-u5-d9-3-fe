import axios from "axios"
import { useState, useEffect } from "react"
import { Alert, Container, Row, Table } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const UsersComponent = () => {
  const [users, setUsers] = useState([])
  const [error, setError] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios("http://localhost:3001/users", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        toast("Users list loaded successfully 💪", { autoClose: 1000 })
        setUsers(data)
        setError("")
      } catch (error) {
        console.log(error)
        toast.error(error.message)
        navigate("/login")
      }
    }

    fetchData()
  }, [navigate])

  return (
    <Container>
      <Row className="justify-content-center mt-3">
        {error && <Alert variant="danger">{error}</Alert>}
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Address</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  )
}

export default UsersComponent
