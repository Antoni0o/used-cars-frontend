import { useState } from "react";
import EditModal from "./EditModalComponent/EditModal";
import styles from "./tableRow.module.css";

type ITableRowProps = {
  name: string;
  tableInfo: boolean;
}

export default function TableRow({ name, tableInfo }: ITableRowProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <>
      <tr className={styles.row}>
        <td className={styles.nameArea}>{name}</td>
        <td><span className={styles.editButton} onClick={() => setIsEditModalOpen(true)}>Editar</span></td>
        <td><span className={styles.deleteButton}>Deletar</span></td>
      </tr>
      <EditModal tableInfo={tableInfo} isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} />
    </>
  );
}