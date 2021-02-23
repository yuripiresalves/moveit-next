import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/yuripiresalves.png" alt="Yuri Alves" />
      <div>
        <strong>Yuri Alves</strong>
        <p>
          <img src="icons/level.svg" alt="Seta pra cima" />
          Level 1
        </p>
      </div>
    </div>
  );
}
