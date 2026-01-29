import React from "react";
// Create Context object
const EditContext = React.createContext();

const EditProvider = EditContext.Provider;
const EditConsumer = EditContext.Consumer;

export { EditConsumer, EditContext, EditProvider };

