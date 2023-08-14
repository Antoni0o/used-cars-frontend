import ModalOverlay from "../ModalOverlay";
import EditCarForm from "./forms/EditCarForm";
import EditUserForm from "./forms/EditUserForm";

type IEditModalProps = {
  tableInfo: boolean;
  isOpen: boolean;
  onClose: () => void;
}

export default function EditModal({ tableInfo, isOpen, onClose }: IEditModalProps) {
  return (
    <>
      {isOpen ? (
        <ModalOverlay>
          <div className="flex justify-between align-center">
            <h2 className="font-bold">Editar {tableInfo ? "Carro" : "Usuário"}</h2>
            <span className="font-bold rounded-lg px-2 hover:bg-orange-300 duration-150 cursor-pointer" onClick={onClose}>x</span>
          </div>
          {
            tableInfo
              ? <EditCarForm onClose={onClose} />
              : <EditUserForm onClose={onClose} />
          }
        </ModalOverlay >
      ) : null
      }
    </>
  );
}