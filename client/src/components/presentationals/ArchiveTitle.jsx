import React from 'react';

import { color, mobileSize, size } from '../../static';

const styles = {
  title: {
    fontSize: size['#3'],
    fontWeight: 'bold',
    color: color.font,
    margin: '10rem 0 3rem 0',
    width: '100%',
    '@media (max-width: 768px)': {
      margin: '20rem 0 3rem 0',
      fontSize: mobileSize['#3'],
    },
  },
};

export default function ArchiveTitle() {
  return (
    <div css={styles.title}>아카이브</div>
  );
}
