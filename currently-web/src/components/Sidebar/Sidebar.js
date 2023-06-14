import React, { useState } from 'react';
import './Sidebar.css';
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState('');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <>
      <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>

      {isOpen && (
        <div className="sidebar">
          <h1>Coffee</h1>
          <p1>Come have a latte with me</p1>
          <Navigation
            activeItemId="/management/members"
            onSelect={({ itemId }) => {
              // Handle item selection logic here
            }}
            items={[
              {
                title: 'Event Name',
                itemId: '/dashboard',
              },
              {
                title: 'Description',
                itemId: '/description',
                elemAfter: () => (
                  <input
                    type="text"
                    value={description}
                    onChange={handleDescriptionChange}
                    placeholder="Enter description"
                  />
                ),
              },
              {
                title: 'Attendees',
                itemId: '/another',
                subNav: [
                  {
                    title: 'Teams',
                    itemId: '/management/teams',
                  },
                ],
              },
            ]}
          />
        </div>
      )}
    </>
  );
};

export default Sidebar;
