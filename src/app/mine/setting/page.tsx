'use client'
import { useTheme } from '@/contexts/ThemeContext';

export default function MineSetting() {
  const { toggleTheme } = useTheme();

  return <section className="p-6">
    <h1 className="text-3xl">主题设置</h1>
    <h2 className="text-xl my-4">背景色</h2>
    <div className="flex space-x-8">
      <div
        className={`w-10 h-10 rounded-full cursor-pointer bg-black`} onClick={() => toggleTheme('black')}
      ></div>
      <div
        className={`w-10 h-10 rounded-full cursor-pointer bg-green-600`} onClick={() => toggleTheme('green')}
      ></div>
      <div
        className={`w-10 h-10 rounded-full cursor-pointer bg-sky-500`} onClick={() => toggleTheme('sky')}
      ></div>
      <div
        className={`w-10 h-10 rounded-full cursor-pointer bg-orange-500`} onClick={() => toggleTheme('orange')}
      ></div>
    </div>
  </section>
}