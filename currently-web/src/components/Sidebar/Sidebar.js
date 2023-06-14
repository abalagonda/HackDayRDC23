import React, { useState } from 'react';
import './Sidebar.css';
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

// const Sidebar = () => {
  function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [showDescription, setShowDescription] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <>
    //   <button className="hamburger" onClick={toggleSidebar}>
    //     ☰
    //   </button>

    //   {isOpen && (
        <div className="sidebar-container">
          <div className="sidebar">
            <h1 className="event-title">Coffee</h1>
            <Navigation
              activeItemId="/management/members"
              onSelect={({ itemId }) => {
                // Handle item selection logic here
              }}
              items={[
                {
                  title: 'Description',
                  itemId: '/description',
                  subNav: [
                    {
                      title: 'this is a description',
                      itemId: '/description/description',
                    }
                  ],
                },
                {
                  title: 'Attendees',
                  itemId: '/people',
                  subNav: [
                    {
                      title: 'Name 1',
                      itemId: '/people/names',
                    },
                    {
                      title: 'Name 2',
                      itemId: '/people/names',
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>
      )}
//     </>
//   );
// };

export default Sidebar;
