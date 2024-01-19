'use client'

import Image from "next/image"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useButton } from "@/hooks/useButton"

import LibraryIcon from "@/assets/icons/LibraryIcon.svg"
import LibraryOutlineIcon from "@/assets/icons/LibraryOutlineIcon.svg"

import { paths, navbarStrings } from "@/utils/strings"

const LibraryButton = ({ }) => {
  const pathname = usePathname()
  const { type } = useButton().type(pathname === paths.library, LibraryIcon, LibraryOutlineIcon)
  return (
    <li className="sticky top-0 bg-background-base py-2 z-10">
      <Link href={paths.library} className="flex gap-5 text-zinc-400 hover:text-zinc-100 items-center py-3 px-4 font-medium transition duration-300">
        <Image src={type} height={24} width={24} alt="Library icon" />
        {navbarStrings.library}
      </Link>
    </li>
  )
};

export default LibraryButton