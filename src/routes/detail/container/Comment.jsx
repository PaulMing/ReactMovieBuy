import React, {Component} from 'react';
import PropTypes from 'prop-types';
import request from '../../../helpers/request';
import ScoreDistribute from '../components/ScoreDistribute';
import TagList from '../components/TagList';
import CommentList from '../components/CommentList';


// 详情页 -> 热门评论
class Comment extends Component {
  state = {
    tags: [],
    comments: [],
    current: '' // 当前选中的标签
  }
  // 获取数据
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    const { tags, list } = await request('/comment');
    this.setState({
      tags,
      comments: list,
      current: tags[0] ? tags[0].text : ''
    });
  }

  changeTag = value => {
    this.setState({
      current: value
    });
  }
  // 修改"赞数"
  toggleZan = id => {
    this.setState((prevState) => ({
      comments: prevState.comments.map(comment => {
        if (comment.id === id) {
          return {
            ...comment,
            isZan: !comment.isZan,
            zan: comment.isZan ? --comment.zan : ++comment.zan
          };
        }
        return {...comment};
      })
    }));
  }

  render() {
    const { tags, comments, current } = this.state;
    // 过滤：comments中每条评论都有tag属性
    const filterComments = comments.filter(comment => comment.tag === current);
    return (
      <div className="mComment">
        <ScoreDistribute />
        <div style={{ marginTop: 16 }}>
          <TagList data={tags} current={current} onClick={this.changeTag} />
        </div>
        <div style={{ marginTop: 16 }}>
          <CommentList data={filterComments} onClickZan={this.toggleZan} />
        </div>
      </div>
    );
  }
}

Comment.propTypes = {};

export default Comment;
