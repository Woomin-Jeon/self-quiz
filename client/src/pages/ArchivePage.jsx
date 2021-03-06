import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadQuizzes } from '../slice';

import BackButtonContainer from '../components/containers/BackButtonContainer';
import ArchiveModalContainer from '../components/containers/ArchiveModalContainer';
import ArchiveContainer from '../components/containers/ArchiveContainer';

export default function ArchivePage() {
  const dispatch = useDispatch();
  const { quizzes, modalShowing } = useSelector((state) => state);

  useEffect(() => {
    if (quizzes.length === 0) {
      dispatch(loadQuizzes());
    }
  }, []);

  return (
    <>
      <BackButtonContainer />
      {modalShowing.archive && <ArchiveModalContainer isEditMode={modalShowing.editting} />}
      <ArchiveContainer />
    </>
  );
}
