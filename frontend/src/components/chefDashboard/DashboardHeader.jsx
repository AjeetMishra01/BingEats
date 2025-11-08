import { UserCircle } from "lucide-react";
import userIcon from "../../assets/userIcon.png";

function DashboardHeader() {
  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold text-orange-500">Swaad</h1>
      <div className="flex items-center space-x-2 cursor-pointer">
        <img
          src={userIcon}
          alt="Chef Profile"
          className="w-10 h-10 rounded-full border"
        />
        <UserCircle size={28} className="text-gray-700" />
      </div>
    </header>
  );
}

export default DashboardHeader;
