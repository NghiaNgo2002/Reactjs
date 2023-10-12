  import React, { useState, useEffect, useRef } from 'react';

  function Profile() {
    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
      let handler = (e) => {
        if (!menuRef.current.contains(e.target)) {
          setOpen(false);
          console.log(menuRef.current);
        }
      };

      document.addEventListener('mousedown', handler);

      return () => {
        document.removeEventListener('mousedown', handler);
      };
    }, []);
    return (
      <div className="App">
        <div className="menu-container" ref={menuRef}>
          <div className="menu-trigger" onClick={() => setOpen(!open)}>
            <img src="/img/nghiango.jpg" alt="Profile" />
          </div>

          <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
            <h3>
              Nghia Ngo
              <br />
              <span>Website Designer</span>
            </h3>
            <ul>
              <DropdownItem img="/img/nghiango.jpg" text="My Profile" />
              <DropdownItem img="/img/edit.png" text="Edit Profile" />
              <DropdownItem img="/img/envelope.png" text="Inbox" />
              <DropdownItem img="/img/settings.png" text="Settings" />
              <DropdownItem img="/img/question.png" text="Helps" />
              <DropdownItem img="/img/log-out.png" text="Logout" />
            </ul>
          </div>
        </div>
      </div>
    );
  }

  function DropdownItem(props) {
    return (
      <li className="dropdownItem">
        <img src={props.img} alt="" />
        <a>{props.text}</a>
      </li>
    );
  }

  export default Profile;
