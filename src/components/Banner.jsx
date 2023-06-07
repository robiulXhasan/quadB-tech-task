import Summary from "../pages/Summary";

const Banner = ({ length }) => {
  return (
    <div className="Banner img-fluid bg-image">
      <div className="overlay"></div>
      <div className="d-flex align-items-center vh-50">
        <div className="container text-center text-white">
          <h2 className="mt-5 fw-bold">
            {length ? <span>Total Shows: {length}</span> : <span>Show Summary</span>}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
