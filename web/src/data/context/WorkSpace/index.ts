import React from 'react';

interface workspaceContext {
    space: "Home" | "Work";
    setSpace: ( space: "Home" | "Work" ) => void;
};

const defaultSpace:workspaceContext = {
    space : "Work",
    setSpace: (space: "Home" | "Work") => { }
};

const WorkSpaceContext = React.createContext(defaultSpace);

export default WorkSpaceContext;