import styles from "./tableRow.module.css";

type ITableRowProps = {
  name: string;
}

export default function TableRow({ name }: ITableRowProps) {
  return (
    <tr className={styles.row}>
      <td className={styles.nameArea}>{name}</td>
      <td><span className={styles.editButton}>Editar</span></td>
      <td><span className={styles.deleteButton}>Deletar</span></td>
    </tr>
  );
}