import { useState } from 'react';
import Profile from './profile';
import Works from './works';

export default function Content() {
  // 現在の表示コンポーネントを管理するステート
  const [activeComponent, setActiveComponent] = useState(null);

  // リンクがクリックされたときの処理
  const handleLinkClick = (component) => {
    // クリックされたリンクに応じて表示するコンポーネントを設定
    setActiveComponent(component);
  };

  return (
    <div className='container'>
      <ul className='links'>
        <li>
          <a
            tabIndex={1}
            onClick={() => handleLinkClick(<Profile />)}
          >
            Profile
          </a>
        </li>
        <li>
          <a
            tabIndex={2}
            onClick={() => handleLinkClick(<Works />)}
          >
            Works
          </a>
        </li>
      </ul>
        {/* activeComponentが存在する場合のみ表示 */}
        {activeComponent && activeComponent}
    </div>
  );
}
