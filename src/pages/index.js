// pages/index.js
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import Login from '../components/login';
import Content from '../components/content';


const Home = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    // ログイン成功時の処理
    setAuthenticated(true);
  };

  return (
    <main>
      <h1><span>murakami</span><span>masashi</span><span>portfolio</span></h1>
      {authenticated ? (
        <Content />
      ) : (
        <Login onLogin={handleLogin} />
      )}
      <p className='footer'><span>©︎ 2024 Murakami Masashi Portfolio</span></p>
    </main>
  );
};

export default Home;