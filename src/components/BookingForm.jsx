import React from "react";
import { useParams, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import useShows from "../hooks/useShows";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const BookingForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { id } = useParams();

  const shows = useShows();

  const data = shows?.find((show) => show.show.id == id);
  const onSubmit = (data) => {
    const userDetails = data;
    const userDetailsString = JSON.stringify(userDetails);
    localStorage.setItem("userDetails", userDetailsString);
    reset();
    Swal.fire({
      title: "Success!",
      text: "Successfully Booked Ticket!!",
      icon: "success",
      confirmButtonText: "Ok",
    });
  };
  return (
    <div className="container py-5">
      <Helmet>
        <title>BookMyShow | Book Ticket</title>
      </Helmet>
      <div className="mb-2">
        <Link to="/">Back to All Shows</Link>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white border p-5 rounded  shadow">
        <h3 className="text-center"> Book Tickets</h3>
        <div className="mb-3">
          <label className="form-label">Your name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter your name"
            {...register("name", { required: true })}
          />
          {errors.name?.type === "required" && (
            <p className="text-danger" role="alert">
              Name is required
            </p>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="Enter your phone number"
            {...register("phone", { required: true })}
          />
          {errors.phone?.type === "required" && (
            <p className="text-danger" role="alert">
              Phone number is required
            </p>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Movie name</label>
          <input
            type="text"
            name="movie"
            defaultValue={data?.show?.name}
            className="form-control"
            {...register("movie", { required: true })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Schedule</label>
          <div className="d-flex gap-3">
            <input
              type="text"
              name="time"
              defaultValue={data?.show?.schedule.time}
              className="form-control"
              {...register("time", { required: true })}
            />
            <input
              type="text"
              name="days"
              defaultValue={data?.show?.schedule.days[0]}
              className="form-control"
              {...register("days", { required: true })}
            />
          </div>
        </div>

        <input type="submit" className="btn btn-danger w-100 fw-bold p-2" value="Book Now!" />
      </form>
    </div>
  );
};

export default BookingForm;
