import { FiHome } from "react-icons/fi";
import { BiMoviePlay } from "react-icons/bi";
import { IoIosInformationCircleOutline } from "react-icons/io";

import NavItem from "./NavItem";

function SideBar() {
  const data = [
    {
      label: "Home",
      icon: <FiHome size={30} />,
      active: true,
    },
    {
      label: "Movies",
      icon: <BiMoviePlay size={30} />,
      active: false,
    },
    {
      label: "About",
      icon: <IoIosInformationCircleOutline size={30} />,
      active: false,
    },
  ];
  return (
    <div className="w-1/5 h-full bg-cyan-300 px-4 fixed top-0">
      <h4 className="text-3xl font-bold text-right text-primary uppercase py-4 border-b-2 border-primary">
        Phimhanhdong.net
      </h4>
      <nav className="my-2">
        {data.map((item, index) => {
          return (
            <NavItem
              label={item.label}
              icon={item.icon}
              active={item.active}
              key={index}
            />
          );
        })}
      </nav>
    </div>
  );
}

export default SideBar;
