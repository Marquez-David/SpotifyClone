'use client'

import Image from "next/image"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useButton } from "@/hooks/useButton"

import HomeIcon from "@/assets/icons/HomeIcon.svg"

import { paths, navbarStrings } from "@/utils/strings"

const HomeButton = ({ }) => {
  const pathname = usePathname();
  const { type } = useButton().type(pathname === paths.home, HomeIcon, HomeIcon);
  return (
    <li>
      <Link href={paths.home} className="flex gap-5 text-zinc-400 hover:text-zinc-100 items-center py-3 px-4 font-medium transition duration-300">
        <Image src={type} height={24} width={24} />
        {navbarStrings.home}
      </Link>
    </li>
  )
};

export default HomeButton;