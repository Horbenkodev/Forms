/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import users from '../data/users.json';
import '../css/user.css';
import UserItem from '../components/UserItem';
import Filters from '../components/Filters';

export default function Users() {
  const [searchText, setSearchText] = useState('');
  const [checkboxName, setCheckboxName] = useState('');

  const filteredUsers = () => {
    if (searchText.length >= 3 && (checkboxName === 'Male' || 'Female')) {
      return users.filter((user) => {
        const lowerCasedName = user.name.toLowerCase();

        return lowerCasedName.includes(searchText) && user.gender.includes(checkboxName);
      });
    } if (searchText.length >= 3) {
      return users.filter((user) => {
        const lowerCasedName = user.name.toLowerCase();
        return lowerCasedName.includes(searchText);
      });
    } if (checkboxName === 'Male' || 'Female') {
      return users.filter((user) => user.gender.includes(checkboxName));
    }
    return users;
  };

  const handleCheck = (e) => {
    const checkboxValue = e.target.name;
    if (e.target.checked === true) {
      setCheckboxName(checkboxValue);
    } else {
      setCheckboxName('');
    }
  };

  const handelSearch = (e) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue.toLowerCase());
  };

  return (
    <div className="users">
      <Filters onChangeTxt={handelSearch} onChangeCheck={handleCheck} />
      <div className="users-content">
        {filteredUsers().map((user) => (
          <UserItem
            key={user.id}
            avatar={user.avatar}
            gender={user.gender}
            name={user.name}
          />
        ))}
      </div>
    </div>
  );
}
