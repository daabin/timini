'use client'
import { useTheme } from '@/contexts/ThemeContext';
import { THEMES_BG } from '@/constant/themes';

export default function MineSetting() {
  const { toggleTheme } = useTheme();

  return <section className="p-6">
    <h1 className="text-3xl">主题设置</h1>
    <h2 className="text-xl my-4">背景色</h2>
    <div className="flex space-x-8">
      {
        Object.keys(THEMES_BG).map((theme) => (
          <div
            key={theme}
            className={`w-10 h-10 rounded-full cursor-pointer ${THEMES_BG[theme]}`}
            onClick={() => toggleTheme(theme)}
          ></div>
        ))
      }
    </div>
  </section>
}