import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import { Container, Row, Col } from 'react-grid-system';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import BaseInfo from './BaseInfo';
import CharactorTabs from './CharactorTabs';
import { styles } from './../assets';

const style = {
  content: {
    paddingRight: styles.spacing.lg * 2,
    paddingLeft: styles.spacing.lg * 2,
    paddingTop: styles.spacing.lg * 2,
    paddingBottom: styles.spacing.lg * 2,
  },
}

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={12} md={8} offset={{ md: 2 }} style={style.content}>
            <Paper zDepth={3}>
              <AppBar
                title="Peoca"
                iconElementRight={<IconButton><MoreVertIcon /></IconButton>}
              />
              <BaseInfo/>
              <CharactorTabs/>
            </Paper>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
