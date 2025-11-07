function RegisterForm() {
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
        type="password"
        placeholder="Password"
        className="border p-2 mb-4 rounded-md"
      />
      <button className="bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
