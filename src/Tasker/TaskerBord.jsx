import React, { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const TaskerBord = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Leren React",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam assumenda sed eius et facere placeat veniam blanditiis, quibusdam sint?",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavarite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        {/* search task  */}
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
};

export default TaskerBord;
