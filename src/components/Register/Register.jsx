import React from 'react';
import styles from './Register.module.css';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const Register = () => {
  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerBox}>
        <h2>Register</h2>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="Username" />
          <FaUser className={styles.icon} />
        </div>
        <div className={styles.inputGroup}>
          <input type="email" placeholder="Email" />
          <FaEnvelope className={styles.icon} />
        </div>
        <div className={styles.inputGroup}>
          <input type="password" placeholder="Password" />
          <FaLock className={styles.icon} />
        </div>
        <div className={styles.inputGroup}>
          <input type="password" placeholder="Confirm Password" />
          <FaLock className={styles.icon} />
        </div>
        <button className={styles.registerButton}>Register</button>
      </div>
    </div>
  );
};

export default Register;
