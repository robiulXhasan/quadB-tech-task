import { Container } from "react-bootstrap";
import Banner from "../components/banner";
import Show from "../components/Show";
import useShows from "../hooks/useShows";
import { Helmet } from "react-helmet-async";

const Shows = () => {
  const shows = useShows();
  return (
    <div>
      <Helmet>
        <title>BookMyShow | Shows </title>
      </Helmet>
      <Banner length={shows.length} />
      <Container>
        <div className="row row-cols-md-2 g-4 my-5">
          {shows.map((show) => (
            <Show show={show} key={show.show.id}></Show>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Shows;
