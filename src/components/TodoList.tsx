import { Todo } from "./Todo";
import { TodoFilters } from "./TodoFilters";
import { ClearCompleted } from "./filters/ClearCompleted";
import { FilterButtoms } from "./filters/FilterButtoms";
import { FilterStatesContainer } from "./filters/FilterStatesContainer";
import { ItemsLeft } from "./filters/ItemsLeft";
import { TodoProps } from "../App";

interface TodoListProps {
  todos: TodoProps[];
  handleSetComplete: (id: number) => void;
  handleDelete: (id: number) => void;
  handleClearComplete: () => void;
  showAllTodos: () => void;
  showActiveTodos: () => void;
  showCompletedTodos: () => void;
  activeFilter: string;
  total: number;
  theme: string
}

export function TodoList({
  todos,
  handleSetComplete,
  handleDelete,
  handleClearComplete,
  showAllTodos,
  showActiveTodos,
  showCompletedTodos,
  activeFilter,
  total, theme
}: TodoListProps) {
  return (
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
      {todos.map((todo) => {
        return (
          <Todo
            theme={theme}
            key={todo.id}
            todo={todo}
            handleSetComplete={handleSetComplete}
            handleDelete={handleDelete}
          />
        );
      })}

      <TodoFilters theme={theme}>
        <ItemsLeft total={total}/>
        <FilterStatesContainer>
          <FilterButtoms theme={theme} active={activeFilter} action={() => showAllTodos()} filter="All" />
          <FilterButtoms theme={theme} active={activeFilter} action={() => showActiveTodos()} filter="Active" />
          <FilterButtoms theme={theme} active={activeFilter} action={() => showCompletedTodos()} filter="Completed" />
        </FilterStatesContainer>
        <ClearCompleted handleClearComplete={handleClearComplete} theme={theme}/>
      </TodoFilters>
    </div>
  );
}
