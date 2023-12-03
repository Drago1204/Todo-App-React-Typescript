interface FilterButtomsProps {
    action: () => void;
    active: string;
    filter: string;
    theme: string
  }
export function FilterButtoms({ action, active, filter, theme }: FilterButtomsProps) {
  return (
    <button
          onClick={action}
          className={
            ` ${theme === 'light' ? 'hover:text-black' : 'hover:text-white'} cursor-pointer transition-all duration-300 ease-in-out ` +
            (active.toLowerCase().includes(filter.toLowerCase())
              ? "text-blue-400"
              : "text-gray-400")
          }
        >
          {filter}
        </button>
  )
}