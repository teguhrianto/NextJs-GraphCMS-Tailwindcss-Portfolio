import Link from "next/link";

function Header() {
  return (
    <>
      <header className="py-10 w-full px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col md:flex-row justify-between max-w-3xl mx-auto items-center">
          <div className="text-3xl sm:text-2xl font-semibold">Awesome Portfolio</div>
          <ul className="flex text-lg mt-4 sm:mt-0">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="ml-4">
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className="ml-4">
              <Link href="/portfolio">
                <a>Portfolio</a>
              </Link>
            </li>
            <li className="ml-4">
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <style jsx>
        {`
          li a {
            @apply text-gray-900 hover:text-gray-500 transition-all duration-100 ease-in-out;
          }
        `}
      </style>
    </>
  );
}

export default Header;
