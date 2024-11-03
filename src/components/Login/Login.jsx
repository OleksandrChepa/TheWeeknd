import React, { useState } from 'react';
import { auth } from '/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Вхід успішний!");
    } catch (error) {
      alert("Помилка входу: " + error.message);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2>Login</h2>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <FaUser className={styles.icon} />
        </div>
        <div className={styles.inputGroup}>
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <FaLock className={styles.icon} />
        </div>
        <button onClick={handleLogin} style={{ width: '80%' }}>Login</button>
        <p>
          Немає акаунту? <Link to="/register">Реєстрація</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
