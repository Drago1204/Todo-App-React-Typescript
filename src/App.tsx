import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import darkBgDesktop from "./assets/bg-desktop-dark.jpg";
import lightBgDesktop from "./assets/bg-desktop-light.jpg";

export interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<TodoProps[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos
      ? JSON.parse(savedTodos)
      : [
          {
            id: 1,
            title: "Watch the next Marvel Movie",
            completed: false,
          },
          {
            id: 2,
            title: "Record the next Video",
            completed: false,
          },
          {
            id: 3,
            title: "Wash the dishes",
            completed: true,
          },
          {
            id: 4,
            title: "Study 2 hours",
            completed: false,
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //cambiar de tema
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  const [activeFilter, setActiveFilter] = useState("all");

  const [filteredTodos, setFilteredTodos] = useState(todos);

  const showAllTodos = () => {
    setActiveFilter("all");
  };

  const showActiveTodos = () => {
    setActiveFilter("active");
  };

  const showCompletedTodos = () => {
    setActiveFilter("completed");
  };

  const addTodo = (title: string) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo = {
      id: lastId + 1,
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const handleSetComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleClearComplete = () => {
    const updatedList = todos.filter((todo) => !todo.completed);
    setTodos(updatedList);
  };

  const handleDelete = (id: number) => {
    const updatedList = todos.filter((todo) => todo.id !== id);
    setTodos(updatedList);
  };

  useEffect(() => {
    let filteredTodos;
    switch (activeFilter) {
      case "active":
        filteredTodos = todos.filter((todo) => !todo.completed);
        break;
      case "completed":
        filteredTodos = todos.filter((todo) => todo.completed);
        break;
      default:
        filteredTodos = todos;
    }
    setFilteredTodos(filteredTodos);
  }, [activeFilter, todos]);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${
            theme === "light" ? lightBgDesktop : darkBgDesktop
          })`,
        }}
        className={`flex flex-col items-center w-full h-screen bg-[url('./assets/bg-mobile-light.jpg')] sm:bg-[url('./assets/bg-desktop-light.jpg')] bg-no-repeat bg-top bg-contain ${
          theme === "light" ? "bg-light" : "bg-dark"
        } dark:sm:bg-[url('./assets/bg-desktop-dark.jpg')] dark:bg-[url('./assets/bg-mobile-dark.jpg')]`}
      >
        <div className="sm:w-[33.75rem] sm:mt-20 w-80 mt-10"></div>

        <div className="container flex flex-col max-w-xl">
          <Header toggleTheme={toggleTheme} theme={theme} />
          <TodoInput addTodo={addTodo} theme={theme} />
          <TodoList
            activeFilter={activeFilter}
            todos={filteredTodos}
            showAllTodos={showAllTodos}
            showActiveTodos={showActiveTodos}
            showCompletedTodos={showCompletedTodos}
            handleSetComplete={handleSetComplete}
            handleDelete={handleDelete}
            handleClearComplete={handleClearComplete}
            total={todos.length}
            theme={theme}
          />
        </div>
      </div>
    </>
  );
}

export default App;
