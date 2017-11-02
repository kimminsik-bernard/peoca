import React, { Component } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

import { colors, styles } from './../assets';

const style = {
  info: {
    width: '100%',
  },
  infoContent: {
    margin: styles.spacing.lg,
    textAlign: 'center',
  },
};

const data = [
  { subject: '외향', A: 20, fullMark: 100 },
  { subject: '감각', A: 30, fullMark: 100 },
  { subject: '느낌', A: 50, fullMark: 100 },
  { subject: '판단', A: 60, fullMark: 100 },
  { subject: '내향', A: 80, fullMark: 100 },
  { subject: '직감', A: 70, fullMark: 100 },
  { subject: '생각', A: 50, fullMark: 100 },
  { subject: '인식', A: 40, fullMark: 100 },
];

class CharactorStyles extends Component {
  render() {
    return (
      <div style={style.info}>
        <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis/>
          <Radar name="Mike" dataKey="A" stroke={colors.primary1Color} fill={colors.primary1Color} fillOpacity={0.6}/>
        </RadarChart>
      </div>
    );
  }
}

export default CharactorStyles;
