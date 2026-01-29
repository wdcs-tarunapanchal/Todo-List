import React from "react";

// Create Context object
const TaskContext = React.createContext();
// Create a provider component
const TaskProvider = TaskContext.Provider;
// Create a consumer component
const TaskConsumer = TaskContext.Consumer;
// Alternatively, you can also export them like this:
export { TaskConsumer, TaskContext, TaskProvider };

