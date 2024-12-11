// src/utils/FakeAI.ts
import { Goal, User } from '../mockData';

export function fakeAI(question: string, user: User): string {
    // Simple response logic based on the user's role and mock data
    if (user.role === 'employee') {
        if (question.toLowerCase().includes('goals')) {
            return `Here are your current goals:\n${user.goals
                ?.map((goal) => `- ${goal.title} (${goal.status})`)
                .join('\n')}`;
        } else if (question.toLowerCase().includes('progress')) {
            const completedGoals = user.goals?.filter((goal) => goal.status === 'Completed').length || 0;
            const totalGoals = user.goals?.length || 0;
            return `You have completed ${completedGoals} out of ${totalGoals} goals. Keep going!`;
        }
    } else if (user.role === 'leader') {
        if (question.toLowerCase().includes('team')) {
            const teamProgress = user.team
                ?.map(
                    (member) =>
                        `${member.name}: ${member.goals?.filter((goal) => goal.status === 'Completed').length || 0} / ${
                            member.goals?.length || 0
                        } goals completed`
                )
                .join('\n');
            return `Here is your team's progress:\n${teamProgress}`;
        }
    }
    return "I'm not sure how to answer that. Try asking about your goals or progress.";
}
