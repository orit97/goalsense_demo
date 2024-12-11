// src/App.tsx
import React, { useState } from 'react';
import { mockUsers, User } from './mockData';
import GoalList from './components/GoalList';
import UserSwitcher from './components/UserSwitcher';
import QuestionBox from './components/QuestionBox';

const App: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<User>(mockUsers[0]);

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1>GoalSense</h1>
                <p>Streamline your goals, track progress, and plan smarter.</p>
            </header>
            <main>
                <h2>Welcome, {currentUser.name}!</h2>
                <p>Role: {currentUser.role}</p>

                {currentUser.role === 'employee' && currentUser.goals && (
                    <GoalList goals={currentUser.goals} />
                )}
                {currentUser.role === 'leader' && currentUser.team && (
                    <div>
                        <h3>Your Team:</h3>
                        {currentUser.team.map((member) => (
                            <div key={member.id}>
                                <h4>{member.name}'s Goals:</h4>
                                <GoalList goals={member.goals || []} />
                            </div>
                        ))}
                    </div>
                )}

                <QuestionBox user={currentUser} />
            </main>
            <UserSwitcher
                users={mockUsers}
                onSwitch={(user) => setCurrentUser(user)}
            />
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
    },
    header: {
        textAlign: 'center',
        marginBottom: '30px',
    },
};

export default App;
