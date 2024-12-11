// src/components/GoalList.tsx
import React from 'react';
import { Goal } from '../mockData';

type GoalListProps = {
    goals: Goal[];
};

const GoalList: React.FC<GoalListProps> = ({ goals }) => (
    <ul style={styles.list}>
        {goals.map((goal) => (
            <li key={goal.id} style={styles.listItem}>
                <strong>{goal.title}</strong> - <em>{goal.status}</em>
            </li>
        ))}
    </ul>
);

const styles = {
    list: {
        listStyleType: 'none',
        padding: 0,
    },
    listItem: {
        padding: '10px 0',
        borderBottom: '1px solid #ddd',
    },
};

export default GoalList;
