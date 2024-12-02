type Props = {};

function Header({}: Props) {
  return (
    <header className="h-14 py-3 bg-[#002776] text-white flex justify-center items-center space-x-2">
      <img src="/src/assets/globe.png" className="size-6" alt="world icon" />
      <h1 className="text-lg font-sans font-medium">My Travel Journal</h1>
    </header>
  );
}

export default Header;
