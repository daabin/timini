'use client'
import './global.css'
import Sider from '@/components/Sider'
import { THEMES_BG } from '@/constant/themes'
import { ThemeProvider, useTheme } from '@/contexts/ThemeContext'

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <div id="app" className={`w-screen h-screen overflow-hidden flex flex-row p-1 ${THEMES_BG[theme]}`}>
      <Sider></Sider>
      <div className='flex-1 bg-white rounded-lg h-full shadow-md'>
        {children}
      </div>
    </div>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Timini</title>
      </head>
      <body>
        <ThemeProvider>
          <PageContainer>{children}</PageContainer>
        </ThemeProvider>
      </body>
    </html>
  )
}
