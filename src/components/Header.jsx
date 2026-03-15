const Header = () => {
  return (
    
    <nav className="w-full bg-zinc-900 py-16 flex justify-center items-center shadow-2xl">
      <div className="flex gap-20">
        <h1 className="text-5xl font-bold text-white cursor-pointer hover:text-blue-400 transition">Home</h1>
        <h1 className="text-5xl font-bold text-white cursor-pointer hover:text-blue-400 transition">Contact</h1>
        <h1 className="text-5xl font-bold text-white cursor-pointer hover:text-blue-400 transition">About</h1>
        <h1 className="text-5xl font-bold text-white cursor-pointer hover:text-blue-400 transition">Footer</h1>
      </div>
    </nav>
  );
};

export default Header;