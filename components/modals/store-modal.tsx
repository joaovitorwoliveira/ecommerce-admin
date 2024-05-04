"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();

  return (
    <Modal
      title="Criar Loja"
      description="Adicionar uma nova loja para gerenciar produtos e cvategorias"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Futuro Formulário para criar loja
    </Modal>
  );
};
