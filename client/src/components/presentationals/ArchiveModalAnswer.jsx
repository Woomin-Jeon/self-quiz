import React from 'react';

import { mobileSize, size } from '../../static';

const styles = {
  text: {
    fontWeight: 'bold',
    fontSize: size['#4'],
    marginTop: '1rem',
    '@media (max-width: 768px)': {
      fontSize: mobileSize['#3'],
    },
  },
  textarea: {
    display: 'block',
    width: '100%',
    height: '16rem',
    fontSize: size['#5'],
    padding: '0.7rem',
    boxSizing: 'border-box',
    borderRadius: '0.4rem',
    backgroundColor: 'white',
    resize: 'none',
    '@media (max-width: 768px)': {
      height: '36rem',
      fontSize: mobileSize['#4'],
    },
  },
};

export default function ArchiveModalAnswer({ isEditMode, quizForm, onChange }) {
  const additionalCSS = isEditMode ? {} : { border: 'none' };
  const disabledProp = isEditMode ? '' : 'disabled';

  return (
    <>
      <div css={styles.text}>정답</div>
      <textarea
        value={quizForm.answer}
        onChange={onChange}
        css={[styles.textarea, additionalCSS]}
        disabled={disabledProp}
      />
    </>
  );
}
