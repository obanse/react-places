import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        { id: 'u1', name: 'Oliver Banse', image: 'https://source.unsplash.com/300x200/?nature,water', places: 3 }
    ];

    return <UsersList items={ USERS } />;
};

export default Users;
