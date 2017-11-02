import React, { Component } from 'react';
import { Card, CardMedia } from 'material-ui/Card';

import profile from './../assets/images/profile_card.jpeg';

const style = {
  info: {
    width: '100%',
  },
};

class BaseInfo extends Component {
  render() {
    return (
      <Card style={style.info}>
        <CardMedia>
          <img src={profile} style={{ width: '100%' }} alt="profile"/>
        </CardMedia>
      </Card>
    );
  }
}

export default BaseInfo;
