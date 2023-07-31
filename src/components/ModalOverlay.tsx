import styles from './modalOverlay.module.css';

type IModalOverlayProps = {
  children: React.ReactNode;
}

export default function ModalOverlay({ children }: IModalOverlayProps) {
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.wrapper}>
          {children}
        </div>
      </div>
    </>
  );
}