import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Banner from "../components/banner";

const Users = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      <Banner length={users.length} />
      <Container>
        <h2 className="text-center">Total User: {users.length}</h2>
      </Container>
    </div>
  );
};

export default Users;
