import Image from "next/image";
import { GeneralButton } from "@/components/UI/GeneralButton";

export const Footer = () => {
  return (
    <footer className="flex justify-around w-full h-40 bottom-0 bg-[#ffffff] shadow-[inset_0_15px_10px_-15px_rgba(0,0,0,0.3)]">
      <div className="flex flex-col jusify-between w-[20%] gap-3">
        <span>Payments</span>
        <div className="flex flex-wrap gap-2">
          <div className="relative w-[80px] h-[50px]">
            <Image src="/svg/visa.svg" alt="visa" fill></Image>
          </div>
          <div className="relative w-[80px] h-[50px]">
            <Image src="/svg/master-card.svg" alt="master-card" fill></Image>
          </div>
          <div className="relative w-[80px] h-[50px]">
            <Image src="/svg/a-express.svg" alt="american-express" fill></Image>
          </div>
          <div className="relative w-[80px] h-[50px]">
            <Image src="/svg/paypal.svg" alt="paypal" fill></Image>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-[30%] gap-5">
        <span>Subscribtion</span>
        <GeneralButton>Example</GeneralButton>
      </div>
      <div className="flex flex-col jusify-between w-[20%] gap-3">
        <span>Contacts</span>
        <div className="flex flex-col">
          <p>Address:</p>
          <p>Phone:</p>
          <p>E-mail:</p>
          <p>Socials:</p>
        </div>
      </div>
    </footer>
  );
};
