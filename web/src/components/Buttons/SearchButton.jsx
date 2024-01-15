'use client'

import Image from "next/image"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useButton } from "@/hooks/useButton"

import SearchIcon from "@/assets/icons/SearchIcon.svg"
import SearchOutlineIcon from "@/assets/icons/SearchOutlineIcon.svg"

import { paths, navbarStrings } from "@/utils/strings"

const SearchButton = ({ }) => {
  const pathname = usePathname()
  const { type } = useButton().type(pathname === paths.search, SearchIcon, SearchOutlineIcon)
  return (
    <li>
      <Link href={paths.search} className="flex gap-5 text-zinc-400 hover:text-zinc-100 items-center py-3 px-4 font-medium transition duration-300">
        <Image src={type} height={24} width={24} />
        {navbarStrings.search}
      </Link>
    </li>
  )
};

export default SearchButton