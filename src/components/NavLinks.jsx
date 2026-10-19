const NavLinks = () => {
  return (
    <div className="flex gap-3 text-neutral-600 ">
      <h4 className="cursor-pointer hover:text-neutral-800 duration-700">
        Home
      </h4>
      <h4 className="cursor-pointer hover:text-neutral-800 duration-700">
        About
      </h4>
      <h4 className="cursor-pointer hover:text-neutral-800 duration-700">
        Product
      </h4>
      <h4 className="cursor-pointer hover:text-neutral-800 duration-700">
        Services
      </h4>
    </div>
  );
};

export default NavLinks;
