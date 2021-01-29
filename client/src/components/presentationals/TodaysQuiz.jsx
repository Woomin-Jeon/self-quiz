import React from 'react';

import TodaysQuizAnswer from './TodaysQuizAnswer';

const styles = {
  layout: {
    position: 'relative',
    top: '20%',
  },
  question: {
    textAlign: 'center',
    color: 'white',
    fontSize: '3rem',
    marginBottom: '3rem',
  },

  button: {
    display: 'block',
    margin: '0 auto',
    padding: '0.5rem 1rem',
    backgroundColor: '#2a5582',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default function TodaysQuiz({
  quiz, answerOn, onAnswerClick, onPassClick, onKeepClick, onFailClick,
}) {
  return (
    <div css={styles.layout}>
      <div css={styles.question}>Q. {quiz.question}</div>
      {answerOn
        ? (
          <TodaysQuizAnswer
            quiz={quiz}
            onPassClick={onPassClick}
            onKeepClick={onKeepClick}
            onFailClick={onFailClick}
          />
        )
        : (
          <button
            type="button"
            css={styles.button}
            onClick={onAnswerClick}
          >
            정답 확인하기
          </button>
        )}
    </div>
  );
}
