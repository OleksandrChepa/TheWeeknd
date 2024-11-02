import React from 'react';
import styles from './ProfileSection.module.css';

const ProfileSection = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileContent}>
        <div className={styles.avatarContainer}>
          <img src="/image/Avatar.png" alt="Avatar" className={styles.avatar} />
          <button className={styles.avatarButton}>Change Avatar</button>
        </div>
        <div className={styles.profileInputs}>
          <div className={styles.inputField}>
            <label>Username:</label>
            <span className={styles.exampleText}>example_username</span>
            <button className={styles.changeButton}>Change Username</button>
          </div>
          <div className={styles.inputField}>
            <label>Email:</label>
            <span className={styles.exampleText}>example@example.com</span>
            <button className={styles.changeButton}>Change Email</button>
          </div>
          <div className={styles.inputField}>
            <label>Password:</label>
            <span className={styles.exampleText}>********</span>
            <button className={styles.changeButton}>Change Password</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
