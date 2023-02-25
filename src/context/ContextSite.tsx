import React, { createContext, useState } from "react";

export const SiteContext = createContext({});

type ChidrenProps = {
  children: React.ReactNode;
};

export default function SiteProvider({ children }: ChidrenProps) {
  const [openMenu, setOpenMenu] = useState(false);
  const [verseBible, setVerseBible] = useState();
  return (
    <SiteContext.Provider
      value={{ openMenu, setOpenMenu, verseBible, setVerseBible }}
    >
      {children}
    </SiteContext.Provider>
  );
}
