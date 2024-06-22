// Importing needed modules
import Link from "next/link";

// NavBar Component
export default function Header(): JSX.Element {
  // Menu Link interface
  interface MenuLink {
    name: string;
    link: string;
  }

  const MenuLinks: MenuLink[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <header className=" z-40 lg:absolute lg:top-3 lg:left-1/2 lg:-translate-x-1/2 lg:w-9/12  w-full flex justify-between items-center bg-opacity-20 bg-[#0F172A] backdrop-filter backdrop-blur-lg border-b-2 lg:border-2 border-emerald-400 shadow-lg px-7 py-3  lg:rounded-full">
      {/* Logo part */}
      <div className="logo text-center m-auto lg:m-0">
        <h1 className="text-lg">
          <span className="text-emerald-400 font-bold text-3xl">Tuhin.</span><span className="text-white">Dev</span>
        </h1>
      </div>

      {/* Nav Menu is Here */}
      <nav className="navMenus font-semibold lg:block hidden">
        <ul className="flex gap-20 first:text-emerald-500">
          {MenuLinks.map((item: MenuLink, index: number) => (
            <li key={index}>
              <Link className="text-white hover:text-emerald-400 " href={item.link}>
             {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
