import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="w-full h-10 bg-neutral-200 px-2 flex items-center justify-between">
      <h1>MOHIT</h1>
      <NavLinks />
    </div>
  );
};

export default Navbar;
