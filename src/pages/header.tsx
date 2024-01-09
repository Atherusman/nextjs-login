// components/Header.tsx
import Link from "next/link";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const path = useRouter().pathname;

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link className="hover:text-gray-300" href="/">
          Dashboard{" "}
        </Link>
        <nav className="space-x-4">
          <Link className="hover:text-gray-300" href="/">
            Home
          </Link>
          <Link className="hover:text-gray-300" href="/about">
            About
          </Link>
          {path === "/header" ? (
            <Link className="hover:text-gray-300" href="/">
              Logout
            </Link>
          ) : (
            <Link className="hover:text-gray-300" href="login">
              Login
            </Link>
          )}
        
        </nav>
      </div>
    </header>
  );
};

export default Header;
