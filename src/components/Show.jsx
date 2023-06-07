import React from "react";
import { Link } from "react-router-dom";

const Show = ({ show }) => {
  const { name, image, genres, language, averageRuntime, schedule, rating, id } = show.show;
  return (
    <div className="col">
      <div className="card px-0 ">
        <div className="row g-2 align-items-center">
          <div className="col-md-4 text-center ">
            <img src={image.medium} className="img-fluid rounded-start " alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Show Name: {name}</h5>
              <div className="card-text">
                <div className="d-flex">
                  <p className="mb-1 flex-grow-1">Language: {language}</p>

                  <p className="mb-1">Rating: </p>
                  {rating.average ? (
                    <span className="text-danger fw-bold ms-2"> {rating?.average}</span>
                  ) : (
                    <span>N/A</span>
                  )}
                </div>
                <div>
                  Genres:
                  <ul className="mb-0">
                    {genres.map((data, index) => (
                      <li key={index}> {data}</li>
                    ))}
                  </ul>
                </div>
                <p>
                  Schedule:{" "}
                  {schedule.time ? (
                    <span className="text-danger fw-bold">
                      {schedule.time},{" "}
                      {schedule.days.map((day, index) => (
                        <span key={index}>{day} </span>
                      ))}
                    </span>
                  ) : (
                    <></>
                  )}
                </p>
              </div>
              <Link to={`/summary/${id}`} className="btn btn-danger">
                Show Summary
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
