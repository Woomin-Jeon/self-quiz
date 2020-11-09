import React from 'react';

import TodaysQuizButton from './TodaysQuizButton';
import Textarea from './Textarea';

const styles = {
  layout: {
    position: 'absolute',
    right: '0',
    bottom: '0',
    width: '100%',
    height: '47rem',
    opacity: '0.8',
    background: '#000000',
  },
  message: {
    fontSize: '2rem',
    fontWeight: 'bold',
    width: 'max-content',
    padding: '0.5rem',
    margin: '20rem auto',
    borderBottom: '3px solid white',
    color: 'white',
  },
  question: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    height: '10rem',
  },
  answer: {
    width: '100%',
    height: '12rem',
    background: 'white',
    fontSize: '1.2rem',
    marginBottom: '2rem',
    resize: 'none',
    color: 'black',
    border: '3px solid white',
    boxSizing: 'border-box',
  },
  box: {
    width: '100%',
    height: '7rem',
    fontSize: '1.2rem',
    padding: '1rem',
    boxSizing: 'border-box',
  },
  count: {
    textAlign: 'end',
    marginBottom: '1rem',
  },
};

export default function TodaysQuizEmpty() {
  const dummyQuiz = {
    question: '"오늘의 문제"라는 웹 어플리케이션을 만든 이유는 무엇인지 설명하시오.',
    answer: '주기적인 복습을 통해 학습 능률을 높이고자 "오늘의 문제"라는 프로젝트를 '
    + '진행하게 되었습니다. "오늘의 문제"는 그날그날 복습해야하는 지식들을 망각곡선을 '
    + '토대로 자동적으로 보여주어 주기적인 복습을 강요하는 웹 어플리케이션입니다.',
  };

  return (
    <>
      <div css={styles.layout}>
        <div css={styles.message}>오늘의 모든 문제를 다 풀었습니다</div>
      </div>
      <div css={styles.count}>남은 문제: 0</div>
      <div css={styles.question}>Q. {dummyQuiz.question}</div>
      <Textarea
        value={`A. ${dummyQuiz.answer}`}
        emotion={styles.answer}
        disabled="disabled"
      />
      <Textarea
        emotion={styles.box}
        placeholder="정답을 입력하세요."
      />
      <div>정답을 생각만하는 것과 직접 글로 작성하여 끄집어내는 것은 다릅니다. 직접 입력하신 뒤 정답을 확인하시길 추천드립니다.</div>
      <TodaysQuizButton />
    </>
  );
}