import { useState } from "react";

interface TodoInputProps {
  addTodo: (title: string) => void;
  theme: string
}

export function TodoInput({ addTodo , theme}: TodoInputProps) {
  const [title, setTitle] = useState("");

  const handleAddTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLowerCase() === "enter") {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <div className="mt-6 relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span className="border border-gray-500 border-solid p-3 rounded-full"></span>
      </div>

      <input
        className={`focus:shadow-lg font-josefin focus:shadow-black-800 pl-12 w-full py-4 ${theme === 'light' ? 'bg-light-element' : 'bg-dark-element'} ${theme === 'light' ? 'text-black' : 'text-white'} rounded-xl outline-none  ease-in-out`}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => handleAddTodo(e)}
        placeholder="Create a new todo..."
      />
    </div>
  );
}
