type ITableRowProps = {
  name: string;
}

export default function TableRow({ name }: ITableRowProps) {
  return (
    <tr>
      <td>{name}</td>
      <td><span>Editar</span></td>
      <td><span>Deletar</span></td>
    </tr>
  );
}