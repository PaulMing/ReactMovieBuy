import React, {Component} from 'react';
import request from '../../helpers/request';
import BaseInfo from './components/BaseInfo';
import ScoreSummary from './components/ScoreSummary';
import CollapsibleText from '../../components/CollapsibleText';
import Artist from './components/Artist';
import Comment from './container/Comment';
import LineLink from '../../components/LineLink';
import ImageSlider from './container/ImageSlider';
import { Link } from 'react-router-dom';
import './Index.css';


// 详情页
class Detail extends Component {
  state = {
    artist: [],
    showImage: false
  }
  // 获取数据
  componentDidMount() {
    this.getArtist();
  }
  getArtist = async () => {
    const data = await request('/artist');
    if (data && data.length) {
      this.setState({
        artist: data
      });
    }
  }
  // 切换轮播图浮层
  toggleImage = () => {
    this.setState({
      showImage: !this.state.showImage
    });
  }

  render() {
    const { artist } = this.state;
    return (
      <div className="detail">
        <div className="detail__top">
          <div className="tOperator">
            <div className="tOperator__icon tOperator__icon--back" onClick={() => { window.history.back(); }} />
            <div className="tOperator__icon tOperator__icon--share" />
          </div>
          <BaseInfo onShowImage={this.toggleImage} />
        </div>
        <div className="detail__content">
          <div className="detail__module">
            <ScoreSummary />
          </div>
          <div className="detail__module">
            <CollapsibleText height={84}>
              <div className="detail__overview">
                唐仁（王宝强 饰）为巨额奖金欺骗秦风（刘昊然 饰）到纽约参加世界名侦探大赛，然而随着和世界各国侦探们啼笑皆非的较量，两人却发现了隐藏在这次挑战背后的更大秘展开,两人却发现了隐藏在这次挑战背后的更大秘展开
              </div>
            </CollapsibleText>
          </div>
          <div className="detail__module">
            <h3 className="detail__moduleTitle">演职人员</h3>
            <Artist data={artist} />
          </div>
          <div className="detail__module">
            <h3 className="detail__moduleTitle">热门评论</h3>
            <Comment />
          </div>
          <div className="detail__module">
            <h3 className="detail__moduleTitle">影片资料</h3>
            <div>
              <LineLink href="xx" title="幕后花絮" />
              <LineLink href="xx" title="台词精选" />
              <LineLink href="xx" title="出品发行" />
            </div>
          </div>
        </div>
        <Link to="/seat" className="detail__buyBtn">选座购票</Link>
        { this.state.showImage && <ImageSlider onClose={this.toggleImage} /> }
      </div>
    );
  }
}

// Detail.propTypes = {};
export default Detail;
