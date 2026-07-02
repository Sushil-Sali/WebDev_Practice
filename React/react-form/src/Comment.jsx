import { useState } from "react";

export default function Comment() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 1,
  });
  let handleInput = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      username: "",
      remarks: "",
      rating: 1,
    });
  };
  return (
    <div>
      <h2>Give A Remarks</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"> UserName </label>
        <input
          type="text"
          placeholder="Enter usename"
          name="username"
          value={formData.username}
          onChange={handleInput}
        />
        <br />
        <br />
        <label htmlFor="remarks"> Remarks </label>
        <textarea
          name="remarks"
          id="remarks"
          placeholder="remarks"
          value={formData.remarks}
          onChange={handleInput}
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating"> Rating </label>
        <input
          type="number"
          name="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInput}
        />
        <br />
        <br />
        <button>Add Comment !</button>
      </form>
    </div>
  );
}
