import { useState } from "react";
import { PlusCircle } from "lucide-react";
import DashboardHeader from "./DashboardHeader";
import AddDishModal from "./AddDishModal";

function ChefDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dishes, setDishes] = useState([]);

  const handleAddDish = (newDish) => {
    setDishes([...dishes, newDish]);
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      <DashboardHeader />

      <div className="p-6 text-gray-700">
        <h2 className="text-xl font-semibold mb-4">Your Dishes</h2>

        {dishes.length === 0 ? (
          <p className="text-gray-500">Once you upload dishes, they’ll appear here 🍽️</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {dishes.map((dish, index) => (
              <div key={index} className="bg-white shadow-md p-4 rounded-lg">
                {dish.image && (
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-40 object-cover rounded-md mb-2"
                  />
                )}
                <h3 className="text-lg font-semibold">{dish.name}</h3>
                <p className="text-sm text-gray-600 capitalize">
                  Type: {dish.type}
                </p>
                <p className="text-sm mt-1">{dish.details}</p>
                <p className="mt-2 font-semibold text-orange-600">
                  ₹{dish.price}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition"
      >
        <PlusCircle size={28} />
      </button>

      <AddDishModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddDish={handleAddDish}
      />
    </div>
  );
}

export default ChefDashboard;
