'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function MenuItem({ link, text, children }: { link: string, text?: string, children?: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <Link href={link} className="group mb-1 flex flex-col items-center p-2 rounded-md hover:cursor-pointer ">
      <div className={`p-1 mb-1 rounded-md transition group-hover:bg-slate-50/50 ${pathname === link ? 'bg-slate-50/50' : ''}`}>
        {children}
      </div>
      {text && <span className="text-sm">{text}</span>}
    </Link>
  )
}