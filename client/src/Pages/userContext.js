import React, {createContext} from "react";

// Create a context object
const userContext = React.createContext({user: {}}); 

// Export it so it can be used by other Components
export {
  userContext 
};