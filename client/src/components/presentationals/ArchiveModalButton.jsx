import React from 'react';

import { color, mobileSize, size } from '../../static';

import Loading from './Loading';

const styles = {
  button: {
    width: '50%',
    height: '2rem',
    border: 'none',
    color: color.font,
    fontSize: size['#5'],
    fontWeight: 'bold',
    borderRadius: '0.4rem',
    cursor: 'pointer',
    backgroundColor: color.main,
    outline: 'none',
    '@media (max-width: 768px)': {
      height: '8rem',
      fontSize: mobileSize['#4'],
      borderRadius: '1.4rem',
    },
  },
};

export default function ArchiveModalButton({
  isEditMode, isEditLoading, isDeleteLoading,
  handleEditButton, handleDeleteButton, handleEditCompleteButton,
}) {
  if (isEditMode) {
    return (
      <button
        type="button"
        onClick={handleEditCompleteButton}
        css={{ ...styles.button, width: '100%' }}
        disabled={isEditLoading}
      >
        {isEditLoading ? <Loading size={20} /> : '수정'}
      </button>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={handleEditButton}
        css={{ ...styles.button }}
      >
        수정
      </button>
      <button
        type="button"
        onClick={handleDeleteButton}
        css={{ ...styles.button, background: 'black' }}
        disabled={isDeleteLoading}
      >
        {isDeleteLoading ? <Loading size={20} /> : '삭제'}
      </button>
    </>
  );
}
