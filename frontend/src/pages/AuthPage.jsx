import { useState } from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import ChefForm from "../components/auth/ChefForm";
import logo from "../assets/logo.png";

function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-96">
    
        <div className="flex justify-center mb-6">
          <img
            src={logo} 
            alt="Bingeats Logo"
            className="h-16 w-auto rounded-lg"
          />
        </div>

        <div className="flex justify-between mb-6">
          {["login", "register", "chef"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-1/3 py-2 font-semibold capitalize ${
                activeTab === tab
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } ${
                tab === "login"
                  ? "rounded-l-lg"
                  : tab === "chef"
                  ? "rounded-r-lg"
                  : ""
              }`}
            >
              {tab === "chef" ? "Become Chef" : tab}
            </button>
          ))}
        </div>

        {activeTab === "login" && <LoginForm />}
        {activeTab === "register" && <RegisterForm />}
        {activeTab === "chef" && <ChefForm />}
      </div>
    </div>
  );
}

export default AuthPage;