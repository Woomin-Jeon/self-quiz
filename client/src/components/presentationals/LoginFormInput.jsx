import React from 'react';

import { color, size } from '../../static';

const style = {
  display: 'block',
  fontSize: size.smallText,
  width: '96%',
  height: '3rem',
  border: 'none',
  borderBottom: `1px solid ${color.light}`,
  paddingLeft: '1rem',
};

export default function LoginFormInput({
  value, onChange, placeholder = '', type = 'text',
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      css={style}
      placeholder={placeholder}
    />
  );
}
