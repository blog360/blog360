import React, { Component } from 'react';
// import { View, Text, Image, StyleSheet, Animated } from 'react-vr';
import { connect } from 'react-redux';

import stylesheet from './content/stylesheet.js';
import { GrayPanel, RightIcon } from './_common';

export function Right2 (props) {
  const { page } = props;
  return (
    <GrayPanel styles={stylesheet.right_view}>
      {
        page && page.right_icons && page.right_icons.map(
          icon => (<RightIcon key={icon.icon_id} icon_info={icon} />)
        )
      }
    </GrayPanel>
  );
}

const mapState = (state) => {
  //const { page, loaded_panos } = state;
  return {
    page: state.page.page
  }
}

export default connect(mapState)(Right2);