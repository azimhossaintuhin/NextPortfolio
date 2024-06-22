// import modules
import { FiHome, FiBox, FiUser, FiAward, FiMail } from "react-icons/fi";
import Link from "next/link";
import { FC } from "react";

// MobileNav Component
const MobileNav: FC = (): JSX.Element => {
  // Define interface for menu items
  interface MenuItem {
    name: string;
    link: string;
    icon: JSX.Element;
  }

  // Menu items with names, links, and icons
  const MenuLinks: MenuItem[] = [
    {
      name: "Home",
      link: "/",
      icon: <FiHome />,
    },
    {
      name: "About",
      link: "/about",
      icon: <FiUser />,
    },
    {
      name: "Services",
      link: "/services",
      icon: <FiAward />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: <FiBox />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <FiMail />,
    },
  ];

  return (
    <div className="fixed bottom-2 lg:hidden left-1/2 transform -translate-x-1/2 max-w-sm border-2 px-5 py-2 border-green-400 rounded-xl shadow-emerald-300 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg z-50">
      <ul className="flex justify-center items-center gap-6">
        {MenuLinks.map((item: MenuItem, index: number) => (
          <li key={index} className="text-center">
            <Link href={item.link} className="flex flex-col items-center text-gray-100 hover:text-emerald-400">
           
                {item.icon}
                <span className="text-xs mt-1">{item.name}</span>
         
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
