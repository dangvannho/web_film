import { useState } from "react";
import { FiHome } from "react-icons/fi";
import { BiMoviePlay } from "react-icons/bi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";

import NavItem from "./NavItem";

function SideBar() {
  const [active, setActive] = useState(false);

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
    <div className="w-full lg:w-1/5 h-max lg:h-full bg-cyan-300 px-4 fixed top-0 z-10">
      <div className="flex justify-between lg:justify-end items-center ">
        <h4 className="text-3xl font-bold lg:text-right text-primary uppercase py-2 lg:py-4 lg:border-b-2 border-primary">
          Phimhanhdong.net
        </h4>
        <div
          className="cursor-pointer lg:hidden"
          onClick={() => setActive(!active)}
        >
          <IoMdMenu size={30} />
        </div>
      </div>

      <nav
        className={`lg:my-2 overflow-hidden lg:overflow-visible  ${
          active ? "h-[156px]" : "h-[0px]"
        }`}
      >
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
