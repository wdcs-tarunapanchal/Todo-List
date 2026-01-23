import React from "react";

const CurrentContext = React.createContext();

const CurrentProvider = CurrentContext.Provider;
const CurrentConsumer = CurrentContext.Consumer;
// Alternatively, you can also export them like this:
export { CurrentConsumer, CurrentContext, CurrentProvider };
