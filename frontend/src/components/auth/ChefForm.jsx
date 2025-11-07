import { useState } from "react";

function ChefForm() {
  const [profileImage, setProfileImage] = useState(null);
  const [kitchenImages, setKitchenImages] = useState([]);

  // Handle profile photo upload
  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  // Handle multiple kitchen image uploads
  const handleKitchenImagesChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 4); // Limit to 4 images
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setKitchenImages(imageUrls);
  };

  return (
    <form className="flex flex-col">
      <input
        type="text"
        placeholder="Full Name"
        className="border p-2 mb-3 rounded-md"
      />
      <input
        type="email"
        placeholder="Email"
        className="border p-2 mb-3 rounded-md"
      />
      <input
        type="text"
        placeholder="Mobile Number"
        className="border p-2 mb-3 rounded-md"
      />
      <input
        type="text"
        placeholder="Address"
        className="border p-2 mb-3 rounded-md"
      />
      <input
        type="text"
        placeholder="Speciality (e.g. North Indian, Italian)"
        className="border p-2 mb-3 rounded-md"
      />
      <input
        type="number"
        placeholder="Year of Experience"
        className="border p-2 mb-3 rounded-md"
      />
      <textarea
        placeholder="Give a brief description about you"
        className="border p-2 mb-3 rounded-md"
      />

      {/* Profile Photo Upload */}
      <label className="font-medium mb-1 text-gray-700">Profile Photo</label>
      <input
        type="file"
        accept="image/*"
        className="border p-2 mb-3 rounded-md"
        onChange={handleProfileChange}
      />

      {/* Profile Preview */}
      {profileImage && (
        <div className="mb-3 flex justify-center">
          <img
            src={profileImage}
            alt="Profile Preview"
            className="w-24 h-24 object-cover rounded-full border"
          />
        </div>
      )}

      {/* Kitchen Photos Upload */}
      <label className="font-medium mb-1 text-gray-700">
        Upload Kitchen Images (up to 4)
      </label>
      <input
        type="file"
        accept="image/*"
        multiple
        className="border p-2 mb-3 rounded-md"
        onChange={handleKitchenImagesChange}
      />

      {/* Kitchen Previews */}
      {kitchenImages.length > 0 && (
        <div className="grid grid-cols-2 gap-3 mb-3">
          {kitchenImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Kitchen ${index + 1}`}
              className="w-full h-24 object-cover rounded-md border"
            />
          ))}
        </div>
      )}

      <button className="bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">
        Submit for Review
      </button>
    </form>
  );
}

export default ChefForm;
