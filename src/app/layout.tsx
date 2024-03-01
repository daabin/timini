import './global.css'
import Sider from '@/components/Sider'

export const metadata = {
  title: 'timini',
  description: 'next generation open social network',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="app" className='w-screen h-screen bg-black overflow-hidden flex flex-row p-1'>
          <Sider></Sider>
          <div className='flex-1 bg-white rounded-lg h-full shadow-md'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
