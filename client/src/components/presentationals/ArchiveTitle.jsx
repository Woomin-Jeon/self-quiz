import React from 'react';

import { color, size } from '../../static';

const styles = {
  title: {
    fontSize: size.smallTitle,
    fontWeight: 'bold',
    color: color.font,
    margin: '10rem 0 3rem 0',
    width: '100%',
    '@media (max-width: 768px)': {
      margin: '20rem 0 3rem 0',
    },
  },
};

export default function ArchiveTitle() {
  return (
    <div css={styles.title}>아카이브</div>
  );
}
