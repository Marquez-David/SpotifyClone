import Image from "next/image"
import { useRouter } from "next/navigation"

import ArrowRightIcon from "@/assets/icons/ArrowRightIcon.svg"

const FordwardButton = () => {
  const router = useRouter()
  return (
    <button className="bg-background-highlight p-2 rounded-full" onClick={() => router.forward()}>
      <Image src={ArrowRightIcon} height={16} width={16} alt={`Cover image of Arrow right icon`} />
    </button>
  )
}

export default FordwardButton