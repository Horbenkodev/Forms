/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import users from '../data/users.json';
import '../css/user.css';
import UserItem from '../components/UserItem';
import Filters from '../components/Filters';

export default function Users() {
  const [searchText, setSearchText] = useState('');

  const filteredUsers = () => {
    if (searchText.length >= 3) {
      return users.filter((user) => {
        const lowerCasedName = user.name.toLowerCase();

        return lowerCasedName.includes(searchText);
      });
    }
    return users;
  };

  const handelSearch = (e) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue.toLowerCase());
  };

  return (
    <div className="users">
      <Filters onChage={handelSearch} />
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
