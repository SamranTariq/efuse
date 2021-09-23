import React, { useState } from 'react';
import CommentList from './ListComment';
import listPostStyle from '../styles/ListPost.module.css';

export default function ListPost(props) {
  const post = props.post;
  const [showComments, setShowComments] = useState(false);
  const [like, setLike] = useState(false);

  const toggleComment = () => {
    setShowComments(!showComments);
    props.Action('comment', {});
  };
  const toggleLike = (id) => {
    if (like) {
      props.Action('unlike', id);
      document.getElementById('like').style.fill = '#666666';
      setLike(false);
    } else {
      props.Action('like', id);
      document.getElementById('like').style.fill = 'blue';
      setLike(true);
    }
  };
  return (
    <div className={`card text-center ${listPostStyle.post_list_card}`}>
      <div className={`card-body`}>
        <div className="row">
          <div className={`col-2 ${listPostStyle.img_div}`}>
            <img
              src="/efuse_user.png"
              className={`rounded-circle ${listPostStyle.user}`}
            />
          </div>
          <div className={`col-8 ${listPostStyle.profile_info}`}>
            <h6 className={`${listPostStyle.name}`}>Patrick Shuff</h6>
            <p className={`${listPostStyle.location}`}>AA OH, USA</p>
            <p className={`${listPostStyle.timestamp}`}>1 minute ago</p>
          </div>
        </div>
        <div className="row">
          <div className={`col-12 ${listPostStyle.caption}`}>
            <h6>{post.title}</h6>
          </div>
        </div>
        <div className="row">
          <div className={`col-12 ${listPostStyle.like_comment_count_div}`}>
            <span className={`${listPostStyle.like_count}`}>
              {post.like} Likes
            </span>
            <span className={`${listPostStyle.comment_count}`}>
              {post.comment && post.comment.length} Comment
            </span>
          </div>
        </div>
      </div>
      <div className={`card-footer text-muted ${listPostStyle.post_footer}`}>
        <div className="row">
          <div className="col-12">
            <span
              className={`${listPostStyle.like}`}
              onClick={() => toggleLike(post.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={22}
                height={22}
                viewBox="0 0 172 172"
                style={{ fill: '#000000' }}
              >
                <g
                  fill="none"
                  fillrule="nonzero"
                  stroke="none"
                  strokewidth={1}
                  strokelinecap="butt"
                  strokelinejoin="miter"
                  strokemiterlimit={10}
                  strokedasharray
                  strokedashoffset={0}
                  fontfamily="none"
                  fontweight="none"
                  fontsize="none"
                  textanchor="none"
                  style={{ mixBlendMode: 'normal' }}
                >
                  <path d="M0,172v-172h172v172z" fill="none" />
                  <g id="like" fill="#666666">
                    <path d="M118.25,21.5c-20.7475,0 -32.25,14.97833 -32.25,14.97833c0,0 -11.5025,-14.97833 -32.25,-14.97833c-21.77233,0 -39.41667,17.64433 -39.41667,39.41667c0,29.89217 35.20267,58.85983 45.01383,68.01167c11.30183,10.535 26.65283,24.08 26.65283,24.08c0,0 15.351,-13.545 26.65283,-24.08c9.81117,-9.15183 45.01383,-38.1195 45.01383,-68.01167c0,-21.77233 -17.64433,-39.41667 -39.41667,-39.41667z" />
                  </g>
                </g>
              </svg>
              &nbsp;Likes
            </span>
            <span
              className={`${listPostStyle.comment}`}
              onClick={() => toggleComment()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={22}
                height={22}
                viewBox="0 0 172 172"
                style={{ fill: '#000000' }}
              >
                <g
                  fill="none"
                  fillrule="nonzero"
                  stroke="none"
                  strokewidth={1}
                  strokelinecap="butt"
                  strokelinejoin="miter"
                  strokemiterlimit={10}
                  strokedasharray
                  strokedashoffset={0}
                  fontfamily="none"
                  fontweight="none"
                  fontsize="none"
                  textanchor="none"
                  style={{ mixBlendMode: 'normal' }}
                >
                  <path d="M0,172v-172h172v172z" fill="none" />
                  <g fill="#666666">
                    <path d="M86,14.33333c-39.517,0 -71.66667,28.939 -71.66667,64.5c0,37.6895 36.12,68.14067 78.83333,64.16317v22.50333l11.03667,-7.08067c8.11267,-5.203 48.7835,-33.16733 53.05483,-72.74167c0.26517,-2.25033 0.4085,-4.5365 0.4085,-6.84417c0,-35.561 -32.14967,-64.5 -71.66667,-64.5zM64.5,86h-14.33333v-14.33333h14.33333zM93.16667,86h-14.33333v-14.33333h14.33333zM121.83333,86h-14.33333v-14.33333h14.33333z" />
                  </g>
                </g>
              </svg>
              &nbsp;Comments
            </span>
          </div>
        </div>
        {showComments && <CommentList post={post} />}
      </div>
    </div>
  );
}
