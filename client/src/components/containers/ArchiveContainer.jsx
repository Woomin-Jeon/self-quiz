import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setArchiveQuizModal, setOverlay, setQuizForm } from '../../slice';

import { convertTagsToTagString } from '../../util';

import ArchiveItems from '../presentationals/ArchiveItems';
import ArchiveLayout from '../layouts/ArchiveLayout';
import BackButtonContainer from './BackButtonContainer';

export default function ArchiveContainer() {
  const dispatch = useDispatch();
  const quizzes = useSelector((state) => state.quizzes);

  const handleItemClick = (quiz) => () => {
    const {
      question, answer, lastSolved, layer, tags, _id,
    } = quiz;

    const tagString = convertTagsToTagString(tags);

    dispatch(setArchiveQuizModal({
      question, answer, lastSolved, layer, tagString, _id,
    }));
    dispatch(setQuizForm({ question, answer, tagString }));
    dispatch(setOverlay(true));
  };

  return (
    <>
      <BackButtonContainer />
      <ArchiveLayout>
        <ArchiveItems
          quizzes={quizzes}
          handleItemClick={handleItemClick}
        />
      </ArchiveLayout>
    </>
  );
}
