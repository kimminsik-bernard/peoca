import React, { Component } from 'react';

import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';

import aiIcon from '../assets/images/ai.jpeg';
import jsIcon from '../assets/images/js.jpeg';
import psIcon from '../assets/images/ps.jpeg';
import pythonIcon from '../assets/images/python.jpeg';

const skills = [
  {
    img: jsIcon,
    title: '자바스크립트',
    description: 'a high-level, dynamic, weakly typed, prototype-based, multi-paradigm, and interpreted programming language',
  },
  {
    img: pythonIcon,
    title: '파이썬',
    description: 'a widely used high-level programming language for general-purpose programming',
  },
  {
    img: psIcon,
    title: '포토샵',
    description: 'a raster graphics editor developed and published by Adobe Systems',
  },
  {
    img: aiIcon,
    title: '일러스트레이터',
    description: 'a vector graphics editor developed and marketed by Adobe Systems',
  },
];

class CharactorSkils extends Component {
  render() {
    return (
      <List style={{ marginTop: 30, marginBottom: 30 }}>
        {skills.map(skill => (
          <div>
              <ListItem
                disabled
                leftAvatar={<Avatar src={skill.img} />}
                primaryText={skill.title}
                secondaryText={<p>{skill.description}</p>}
                secondaryTextLines={3}
              />
            <Divider inset={true} />
          </div>
        ))}
      </List>
    );
  }
}

export default CharactorSkils;
