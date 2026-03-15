const Header = () => {
  return (
    <header className="w-full bg-black text-white h-40 flex items-center justify-center shadow-xl">
      <div className="flex gap-24 text-5xl font-bold">

        <h1 className="cursor-pointer hover:text-gray-300 transition">
          Home
        </h1>

        <h1 className="cursor-pointer hover:text-gray-300 transition">
          Contact
        </h1>

        <h1 className="cursor-pointer hover:text-gray-300 transition">
          About
        </h1>

        <h1 className="cursor-pointer hover:text-gray-300 transition">
          Footer
        </h1>

      </div>
    </header>
  );
};

export default Header;