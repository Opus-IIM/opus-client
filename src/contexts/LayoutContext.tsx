import React, { useState } from "react";

type Layout = "employee" | "humanRessources" | "default";

const LayoutContext = React.createContext({
  layout: "humanRessources" as Layout,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setLayout: (_theme: Layout) => {},
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LayoutProvider = (props: any) => {
  const [layout, setLayout] = useState<Layout>("employee");
  return (
    <LayoutContext.Provider value={{ layout, setLayout }} {...props}>
      {props.children}
    </LayoutContext.Provider>
  );
};

export { LayoutContext, LayoutProvider };
