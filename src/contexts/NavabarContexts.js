import React, { createContext, useState } from "react";
export const navbarContext = createContext();
const NavabarContexts = ({ children }) => {
    const [hover, setHover] = useState(false);
    const [searchState, setSearchState] = useState(false);
    const values = {
        hover,
        setHover,
        searchState,
        setSearchState,
    };
    return (
        <navbarContext.Provider value={values}>
            {children}
        </navbarContext.Provider>
    );
};

export default NavabarContexts;
