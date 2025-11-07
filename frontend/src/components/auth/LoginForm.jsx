function LoginForm() {
  return (
    <form className="flex flex-col">
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
      <select className="border p-2 mb-4 rounded-md">
        <option value="user">User</option>
        <option value="chef">Chef</option>
      </select>
      <button className="bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
