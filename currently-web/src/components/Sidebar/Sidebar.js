import React, { useState } from 'react';
import './Sidebar.css';
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Event from '../Event/Event';
function Sidebar({sidebar_name, sidebar_desc, attendees}) {
  const sn = sidebar_name
  const sd = sidebar_desc
  const attendeeList = attendees

  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [showDescription, setShowDescription] = useState(false);

  const attendeeSubNav = attendeeList.map((attendee, index) => ({
    title: attendee,
    itemId: `/people/${index}`,
  }));
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <h1 className="event-title">{sn}</h1>
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
                  title: sd,
                  itemId: '/description/description',
                }
              ],
            },
            {
              title: 'Attendees',
              itemId: '/people',
              subNav: attendeeSubNav
            },
          ]}
        />
      </div>
    </div>
)}


export default Sidebar;
