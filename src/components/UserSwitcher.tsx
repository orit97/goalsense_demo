// src/components/UserSwitcher.tsx
import React from 'react';
import { User } from '../mockData';

type UserSwitcherProps = {
    users: User[];
    onSwitch: (user: User) => void;
};

const UserSwitcher: React.FC<UserSwitcherProps> = ({ users, onSwitch }) => (
    <div style={styles.container}>
        <h3>Switch User:</h3>
        {users.map((user) => (
            <button
                key={user.id}
                onClick={() => onSwitch(user)}
                style={styles.button}
            >
                {user.name} ({user.role})
            </button>
        ))}
    </div>
);

const styles = {
    container: {
        marginTop: '20px',
    },
    button: {
        marginRight: '10px',
        padding: '10px 20px',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#fff',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default UserSwitcher;
