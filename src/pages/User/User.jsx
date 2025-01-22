import React from 'react'
import { useState } from 'react';
import styles from './user.module.css'

const User = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <section>
      <h1>{language === 'en' ? 'User Page' : 'Страница пользователя'}</h1>
      <label>
        {language === 'en' ? 'Select Language:' : 'Выберите язык:'}
        <select value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="ru">Русский</option>
        </select>
      </label>
    </section>
  );
};


export default User
