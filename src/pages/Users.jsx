/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, lazy, Suspense } from 'react';
import users from '../data/users.json';
import '../scss/user.scss';
import Filters from '../components/Filters';
import UserPlaceholder from '../components/UserPlaceholder';

const UserItem = lazy(() => import('../components/UserItem'));

export default function Users() {
  const [searchText, setSearchText] = useState('');
  const [checkboxName, setCheckboxName] = useState({});

  const filteredUsers = () => {
    if (searchText.length >= 3 && (checkboxName.Male || checkboxName.Female)) {
      let gender;
      if (searchText.length >= 3 && (checkboxName.Male && checkboxName.Female)) {
        gender = '';
      } else if (searchText.length >= 3 && checkboxName.Male) {
        gender = 'Male';
      } else {
        gender = 'Female';
      }
      return users.filter((user) => {
        const lowerCasedName = user.name.toLowerCase();
        return lowerCasedName.includes(searchText) && user.gender.includes(gender);
      });
    }
    if (searchText.length >= 3) {
      return users.filter((user) => {
        const lowerCasedName = user.name.toLowerCase();
        return lowerCasedName.includes(searchText);
      });
    }
    if (checkboxName.Male || checkboxName.Female) {
      let gender;
      if (checkboxName.Male && checkboxName.Female) {
        return users;
      } if (checkboxName.Male) {
        gender = 'Male';
      } else {
        gender = 'Female';
      }

      return users.filter((user) => user.gender.includes(gender));
    }

    return users;
  };

  const handleCheck = (e) => {
    const checkboxValue = e.target.name;
    if (e.target.checked === true) {
      setCheckboxName({ ...checkboxName, [checkboxValue]: true });
    } else {
      delete checkboxName[checkboxValue];
      setCheckboxName({ ...checkboxName });
    }
  };

  const handelSearch = (e) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue.toLowerCase());
  };

  return (
    <div className="users">
      <Filters onChangeTxt={handelSearch} onChangeCheck={handleCheck} />
      <Suspense fallback={<UserPlaceholder />}>
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
      </Suspense>

    </div>
  );
}
