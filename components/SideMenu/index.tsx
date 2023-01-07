
import React, { useState } from 'react';

const SideMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-black to-white">
    <div>
      <button onClick={() => setIsOpen(!isOpen)} style={{ color: 'white' }}>
        {isOpen ? <img src="https://i.pinimg.com/originals/26/9d/d1/269dd16fa1f5ff51accd09e7e1602267.png" height="1%" width="1%"></img> : <img src="https://i.pinimg.com/originals/26/9d/d1/269dd16fa1f5ff51accd09e7e1602267.png" height="1%" width="1%"></img>} 
      </button>
      {isOpen && (
        <nav style={{ position: 'fixed', padding: 20, left: 10, top: 10, bottom: 10, width: '25%', zIndex: 1}}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li>
              <a href="#" style={{ display: 'block', padding: '30px 20px 10px'}}></a>
            </li>
            <li>
              <a href="#" style={{ display: 'block', padding: '30px 20px 10px'}}></a>
            </li>
            <li>
              <a href="#" style={{ display: 'block', padding: '30px 20px 30px' }}>Dashboard</a>
            </li>
            <li>
              <a href="/shadownode" style={{ display: 'block', padding: '30px 20px 30px' }} >Shadow Nodes</a>
            </li>
            <li>
              <a href="#" style={{ display: 'block', padding: '30px 20px 30px' }}>Services</a>
            </li>
            <li>
              <a href="#" style={{ display: 'block', padding: '30px 20px 30px' }}>Marketplace</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
    </div>
  );
      };

export default SideMenu;