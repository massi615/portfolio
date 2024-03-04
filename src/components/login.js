// components/Login.js
import { useState } from 'react';

export default function Login({ onLogin }){
  const [password, setPassword] = useState('');

  const handleLoginSubmit = () => {
    if (password === 'password') {
      // 認証成功時のコールバックを呼び出す
      onLogin();
    } else {
      alert('パスワードが正しくありません。');
    }
  };

  return (
    <div className='login'>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLoginSubmit}><span>Enter</span></button>
    </div>
  );
};