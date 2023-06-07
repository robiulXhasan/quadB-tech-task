import { useParams, Link } from "react-router-dom";
import useShows from "../hooks/useShows";
import { Container } from "react-bootstrap";
import Banner from "../components/banner";
import { Helmet } from "react-helmet-async";

const Summary = () => {
  const { id } = useParams();

  const shows = useShows();

  const data = shows?.find((show) => show.show.id == id);

  return (
    <div>
      <Helmet>
        <title>BookMyShow | Show Summary</title>
      </Helmet>
      <Banner />
      <Container>
        <div className="pt-3">
          <Link to="/" className="pt-3">
            All Shows
          </Link>
        </div>

        <div className="w-75 mx-auto mt-3 p-4 rounded border border-2 shadow">
          <div dangerouslySetInnerHTML={{ __html: data?.show?.summary }}></div>
          <p></p>
          <div className="text-center">
            <Link to={`/book/${id}`} className="btn btn-danger px-5 py-2">
              Book a Ticket
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Summary;
