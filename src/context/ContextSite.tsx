import React, { createContext, useState } from "react";

export const SiteContext = createContext({});

type ChidrenProps = {
  children: React.ReactNode;
};
type Menuprops = {
  openMenu: boolean;
};

export default function SiteProvider({ children }: ChidrenProps) {
  const [openMenu, setOpenMenu] = useState<Menuprops>();
  const [verseBible, setVerseBible] = useState();
  return (
    <SiteContext.Provider
      value={{ openMenu, setOpenMenu, verseBible, setVerseBible }}
    >
      {children}
    </SiteContext.Provider>
  );
}
