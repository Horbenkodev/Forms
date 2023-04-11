/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
  useState, lazy, Suspense,
} from 'react';
import users from '../data/users.json';
import '../css/user.css';
import Filters from '../components/Filters';
import UserPlaceholder from '../components/UserPlaceholder';

const UserItem = lazy(() => import('../components/UserItem'));

export default function Users() {
  const [searchText, setSearchText] = useState('');
  const [checkboxName, setCheckboxName] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 20;

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

  const paginationUsers = () => {
    const filteredList = filteredUsers();
    const lastUser = currentPage * usersPerPage;
    const firstUser = lastUser - usersPerPage;

    return filteredList.slice(firstUser, lastUser);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
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
          {paginationUsers().map((user) => (
            <UserItem
              key={user.id}
              avatar={user.avatar}
              gender={user.gender}
              name={user.name}
            />
          ))}
        </div>
      </Suspense>
      <div className="paginationBtn">
        <button type="button" onClick={prevPage} disabled={currentPage === 1}>Prev</button>
        <button type="button" onClick={nextPage} disabled={currentPage === Math.ceil(filteredUsers().length / usersPerPage)}>Next</button>
      </div>
    </div>
  );
}
