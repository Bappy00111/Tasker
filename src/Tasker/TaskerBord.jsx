import React, { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

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
  const [shwoAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleAddTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setShowAddModal(false);
  };

  const handleEdit = (task) => {
    console.log(task);
    setTaskToUpdate(task);
    setShowAddModal(true);
  };

  const handleClose = () => {
    setShowAddModal(false);
    setTaskToUpdate(null);
  };

  const handleDelet = (id) => {
    const remaning = tasks.filter((t) => t.id !== id);
    setTasks(remaning);
  };

  const handleDeletAllClick = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };

  const handleFavarite = (id) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    const newTask = [...tasks];
    newTask[taskIndex].isFavarite = !newTask[taskIndex].isFavarite;
    setTasks(newTask);
  };

  const handleSearch = (searchTrem) => {
    // console.log(search);
    const filtered = tasks.filter((task) => {
      return task.title.toLowerCase().includes(searchTrem.toLowerCase());
    });
    // console.log(filtered)
    setTasks(filtered);
  };

  return (
    <section className="mb-20" id="tasks">
      {shwoAddModal && (
        <AddTaskModal
          onSave={handleAddTask}
          closeModal={handleClose}
          taskToUpdate={taskToUpdate}
        />
      )}
      <div className="container">
        {/* search task  */}
        <div className="p-2 flex justify-end">
          <SearchTask onSearch={handleSearch} />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction
            onAddClick={() => setShowAddModal(true)}
            onDeletAllClick={handleDeletAllClick}
          />
          {tasks.length > 0 ? (
            <TaskList
              tasks={tasks}
              edit={handleEdit}
              onDelet={handleDelet}
              onFav={handleFavarite}
            />
          ) : (
            <h2>No Task Found </h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default TaskerBord;
