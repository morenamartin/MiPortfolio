"use client"
import { createContext, useContext, useState } from "react";


interface ModalContextProps {
    modal: boolean
    cerrarModal: () => void;
    abrirModal: () => void
}

const ModalContextEcommerce = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [modal, setModal] = useState(false);

  const abrirModal = () => {
    setModal(true);
  }

  const cerrarModal = () => {
    setModal(false);
  }

  return (
    <ModalContextEcommerce.Provider value={{ modal, abrirModal, cerrarModal}}>
      {children}
    </ModalContextEcommerce.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContextEcommerce);
  if (!context) throw new Error("useModalContext debe usarse dentro de FormProvider");
  return context;
};