'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon.svg"
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon.svg"

const HomeHeader = () => {
  const router = useRouter()
  return (
    <div className="bg-background-base p-6 flex flex-row space-x-2">
      <button className="bg-background-highlight p-2 rounded-full" onClick={() => router.back()}>
        <Image src={ArrowLeftIcon} height={16} width={16} />
      </button>
      <button className="bg-background-highlight p-2 rounded-full" onClick={() => router.forward()}>
        <Image src={ArrowRightIcon} height={16} width={16} />
      </button>
    </div>
  )
}

export default HomeHeader