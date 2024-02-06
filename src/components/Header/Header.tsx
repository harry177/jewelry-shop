import Link from "next/link";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

export const Header = () => {
  return (
    <header className="flex justify-around items-center h-20 border border-black">
      <div>Logo</div>
      <nav>
        <ul className="flex justify-between gap-[12vw]">
          <li>Catalog</li>
          <li>Collections</li>
          <li>Certificates</li>
        </ul>
      </nav>
      <div className="w-32 h-10 flex justify-around items-center">
        <Link href="/">
          <AiOutlineUser className="w-5 h-5" />
        </Link>
        <Link href="/favorites">
          <AiOutlineHeart className="w-5 h-5" />
        </Link>
        <Link href="/cart">
          <AiOutlineShoppingCart className="w-5 h-5" />
        </Link>
      </div>
    </header>
  );
};
