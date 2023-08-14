import styles from '../editModal.module.css';

type IEditUserFormProps = {
  onClose: () => void;
}

export default function EditUserForm({ onClose }: IEditUserFormProps) {
  return (
    <form method="post" className="flex flex-col items-center gap-2 mt-2">
      <input className="input" placeholder="Nome" type="text" name="name" id="name" />
      <input className="input" placeholder="Senha" type="password" name="password" id="password" />
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