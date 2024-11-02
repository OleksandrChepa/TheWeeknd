import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import styles from './Login.module.css';

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2>Login</h2>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="Username" />
          <FaUser className={styles.icon} />
        </div>
        <div className={styles.inputGroup}>
          <input type="password" placeholder="Password" />
          <FaLock className={styles.icon} />
        </div>
        <div className={styles.options}>
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <button>Login</button>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
