const Footer = () => {
  return (
    <footer className="flex min-h-24 w-screen items-center justify-between gap-5 border-t border-t-slate-300 p-10 text-xs lg:text-sm">
      <div className="flex flex-col text-nowrap lg:flex-row">
        <p className="flex gap-1">
          © Copyright <span className="font-semibold">Akeshya</span>.
        </p>
        <p>All Rights Reserved</p>
      </div>
      <div className="flex gap-2 text-darkblue lg:gap-5">
        <p className="cursor-pointer duration-500 hover:text-lightblue">
          Terms and Conditions
        </p>
        <p className="cursor-pointer duration-500 hover:text-lightblue">
          Refund policy
        </p>
        <p className="cursor-pointer duration-500 hover:text-lightblue">
          Privacy policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
