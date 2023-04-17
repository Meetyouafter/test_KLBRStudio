import React, { useState, useEffect } from 'react';
import styles from './usersPage.module.scss';
import { IUser } from '../../services/users';

interface UsersPageProps {
  users: IUser[];
}

const DEFAULT_ELEMENTS_FOR_RENDER = 20;

const UsersPage = ({ users }: UsersPageProps) => {
  const [displayedElements, setDisplayedElements] = useState<IUser[]>([]);
  const [elementsCount, setElementsCount] = useState(0);
  const [isAllUsersRendered, setIsAllUsersRendered] = useState(false);

  const handleScroll = (e: any) => {
    const { scrollTop, scrollHeight } = e.target.documentElement;
    const screenHeight = window.innerHeight;

    if (scrollTop + screenHeight === scrollHeight && !isAllUsersRendered) {
      setElementsCount(prevElementsCount => prevElementsCount + DEFAULT_ELEMENTS_FOR_RENDER);
    }
  };

  useEffect(() => {
    if (!isAllUsersRendered) {
      setDisplayedElements(
        [
          ...displayedElements,
          ...users.slice(elementsCount, elementsCount + DEFAULT_ELEMENTS_FOR_RENDER),
        ],
      );
    }

    if (users.length === displayedElements.length) {
      setIsAllUsersRendered(true);
    }
  }, [users, elementsCount]);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={styles.container}>
      <header className={styles.container__title}>Users</header>
      <main className={styles.container__users}>
        {displayedElements.map(user => (
          <p key={user.id} className={styles.container__user}>
            {user.name}
            {' '}
            {user.surname}
          </p>
        ))}
      </main>
    </section>
  );
};

export default UsersPage;
