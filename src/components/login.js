// components/Login.js
import { useState } from 'react';

export default function Login({ onLogin }){
  const [password, setPassword] = useState('');

  const handleLoginSubmit = () => {
    if (password === 'p') {
      // 認証成功時のコールバックを呼び出す
      onLogin();
    } else {
      alert('パスワードが正しくありません。');
    }
  };

  const enter = (e) => {
    if (e.key == 'Enter') {
      e.preventDefault()
      handleLoginSubmit()
    }}

  return (
    <div className='login'>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        name="password"
        onKeyPress={(e) => enter(e)}
      />
      <button onClick={handleLoginSubmit}><span>Enter</span></button>
    </div>
  );
};