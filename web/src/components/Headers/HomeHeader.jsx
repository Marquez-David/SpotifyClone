'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon.svg"
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon.svg"

const HomeHeader = () => {
  const router = useRouter()
  return (
    <div className="py-6 flex flex-row sticky top-0 bg-background-base">
      <button className="bg-background-highlight p-2 rounded-full mr-2" onClick={() => router.back()}>
        <Image src={ArrowLeftIcon} height={16} width={16} />
      </button>
      <button className="bg-background-highlight p-2 rounded-full" onClick={() => router.forward()}>
        <Image src={ArrowRightIcon} height={16} width={16} />
      </button>
    </div>
  )
}

export default HomeHeader