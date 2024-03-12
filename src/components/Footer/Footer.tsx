import { GeneralButton } from "@/components/UI/GeneralButton";

export const Footer = () => {
  return (
    <footer className="flex justify-around items-center w-full h-40 bottom-0 bg-[#ffffff] shadow-[inset_0_15px_10px_-15px_rgba(0,0,0,0.3)]">
      <div className="w-[20%]">Payments</div>
      <div className="flex flex-col justify-center items-center w-[30%] gap-5">
        <span>Subscribtion</span>
        <GeneralButton>Example</GeneralButton>
        </div>
      <div className="w-[20%]">Contacts</div>
    </footer>
  );
};
