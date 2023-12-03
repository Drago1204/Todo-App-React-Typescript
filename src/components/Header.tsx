import moonIcon from "../assets/icon-moon.svg";
import sunIcon from "../assets/icon-sun.svg";


interface Props{
  toggleTheme: () => void
  theme: string
}
export function Header({toggleTheme, theme}:Props) {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-5xl font-josefin font-bold text-white tracking-extra-widest">TODO</h1>
      <img src={theme === 'light' ? moonIcon : sunIcon} onClick={toggleTheme} alt="" className="cursor-pointer" />
    </div>
  );
}