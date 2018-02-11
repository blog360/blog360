import React, { Component } from 'react';
// import { View, Text, Image, StyleSheet, Animated } from 'react-vr';
import { connect } from 'react-redux';

import { stylesheet } from './index.js';
import { GrayPanel, RightIcon } from './_common';

export function Right2 (props) {
  const { page } = props;
  console.log('2', page);
  console.log(page.rigth_icons);
  return (
    <GrayPanel styles={stylesheet.rightView}>
      {
        page && page.right_icons && page.right_icons.map(
          (icon) => (<RightIcon key={icon.id} icon_info={icon} />)
        )
      }
    </GrayPanel>
  );
}

const mapState = (state) => {
  //const { page, loaded_panos } = state;
  return {
    page: state.page
  }
}

export default connect(mapState)(Right2);