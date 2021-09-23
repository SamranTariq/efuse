import React, { useState } from 'react';
import createPostStyle from '../styles/CreatePost.module.css';
import ListPost from './PostList';

const postsArray = [];

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [render, setRender] = useState(true);

  const Post = () => {
    const object = {
      id: new Date().valueOf(),
      title: title,
      like: 0,
      comment: [],
      createdAt: new Date(),
    };
    postsArray.push(object);
    setTitle('');
  };

  const Action = (text, id) => {
    if (text === 'like') {
      const objIndex = postsArray.findIndex((obj) => obj.id == id);
      postsArray[objIndex].like = postsArray[objIndex].like + 1;
    }
    if (text === 'unlike') {
      const objIndex = postsArray.findIndex((obj) => obj.id == id);
      postsArray[objIndex].like = postsArray[objIndex].like - 1;
    }
  };
  return (
    <>
      <div className={`card text-center ${createPostStyle.post_card}`}>
        <div className={`card-body`}>
          <div className="row">
            <div className={`col-2 ${createPostStyle.img_div}`}>
              <img
                src="/efuse_user.png"
                className={`rounded-circle ${createPostStyle.user}`}
              />
            </div>
            <div className="col-10">
              <textarea
                className={`${createPostStyle.text_area}`}
                id="exampleFormControlTextarea1"
                rows={3}
                // defaultValue={''}
                placeholder="What is on your mind?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div
          className={`card-footer text-muted ${createPostStyle.post_footer}`}
        >
          <div className="row">
            <div className="col-6">
              <button className={`${createPostStyle.photo_video_button}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width={18}
                  height={18}
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
                    <g fill="#ffffff">
                      <path d="M21.5,21.5c-7.90483,0 -14.33333,6.4285 -14.33333,14.33333v71.66667c0,7.90483 6.4285,14.33333 14.33333,14.33333h93.16667c7.90483,0 14.33333,-6.4285 14.33333,-14.33333v-71.66667c0,-7.90483 -6.4285,-14.33333 -14.33333,-14.33333zM143.33333,50.16667v86h-107.5v14.33333h107.5c7.83362,0 14.33333,-6.49972 14.33333,-14.33333v-86zM87.03581,64.41602l31.7041,43.08398h-101.31315l25.11133,-32.01205l18.74251,22.56381z" />
                    </g>
                  </g>
                </svg>
                &nbsp;Photo/Video
              </button>
            </div>
            <div className={`col-6 ${createPostStyle.post_it_button_div}`}>
              <button
                className={`${createPostStyle.post_it_button}`}
                onClick={() => Post()}
              >
                Post It
              </button>
            </div>
          </div>
        </div>
      </div>
      {postsArray.length > 0 &&
        postsArray.map((post, index) => {
          return <ListPost post={post} key={index} Action={Action} />;
        })}
    </>
  );
}
