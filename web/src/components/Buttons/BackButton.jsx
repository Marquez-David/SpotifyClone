import Image from "next/image"
import { useRouter } from "next/navigation"

import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon.svg"

const BackButton = () => {
  const router = useRouter()
  return (
    <button className="bg-background-highlight p-2 rounded-full" onClick={() => router.back()}>
      <Image src={ArrowLeftIcon} height={16} width={16} alt={`Cover image of Arrow left icon`} />
    </button>
  )
}

export default BackButton