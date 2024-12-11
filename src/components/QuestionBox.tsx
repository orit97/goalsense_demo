// src/components/QuestionBox.tsx
import React, { useState } from 'react';
import { User } from '../mockData';
import { fakeAI } from '../utils/FakeAI';

type QuestionBoxProps = {
    user: User;
};

const QuestionBox: React.FC<QuestionBoxProps> = ({ user }) => {
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');

    const handleAsk = () => {
        const aiResponse = fakeAI(question, user);
        setResponse(aiResponse);
        setQuestion(''); // Clear the question input
    };

    return (
        <div style={styles.container}>
            <h3>Ask a Question:</h3>
            <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask about your goals or progress..."
                style={styles.input}
            />
            <button onClick={handleAsk} style={styles.button}>
                Ask AI
            </button>
            {response && (
                <div style={styles.response}>
                    <strong>AI Response:</strong>
                    <p style={styles.responseText}>{response}</p>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        marginTop: '20px',
    },
    input: {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        fontSize: '16px',
        boxSizing: 'border-box' as 'border-box',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    response: {
        marginTop: '20px',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
    },
    responseText: {
        color: '#000', // Change text color to black
    },
};

export default QuestionBox;
