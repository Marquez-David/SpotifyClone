import Image from "next/image";

import QuaverIcon from "@/assets/icons/QuaverIcon.svg"

const ConditionalImage = () => (
  <div className=" bg-background-elevated-highlight flex relative px-4 py-3.5 overflow-hidden items-center justify-center gap-5 rounded-md ">
    <Image src={QuaverIcon} height={18} width={18} alt="Quaver icon" />
  </div>
);

export default ConditionalImage