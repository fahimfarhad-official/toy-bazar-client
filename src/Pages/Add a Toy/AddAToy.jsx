import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import useTitle from "../../Hooks/useTitle";

const AddAToy = () => {
  const {user} = useContext(AuthContext);
  useTitle('Add Toy')
  const [imageUrl, setPictureUrl] = useState("");
  const [toyName, setToyName] = useState("");
  const [seller, setSellerName] = useState(user.displayName);
  const [sellerEmail, setSellerEmail] = useState(user.email);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [quantity, setQuantity] = useState("");
  const [details, setDescription] = useState("");




  const handleSubmit = (e) => {
    e.preventDefault();

    const newToy = {
      toyName,
      seller,
      sellerEmail,
      imageUrl,
      category,
      price,
      rating,
      details,
      quantity,
    };
    console.log(newToy);
    // Perform form submission logic here
    // You can access all the form fields' values here
    Swal.fire({
      title: "Success!",
      text: "User Added Successfully!",
      icon: "success",
      confirmButtonText: "Ok",
    });
    e.target.reset();
    //   send data to the server
    fetch("https://toy-bazar-server.vercel.app/addtoys", {
      // fetch("http://localhost:3000/mytoys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };


  return (
    <div className="container mx-auto p-4 ">
      <h2 className="text-2xl font-bold mb-4 text-center">Add A Toy</h2>
      <form onSubmit={handleSubmit}>
        <div className="card-body px-10 bg-base-200 rounded-xl">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="mb-4">
              <label htmlFor="imageUrl" className="block font-bold mb-1">
                Picture URL:
              </label>
              <input
                type="text"
                id="imageUrl"
                value={imageUrl}
                onChange={(e) => setPictureUrl(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="toyName" className="block font-bold mb-1">
                Toy Name:
              </label>
              <input
                type="text"
                id="toyName"
                value={toyName}
                onChange={(e) => setToyName(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="seller" className="block font-bold mb-1">
                Seller Name:
              </label>
              <input
                type="text"
                id="seller"
                defaultValue={user.displayName}
                // onChange={(e) => setSellerName(e.target.defaultValue)}
                className="input input-bordered w-full"
                readOnly
              />
            </div>

            <div className="mb-4">
              <label htmlFor="sellerEmail" className="block font-bold mb-1">
                Seller Email:
              </label>
              <input
                type="email"
                id="sellerEmail"
                defaultValue={user.email}
                // onChange={(e) => setSellerEmail(e.target.defaultValue)}
                readOnly
                className="input input-bordered w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subcategory" className="block font-bold mb-1">
                Category:
              </label>
              <input
                type="text"
                id="subcategory"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="price" className="block font-bold mb-1">
                Price:
              </label>
              <input
                type="text"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="rating" className="block font-bold mb-1">
                Rating:
              </label>
              <input
                type="text"
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="quantity" className="block font-bold mb-1">
                Available Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="w-full px-20">
            <label htmlFor="details" className="block font-bold mb-1">
              Description:
            </label>
            <textarea
              id="details"
              value={details}
              onChange={(e) => setDescription(e.target.value)}
              className="input input-bordered w-full"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 mt-5 text-white px-4 py-2 w-full rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAToy;
