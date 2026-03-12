import React, { createContext, useContext, useState } from "react";

const CartContext = createContext<{
  selectedPage: string;
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
}>({ selectedPage: "Survival Evolved", setSelectedPage: () => {} });

export const CartProvider: React.FC<{ children: React.ReactNode; defaultPage?: string }> = ({ children, defaultPage = "Survival Evolved" }) => {
  const [selectedPage, setSelectedPage] = useState(defaultPage);

  return (
    <CartContext.Provider value={{ selectedPage, setSelectedPage }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
