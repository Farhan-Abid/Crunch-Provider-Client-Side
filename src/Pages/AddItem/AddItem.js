import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const url = `https://limitless-thicket-44655.herokuapp.com/products`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div className="w-50 mx-auto">
      <h3>Please add a service</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
        <input
          className="mb-3"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          className="mb-3"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mb-3"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-3"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <input type="submit" value="Add Product" />
      </form>
    </div>
  );


};

export default AddItem;