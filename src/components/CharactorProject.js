import React, { Component } from 'react';

import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const projectsOngoing = [
  {
    title: "삼천원",
    description: "지속가능한 덕질, 지속가능한 문화예술을 위한 펀딩 플랫폼",
    link: "https://3000won.com",
  },
  {
    title: "홈페이지",
    description: "만화가. 일러스트레이터. + 사진찍는 것과 영상편집하는 것을 좋아하는 창작자. ​새로운 걸 '시도'하는 콘텐츠 제작자.",
    link: "http://skyseado.wixsite.com/seado/blank-2",
  },
];

const projectsDone = [
  {
    title: "n명의 사회혁신가",
    description: "2016년 11월 21일부터 한 번도 빠짐없이 두 달 동안 매주 모인 혁신덕후들은 공감하고, 어울리고, 흩어졌습니다. 556명이 참여해 72시간 만에 340개 열쇳말을 담은 시국선언을 작성하고, 세 차례에 걸친 오픈 테이블을 통해 18가지 질문을 도출해 혁신의 방향을 제시했습니다. 그리고 이 과정이 곧 하나의 ‘혁신’이 되었습니다.",
    link: "http://n-innovators.com",
  },
  {
    title: "스토리펀딩 '듣도 보도 못한 정치' 일러트스 작업",
    description: "세계 곳곳서 듣도 보도 못했던 새로운 방식의 정치가 출현 중입니다. 풀뿌리 조직과 IT기술로 무장한 시민들이 직접 정치의 주인공이 되어 정책을 제안하고 새로운 네트워크형 정당을 만드는 일들이 벌어지고 있습니다. 이러한 해외각국의 풀뿌리운동, 정치혁신 사례를 소개합니다.",
    link: "https://storyfunding.daum.net/project/306",
  },
  {
    title: "WAGL 선거법/정당법 개혁 프로젝트 '와그르르뉴스'",
    description: "왜 우리는 찍고싶어도 찍지 못하는 걸까요. 사표, 전략투표, 나의 한 표... 이것이 투표? 당신의 고민을 해결할 속 시원한 한 발! 텐! 텐! 텐! 지금 쏴드립니다!",
    link: "https://www.youtube.com/watch?v=FuRo3z0B5FU",
  },
];

class CharactorProject extends Component {
  render() {
    return (
      <List>
        <Subheader style={{ marginTop: 30 }}>진행중인 프로젝트</Subheader>
        {projectsOngoing.map(project => (
          <div>
            <a href={project.link} target="blank">
              <ListItem
                primaryText={project.title}
                secondaryText={<p>{project.description}</p>}
                secondaryTextLines={3}
              />
            </a>
            <Divider inset={true} />
          </div>
        ))}
        <Divider />
        <Subheader style={{ marginTop: 30 }}>완료한 프로젝트</Subheader>
        {projectsDone.map(project => (
          <div>
            <a href={project.link} target="blank">
              <ListItem
                primaryText={project.title}
                secondaryText={<p>{project.description}</p>}
                secondaryTextLines={3}
              />
            </a>
            <Divider inset={true} />
          </div>
        ))}
      </List>
    );
  }
}

export default CharactorProject;
