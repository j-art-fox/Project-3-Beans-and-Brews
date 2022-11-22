import logo from "../../images/Horz-Wht-1024x139.png";

export default function Logo() {
  return (
    <div className="flex flex-shrink-0 items-center">
      <img
        className="block bg-black h-8 w-auto lg:hidden"
        src={logo}
        alt="jrs"
      />
      <img
        className="hidden bg-black h-8 w-auto lg:block"
        src={logo}
        alt="jrs"
      />
    </div>
  );
}
