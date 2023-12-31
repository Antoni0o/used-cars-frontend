import styles from '../editModal.module.css';

type IEditCarFormProps = {
  onClose: () => void;
}

export default function EditCarForm({ onClose }: IEditCarFormProps) {
  return (
    <form method="post" className="flex flex-col items-center gap-2 mt-2">
      <input className="input" placeholder="Modelo" type="text" name="model" id="model" />
      <input className="input" placeholder="Marca" type="text" name="brand" id="brand" />
      <div className={styles.buttons}>
        <button
          className="button cancel-button"
          onClick={onClose}
        >
          Cancelar
        </button>
        <button className="button submit-button">Editar</button>
      </div>
    </form>
  );
}