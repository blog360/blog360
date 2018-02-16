import React from 'react';
import { Text } from 'react-vr';

function _Text(props) {
  const { text, styles } = props;
  return (
    <Text style={ styles }>{text}</Text>
  );
};

export default _Text;