'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon.svg"
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon.svg"

const HomeHeader = () => {
  const router = useRouter()
  return (
    <header className="bg-background-base flex flex-row justify-between p-5 items-center">

      <div className="space-x-2">
        <button className="bg-background-highlight p-2 rounded-full" onClick={() => router.back()}>
          <Image src={ArrowLeftIcon} height={16} width={16} alt={`Cover image of Arrow left icon`} />
        </button>
        <button className="bg-background-highlight p-2 rounded-full" onClick={() => router.forward()}>
          <Image src={ArrowRightIcon} height={16} width={16} alt={`Cover image of Arrow rigth icon`} />
        </button>
      </div>

    </header>
  )
}

export default HomeHeader