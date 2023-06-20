export default function Tasks({ task, handleDelete, handleCompleted }) {
  return (
    <li className="min-h-fit flex items-center justify-around md:justify-normal">
      <input
        onChange={() => handleCompleted(task.id)}
        className=" mx-2 h-4 w-4 accent-[#E5771F] cursor-pointer "
        type="checkbox"
      />
      <span
        className={`${
          task.completed ? "line-through opacity-70 " : ""
        } whitespace-normal `}
      >
        {task.taskQuantity} {task.taskValue}
      </span>
      <button
        className="pl-2 cursor-pointer"
        onClick={() => handleDelete(task.id)}
      >
        ❌
      </button>
    </li>
  );
}
