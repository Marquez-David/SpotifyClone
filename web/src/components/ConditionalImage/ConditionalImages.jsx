import Image from "next/image";

import QuaverIcon from "@/assets/icons/QuaverIcon.svg"

const ConditionalImage = () => (
  <div className="bg-background-elevated-highlight object-cover w-full h-full rounded-md flex items-center justify-center">
    <Image src={QuaverIcon} height={22} width={22} alt="Quaver icon" />
  </div>
);

export default ConditionalImage