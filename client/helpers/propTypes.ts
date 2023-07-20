import { Dispatch, Key, SetStateAction } from 'react';
import { UsersType } from './allTypes';

export interface UserListProps {
  setFormIsOpen: Dispatch<SetStateAction<boolean>>;
  setAllUsers: Dispatch<SetStateAction<UsersType>>;
  users: UsersType;
}

export interface CreateUserProps {
  className: String;
  setAllUsers: Dispatch<SetStateAction<any>>;
  setFormIsOpen: Dispatch<SetStateAction<boolean>>;
  setNotification: Dispatch<SetStateAction<string>>;
}

export interface MenuProps {
  className: String;
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface DeteteUserBtnProps {
  setAllUsers: Dispatch<SetStateAction<UsersType>>;
  id: Key;
}
