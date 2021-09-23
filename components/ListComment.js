import React, { useState } from 'react';
import listCommentStyle from '../styles/ListComment.module.css';

export default function PosComment(props) {
  const post = props.post;
  const [title, setTitle] = useState('');

  const addComment = (e) => {
    e.preventDefault();
    alert(post.id);
  };
  return (
    <div>
      <div className={`row ${listCommentStyle.container}`}>
        <div className={`col-2 ${listCommentStyle.img_div}`}>
          <img
            src="/efuse_user.png"
            className={`rounded-circle ${listCommentStyle.user}`}
          />
        </div>
        <div className={`col-10 ${listCommentStyle.add_comment_div}`}>
          <form onSubmit={(e) => addComment(e)}>
            <input
              type="text"
              className={`form-control ${listCommentStyle.add_comment}`}
              id="add_comment"
              placeholder="Add a comment"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </form>
        </div>
      </div>
      <div>
        <div className={`row ${listCommentStyle.container_two}`}>
          <div className={`col-2 ${listCommentStyle.img_div}`}>
            <img
              src="/efuse_user.png"
              className={`rounded-circle ${listCommentStyle.user}`}
            />
          </div>
          <div className={`col-10 ${listCommentStyle.comment_div}`}>
            <div
              className={`card text-center ${listCommentStyle.list_comment_card}`}
            >
              <div className={`card-body`}>
                <div className="row">
                  <div className={`col-12 ${listCommentStyle.profile_info}`}>
                    <p className={`${listCommentStyle.timestamp}`}>
                      11 minute ago
                    </p>
                    <h6 className={`${listCommentStyle.name}`}>
                      Patrick Shuff
                    </h6>
                    <p className={`${listCommentStyle.tag}`}>
                      Proffesional-Student
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className={`col-12 ${listCommentStyle.caption}`}>
                    <h6>{post.comment && post.comment.title}</h6>
                  </div>
                </div>
                <div className="row">
                  <div
                    className={`col-12 ${listCommentStyle.like_comment_count_div}`}
                  >
                    <span className={`${listCommentStyle.like_count}`}>
                      0 Likes
                      <span className={listCommentStyle.line}>|</span>
                    </span>

                    <span className={`${listCommentStyle.comment_count}`}>
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
                          <g fill="#666666">
                            <path d="M118.25,21.5c-20.7475,0 -32.25,14.97833 -32.25,14.97833c0,0 -11.5025,-14.97833 -32.25,-14.97833c-21.77233,0 -39.41667,17.64433 -39.41667,39.41667c0,29.89217 35.20267,58.85983 45.01383,68.01167c11.30183,10.535 26.65283,24.08 26.65283,24.08c0,0 15.351,-13.545 26.65283,-24.08c9.81117,-9.15183 45.01383,-38.1195 45.01383,-68.01167c0,-21.77233 -17.64433,-39.41667 -39.41667,-39.41667z" />
                          </g>
                        </g>
                      </svg>
                      &nbsp;
                      <span className={`${listCommentStyle.text_along_icon}`}>
                        Like
                      </span>
                      <span className={listCommentStyle.line}>|</span>
                    </span>
                    <span className={`${listCommentStyle.comment_count}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width={18}
                        height={15}
                        viewBox="0 0 172 172"
                        style={{ fill: '#000000' }}
                      >
                        <g
                          fill="none"
                          fillRule="nonzero"
                          stroke="none"
                          strokeWidth={1}
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          strokeMiterlimit={10}
                          strokeDasharray
                          strokeDashoffset={0}
                          fontFamily="none"
                          fontWeight="none"
                          fontSize="none"
                          textAnchor="none"
                          style={{ mixBlendMode: 'normal' }}
                        >
                          <path d="M0,172v-172h172v172z" fill="none" />
                          <g fill="#666666">
                            <path d="M135.60957,21.5084c-3.30899,0 -6.61797,1.25977 -9.1291,3.7709l-15.5707,15.5707l-78.35742,78.34902l-12.64805,32.88828l32.89668,-12.63965l0.31914,-0.32754l93.60059,-93.60059c5.02226,-5.02226 5.02226,-13.22754 0,-18.24141l-1.99883,-1.99883c-2.50273,-2.51113 -5.81172,-3.7709 -9.1123,-3.7709zM135.60957,25.7832c2.19199,0 4.38398,0.84824 6.08047,2.53633l1.99043,1.99043c3.37617,3.38457 3.37617,8.79316 0,12.16934l-1.78047,1.78047l-14.15976,-14.15977l1.78047,-1.78047c1.68809,-1.68809 3.88847,-2.53633 6.08887,-2.53633zM124.7,33.14024l14.15977,14.15976l-7.70977,7.70977l-14.15976,-14.15977zM113.95,43.89024l14.15977,14.15976l-75.09883,75.09883c-0.37793,-1.18418 -0.96582,-2.44395 -2.04082,-3.51895c-1.57891,-1.57891 -3.56934,-2.1584 -5.13144,-2.46914c-0.49551,-0.10078 -0.49551,-0.05039 -0.89863,-0.10078c-0.05039,-0.40313 0,-0.40313 -0.10078,-0.89863c-0.31074,-1.56211 -0.89024,-3.55254 -2.46914,-5.13145c-1.075,-1.075 -2.33476,-1.66289 -3.51894,-2.04082zM113.95,49.45c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM107.5,55.9c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM101.05,62.35c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM94.6,68.8c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM88.15,75.25c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM81.7,81.7c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM75.25,88.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM68.8,94.6c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM62.35,101.05c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM55.9,107.5c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM49.45,113.95c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM35.81934,122.69277c0.20156,0.03359 0.35274,0.04199 0.57949,0.08399c1.12539,0.22676 2.35996,0.72226 2.93105,1.29336c0.57109,0.57109 1.0666,1.80566 1.29336,2.93106c0.22676,1.12539 0.22676,1.99883 0.22676,1.99883v2.15h2.15c0,0 0.87344,0 1.99883,0.22676c1.12539,0.22676 2.35996,0.72226 2.93105,1.29336c0.57109,0.57109 1.0666,1.80566 1.29336,2.93106c0.04199,0.22676 0.05039,0.37793 0.08399,0.57949l-14.89883,5.72773l-4.3168,-4.3168z" />
                          </g>
                        </g>
                      </svg>
                      &nbsp;
                      <span className={`${listCommentStyle.text_along_icon}`}>
                        Edit
                      </span>
                      <span className={listCommentStyle.line}>|</span>
                    </span>
                    <span className={`${listCommentStyle.comment_count}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width={18}
                        height={15}
                        viewBox="0 0 172 172"
                        style={{ fill: '#000000' }}
                      >
                        <g
                          fill="none"
                          fillRule="nonzero"
                          stroke="none"
                          strokeWidth={1}
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          strokeMiterlimit={10}
                          strokeDasharray
                          strokeDashoffset={0}
                          fontFamily="none"
                          fontWeight="none"
                          fontSize="none"
                          textAnchor="none"
                          style={{ mixBlendMode: 'normal' }}
                        >
                          <path d="M0,172v-172h172v172z" fill="none" />
                          <g fill="#666666">
                            <path d="M71.08424,14.44531c-3.53111,-0.02879 -6.92644,1.35892 -9.42654,3.85273c-2.5001,2.49381 -3.89635,5.88563 -3.87646,9.4168v4.19922h-17.19974c-6.44548,0.00015 -11.89081,4.78131 -12.72467,11.17263c-0.83385,6.39132 3.20252,12.40952 9.43222,14.06336v82.76792c0,4.89192 1.79354,9.48547 4.92818,12.78203c3.11828,3.30545 7.45902,5.18255 12.0032,5.19063h63.55911c4.54439,-0.00798 8.88538,-1.88508 12.00386,-5.19063c3.13396,-3.29655 4.92752,-7.89011 4.92752,-12.78203v-82.76792c6.22969,-1.65384 10.26607,-7.67204 9.43222,-14.06336c-0.83385,-6.39132 -6.27918,-11.17248 -12.72467,-11.17263h-17.19974v-4.19922c0.0199,-3.53117 -1.37636,-6.92299 -3.87646,-9.4168c-2.5001,-2.49381 -5.89543,-3.88152 -9.42654,-3.85273zM71.07834,21.16406c0.00197,0 0.00394,0 0.00591,0h29.83151c1.74972,-0.0309 3.43734,0.64824 4.67792,1.88251c1.24058,1.23427 1.92831,2.91841 1.90632,4.66827v4.19922h-43v-4.19922c-0.02185,-1.74878 0.6651,-3.43194 1.90437,-4.66601c1.23927,-1.23407 2.92529,-1.91396 4.67397,-1.88477zM40.58151,38.63281h90.83698c3.3396,0 6.04688,2.70728 6.04688,6.04688c0,3.3396 -2.70728,6.04688 -6.04687,6.04688h-90.83698c-3.3396,0 -6.04687,-2.70728 -6.04687,-6.04687c0,-3.3396 2.70728,-6.04687 6.04688,-6.04687zM44.00781,57.44531h83.98438v82.47266c0,6.31999 -4.4681,11.25391 -10.21263,11.25391h-63.55911c-5.74453,0 -10.21263,-4.93391 -10.21263,-11.25391zM66.17969,66.41458c-1.85533,0 -3.35937,1.50404 -3.35937,3.35938v63.49219c0,1.85533 1.50404,3.35938 3.35938,3.35938c1.85533,0 3.35938,-1.50404 3.35938,-3.35937v-63.49219c0,-1.85533 -1.50404,-3.35937 -3.35937,-3.35937zM86,66.41458c-1.85533,0 -3.35937,1.50404 -3.35937,3.35938v63.49219c0,1.85533 1.50404,3.35938 3.35938,3.35938c1.85533,0 3.35938,-1.50404 3.35938,-3.35937v-63.49219c0,-1.85533 -1.50404,-3.35937 -3.35937,-3.35937zM105.82031,66.41458c-1.85533,0 -3.35937,1.50404 -3.35937,3.35938v63.49219c0,1.85533 1.50404,3.35938 3.35938,3.35938c1.85533,0 3.35938,-1.50404 3.35938,-3.35937v-63.49219c0,-1.85533 -1.50404,-3.35937 -3.35937,-3.35937z" />
                          </g>
                        </g>
                      </svg>
                      &nbsp;
                      <span className={`${listCommentStyle.text_along_icon}`}>
                        Delete
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
