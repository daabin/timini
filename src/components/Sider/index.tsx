import Menu from './Menu'
import Mine from './Mine'

export default function Sider() {
  return (
    <nav className="flex flex-col justify-between px-1 text-lg text-white">
      <Menu></Menu>
      <Mine></Mine>
    </nav>
  )
}