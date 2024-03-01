'use client'

import MineSubmenu from "./components/Submenu"

export default function MineLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className='flex h-full'>
      <MineSubmenu></MineSubmenu>
      <div>
        {children}
      </div>
    </div>
  )
}