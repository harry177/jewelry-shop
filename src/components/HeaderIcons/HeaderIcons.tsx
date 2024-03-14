import Link from "next/link";
import { AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

export const HeaderIcons = () => {
  return (
    <div className="w-32 h-10 flex justify-around items-center">
      <Link href="/account">
        <AiOutlineUser className="w-5 h-5" />
      </Link>
      <Link href="/favorites">
        <AiOutlineHeart className="w-5 h-5" />
      </Link>
      <Link href="/cart">
        <AiOutlineShoppingCart className="w-5 h-5" />
      </Link>
    </div>
  );
};
