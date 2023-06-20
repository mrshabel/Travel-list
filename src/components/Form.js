import { useState } from "react";

export default function Form({ handleAdd }) {
  const [taskValue, setTaskValue] = useState("");
  const [taskQuantity, setTaskQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    const newTask = {
      taskQuantity,
      taskValue,
      completed: false,
      id: Date.now(),
    };
    handleAdd(newTask);

    setTaskQuantity(1);
    setTaskValue("");
  }

  return (
    <section className="text-xl font-semibold flex flex-col md:flex-row min-h-[15vh] bg-[#E5771F] justify-center items-center gap-8 pt-2 pb-8  ">
      <h3>What do you need for your 😍 trip?</h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap justify-center items-center gap-4 px-6  "
      >
        <select
          className="h-[50px] w-[90px] bg-[#FFEBB3] text-center rounded-3xl outline-none cursor-pointer "
          value={taskQuantity}
          onChange={(event) => setTaskQuantity(event.target.value)}
        >
          {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>

        <input
          type="text"
          required
          placeholder="item..."
          className="bg-[#FFEBB3] px-6 w-[200px] h-[50px] rounded-3xl outline-none "
          value={taskValue}
          onChange={(event) => setTaskValue(event.target.value)}
        />

        <button
          type="submit"
          className="bg-[#76C7AD] h-[50px] w-[90px] text-center rounded-3xl "
        >
          Add
        </button>
      </form>
    </section>
  );
}
