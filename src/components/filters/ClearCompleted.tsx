interface ClearCompletedProps {
    handleClearComplete: () => void;
    theme: string
  }

export function ClearCompleted({handleClearComplete, theme}: ClearCompletedProps) {
  return (
    <button
      onClick={() => handleClearComplete()}
      className={`text-gray-400 ${theme === 'light' ? 'hover:text-black' : 'hover:text-white'} cursor-pointer transition-all duration-300 ease-in-out`}
    >
      Clear Completed
    </button>
  );
}
