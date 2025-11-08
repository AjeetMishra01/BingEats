import { useState } from "react";

function AddDishModal({ isOpen, onClose, onAddDish }) {
  const [dishName, setDishName] = useState("");
  const [dishType, setDishType] = useState("");
  const [dishDetails, setDishDetails] = useState("");
  const [dishPrice, setDishPrice] = useState("");
  const [dishImage, setDishImage] = useState(null);

  if (!isOpen) return null;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setDishImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dishName || !dishType || !dishPrice)
      return alert("Please fill all required fields!");
    onAddDish({
      name: dishName,
      type: dishType,
      details: dishDetails,
      price: dishPrice,
      image: dishImage,
    });
    // Reset form
    setDishName("");
    setDishType("");
    setDishDetails("");
    setDishPrice("");
    setDishImage(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-orange-500">Add New Dish</h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
          <input
            type="text"
            placeholder="Dish Name"
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
            className="border p-2 rounded-md"
          />
          <select
            value={dishType}
            onChange={(e) => setDishType(e.target.value)}
            className="border p-2 rounded-md"
          >
            <option value="">Select Type</option>
            <option value="veg">Veg</option>
            <option value="non-veg">Non-Veg</option>
          </select>
          <textarea
            placeholder="Dish Details"
            value={dishDetails}
            onChange={(e) => setDishDetails(e.target.value)}
            className="border p-2 rounded-md"
          />
          <input
            type="number"
            placeholder="Price (₹)"
            value={dishPrice}
            onChange={(e) => setDishPrice(e.target.value)}
            className="border p-2 rounded-md"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border p-2 rounded-md"
          />
          {dishImage && (
            <img
              src={dishImage}
              alt="Preview"
              className="w-full h-32 object-cover rounded-md"
            />
          )}

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-3 py-1 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-orange-500 text-white px-3 py-1 rounded-md hover:bg-orange-600"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDishModal;
