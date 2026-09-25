"use client";

import { createContext, useState } from "react";
import { GymData } from "../Interface/GymData";

export const EquipmentContext = createContext<any>(null);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [addPlan, setAddPlan] = useState<GymData[]>([]);
  const [savePlan, setSavePlan] = useState<GymData[]>([]);

  return (
    <EquipmentContext.Provider
      value={{
        addPlan,
        setAddPlan,
        savePlan,
        setSavePlan,
      }}
    >
      {children}
    </EquipmentContext.Provider>
  );
};

export default CartProvider;