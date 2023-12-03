import crossIcon from "../assets/icon-cross.svg";
import checkIcon from "../assets/icon-check.svg";

interface TodoProps {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
  handleSetComplete: (id: number) => void;
  handleDelete: (id: number) => void;
  theme: string
}



export function Todo({ todo, handleSetComplete, handleDelete, theme }: TodoProps) {
  const { id, title, completed } = todo;

  return (
    <div className={`flex items-center justify-between p-4 ${theme === 'light' ? 'bg-light-element' : 'bg-dark-element'} border-b border-solid border-gray-600 group`}>
      <div onClick={() => handleSetComplete(id)} className="flex items-center cursor-pointer">
        {completed ? (
          <div  className="bg-gradient-to-r from-color1 to-color2 p-1 rounded-full cursor-pointer mr-2">
            <img className="h-4 w-4 " src={checkIcon} alt="Check Icon" />
          </div>
        ) : (
          <span  className="border border-gray-500 border-solid p-3 rounded-full cursor-pointer mr-2"></span>
        )}

        <p className={`pl-3 font-josefin ${theme === 'light' ? 'text-black' : 'text-white'} ` + (completed && "line-through text-gray-500")}>{title}</p>
      </div>

      <img
        className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in opacity-0 group-hover:opacity-100"
        src={crossIcon}
        alt="Close Icon"
        onClick={() => handleDelete(id)}
      />
    </div>
  );
}
