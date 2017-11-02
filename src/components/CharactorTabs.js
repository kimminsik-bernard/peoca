import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

import CharactorStyles from './CharactorStyles';
import CharactorSkils from './CharactorSkils';
import CharactorProject from './CharactorProject';

class CharactorTabs extends Component {
  render() {
    return (
      <Tabs>
        <Tab label="스타일" >
          <CharactorStyles/>
        </Tab>
        <Tab label="스킬" >
          <CharactorSkils/>
        </Tab>
        <Tab label="프로젝트">
          <CharactorProject/>
        </Tab>
      </Tabs>
    );
  }
}

export default CharactorTabs;
