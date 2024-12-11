export type Goal = {
    id: number;
    title: string;
    status: 'Pending' | 'In Progress' | 'Completed';
};

export type User = {
    id: number;
    name: string;
    role: 'employee' | 'leader';
    goals?: Goal[];
    team?: User[];
};

export const mockUsers: User[] = [
    {
        id: 1,
        name: 'Alice',
        role: 'employee',
        goals: [
            { id: 1, title: 'Complete project documentation', status: 'In Progress' },
            { id: 2, title: 'Update AI integration progress', status: 'Completed' },
            { id: 3, title: 'Schedule next 1:1 meeting', status: 'Pending' },
        ],
    },
    {
        id: 2,
        name: 'Bob',
        role: 'leader',
        team: [
            {
                id: 1,
                name: 'Alice',
                role: 'employee',
                goals: [
                    { id: 1, title: 'Complete project documentation', status: 'In Progress' },
                    { id: 2, title: 'Update AI integration progress', status: 'Completed' },
                ],
            },
        ],
    },
];
