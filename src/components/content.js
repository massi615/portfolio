import { useState } from 'react';
import { useRouter } from 'next/router';
import Profile from './profile';
import Works from './works'

export default function Content() {
    const [scrollPosition, setScrollPosition] = useState(0);
  
    const handleProfileClick = () => {
      // .contents内のスクロール位置をトップに戻す（なめらかに動く）
      document.querySelector('.contents').scrollTo({
        top: 0,
        behavior: 'smooth',
      });
  
      // .glassから.beforeクラスを除去
      const glassElement = document.querySelector('.glass');
      glassElement.classList.remove('before');
  
      // 現在のスクロール位置を保存
      setScrollPosition(0);
    };
  
    return (
        <div className='container'>
            <ul className='links'>
                <li><a tabIndex={1} onClick={handleProfileClick} onKeyDown={handleProfileClick}>Profile</a></li>
                <li><a>Works</a></li>
            </ul>
            <div className='contents'>
                <Profile />
                <Works />
            </div>
        </div>
    )
}