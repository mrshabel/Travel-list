import { useState } from "react";
import FooterStats from "./FooterStats";
import Form from "./Form";
import TaskContainer from "./TaskContainer";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  function handleAdd(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleDelete(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  // handle toggle of checkbox
  function handleCompleted(taskid) {
    const taskCompleted = tasks.map((task) => {
      if (task.id === taskid) return { ...task, completed: !task.completed };
      return task;
    });
    setTasks(taskCompleted);
  }

  // handle clear
  function handleClear() {
    setTasks([]);
  }

  return (
    <div className="text-[#5A3E2B] ">
      <header className="bg-[#F4A226] text-5xl flex justify-center items-center font-bold py-12 min-h-[25vh] uppercase md:text-7xl md:tracking-wide text-center ">
        <h1>🌴 far away 🧳</h1>
      </header>

      <main className="text-center">
        <Form handleAdd={handleAdd} />
        <TaskContainer
          tasks={tasks}
          handleCompleted={handleCompleted}
          handleDelete={handleDelete}
          handleClear={handleClear}
        />
      </main>

      <footer className="flex justify-center items-center text-center py-8 font-semibold italic text-2xl bg-[#76C7AD] h-[15vh] ">
        <FooterStats tasks={tasks} />
      </footer>
    </div>
  );
}
