import React, { useState } from 'react';
import { auth } from '/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import styles from './Register.module.css';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Паролі не співпадають!");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Реєстрація успішна!");
    } catch (error) {
      alert("Помилка реєстрації: " + error.message);
    }
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerBox}>
        <h2>Register</h2>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="Username" />
          <FaUser className={styles.icon} />
        </div>
        <div className={styles.inputGroup}>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <FaEnvelope className={styles.icon} />
        </div>
        <div className={styles.inputGroup}>
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <FaLock className={styles.icon} />
        </div>
        <div className={styles.inputGroup}>
          <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
          <FaLock className={styles.icon} />
        </div>
        <button onClick={handleRegister} className={styles.registerButton}>Register</button>
      </div>
    </div>
  );
};

export default Register;
