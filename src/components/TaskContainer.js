import { useState } from "react";
import Tasks from "./Tasks";
// import Sort from './Sort';

export default function TaskContainer({
  tasks,
  handleDelete,
  handleClear,
  handleCompleted,
}) {
  // const [sortedTask, setSortedTask] = useState(tasks);
  const [sortValue, setSortValue] = useState("by order");

  let sortedTasks;

  if (sortValue === "by order") {
    sortedTasks = tasks;
  }
  if (sortValue === "by quantity") {
    sortedTasks = tasks.slice().sort((a, b) => a.taskQuantity - b.taskQuantity);
  }
  if (sortValue === "by description") {
    sortedTasks = tasks
      .slice()
      .sort((a, b) =>
        a.taskValue < b.taskValue ? -1 : a.taskValue > b.taskValue ? 1 : 0
      );
  }
  if (sortValue === "by status") {
    sortedTasks = tasks;
  }

  return (
    <section className="bg-[#5A3E2B] text-[#FFEBB3] min-h-[45vh] flex flex-col justify-between py-4 items-center ">
      <ul className="grid grid-cols-1 md:grid-cols-3 w-[80vw] gap-12 p-8 ">
        {sortedTasks.map((task) => (
          <Tasks
            task={task}
            handleDelete={handleDelete}
            handleCompleted={handleCompleted}
            key={task.id}
          />
        ))}
      </ul>

      {/* Sort and clear buttons */}

      <div className="text-[#5A3E2B] ">
        <select
          value={sortValue}
          onChange={(event) => setSortValue(event.target.value)}
          className="bg-[#FFEBB3] uppercase font-semibold px-2 md:px-4 py-2 rounded-3xl outline-none mr-5 cursor-pointer "
        >
          <option key={1} value={"by order"}>
            sort by input order
          </option>
          <option key={2} value={"by quantity"}>
            sort by quantity
          </option>
          <option key={3} value={"by description"}>
            sort by description
          </option>
          <option key={4} value={"by status"}>
            sort by packed status
          </option>
        </select>

        <button
          onClick={handleClear}
          className="bg-[#FFEBB3] uppercase font-semibold px-4 py-2 rounded-3xl outline-none"
        >
          clear list
        </button>
      </div>
    </section>
  );
}
