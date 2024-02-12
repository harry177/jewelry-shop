import Link from "next/link";
import { AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { GeneralDropdown } from "@/components/UI/GeneralDropdown";

const menuItems = [
  { title: "Catalog", subItems: ["raz", "dva", "tri"] },
  { title: "Collections", subItems: ["raz", "dva", "tri"] },
  { title: "Certificates", subItems: ["raz", "dva", "tri"] },
];

export const Header = () => {
  return (
    <header className="flex justify-around items-center h-20 shadow-md">
      <div className="text-3xl font-semibold">J-Shop</div>
      <nav className="flex justify-center">
        <ul className="flex justify-between gap-[12vw]">
          {menuItems.map((item, index) => (
            <li key={index} className="group relative flex ">
              <GeneralDropdown triggerName={item.title} daMenuPoints={item.subItems} />
            </li>
          ))}
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
