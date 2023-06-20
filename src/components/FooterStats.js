export default function FooterStats({ tasks }) {
  let tasksLength = tasks.length;

  let tasksCompleted = tasks.filter((task) => task.completed).length;

  let percentageCompleted = Math.round((tasksCompleted / tasksLength) * 100);

  if (tasksCompleted === 0) {
    return <>Start adding items to your list 🚀</>;
  }

  if (tasksCompleted === tasksLength) {
    return <>Hurray, you're ready to go! 🚀</>;
  }

  return (
    <>
      You have {tasksLength} items with {tasksCompleted} ({percentageCompleted}
      )% packed so far👍
    </>
  );
}
