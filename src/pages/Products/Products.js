import React from 'react';
import { Link } from 'react-router-dom';
import css from './Products.module.scss';

function Products() {
  return (
    <div>
      <div className={css.container}>
        <nav>임시nav</nav>
        <div className={css.product_top_banner}>
          <div className={css.product_top_banner_bg}>
            <div className="banner_text">
              <p className={css.banner_title}>배쓰</p>
              <p className={css.banner_sub}>
                당신에게 향기로운 입욕을 선물합니다
              </p>
            </div>
          </div>
        </div>
        <div className={css.products}>
          <div className={css.contents}>
            <div className={css.list_header}>
              <h2>배쓰</h2>
              <select
                name="product"
                id="product-select"
                className={css.select_box}
              >
                <option value="">추천순</option>
                <option value="">판매인기순</option>
                <option value="">낮은가격순</option>
                <option value="">높은가격순</option>
                <option value="">리뷰많은순</option>
              </select>
            </div>
            <ul className={css.list_category}>
              <li>
                <Link to="">
                  <span className={css.on}>전체</span>
                </Link>
                <span className={css.on}>(75)</span>
              </li>
              <li>
                <Link to="">
                  <span>배쓰 밤</span>
                </Link>
                <span>(34)</span>
              </li>
              <li>
                <Link to="">
                  <span>버블 바</span>
                </Link>
                <span>(34)</span>
              </li>
              <li>
                <Link to="">
                  <span>배쓰 오일</span>
                </Link>
                <span>(34)</span>
              </li>
            </ul>
            <article className={css.product_container}>
              <div className={css.product_box}>
                <ul className={css.product_list}>
                  <li>
                    <div className={css.prd_img}>
                      <Link to="">
                        <img
                          src="https://www.lush.co.kr/data/goods/22/04/14/1000002148/1000002148_main_085.jpg"
                          alt="상품명"
                        />
                      </Link>
                    </div>
                    <div className={css.prd_label}>
                      <Link to="">
                        <span className={css.prd_label_new}>NEW</span>
                      </Link>
                      <Link to="">
                        <span className={css.prd_label_vegan}>VEGAN</span>
                      </Link>
                    </div>
                    <div className={css.prd_name}>
                      <Link to="">
                        <div>라이트 더 나이트</div>
                        <div className={css.prd_hashtag}>
                          <span>#배쓰밤</span>
                          <span>#EID</span>
                        </div>
                      </Link>
                    </div>
                    <div className={css.prd_price}>
                      <span>₩</span>
                      <span>19,000</span>
                    </div>
                  </li>
                  <li>
                    <div className={css.prd_img}>
                      <Link to="">
                        <img
                          src="https://www.lush.co.kr/data/goods/22/04/14/1000002148/1000002148_main_085.jpg"
                          alt="상품명"
                        />
                      </Link>
                    </div>
                    <div className={css.prd_label}>
                      <Link to="">
                        <span className={css.prd_label_new}>NEW</span>
                      </Link>
                      <Link to="">
                        <span className={css.prd_label_vegan}>VEGAN</span>
                      </Link>
                    </div>
                    <div className={css.prd_name}>
                      <Link to="">
                        <div>라이트 더 나이트</div>
                        <div className={css.prd_hashtag}>
                          <span>#배쓰밤</span>
                          <span>#EID</span>
                        </div>
                      </Link>
                    </div>
                    <div className={css.prd_price}>
                      <span>₩</span>
                      <span>19,000</span>
                    </div>
                  </li>
                  <li>
                    <div className={css.prd_img}>
                      <Link to="">
                        <img
                          src="https://www.lush.co.kr/data/goods/22/04/14/1000002148/1000002148_main_085.jpg"
                          alt="상품명"
                        />
                      </Link>
                    </div>
                    <div className={css.prd_label}>
                      <Link to="">
                        <span className={css.prd_label_new}>NEW</span>
                      </Link>
                      <Link to="">
                        <span className={css.prd_label_vegan}>VEGAN</span>
                      </Link>
                    </div>
                    <div className={css.prd_name}>
                      <Link to="">
                        <div>라이트 더 나이트</div>
                        <div className={css.prd_hashtag}>
                          <span>#배쓰밤</span>
                          <span>#EID</span>
                        </div>
                      </Link>
                    </div>
                    <div className={css.prd_price}>
                      <span>₩</span>
                      <span>19,000</span>
                    </div>
                  </li>
                  <li>
                    <div className={css.prd_img}>
                      <Link to="">
                        <img
                          src="https://www.lush.co.kr/data/goods/22/04/14/1000002148/1000002148_main_085.jpg"
                          alt="상품명"
                        />
                      </Link>
                    </div>
                    <div className={css.prd_label}>
                      <Link to="">
                        <span className={css.prd_label_new}>NEW</span>
                      </Link>
                      <Link to="">
                        <span className={css.prd_label_vegan}>VEGAN</span>
                      </Link>
                    </div>
                    <div className={css.prd_name}>
                      <Link to="">
                        <div>라이트 더 나이트</div>
                        <div className={css.prd_hashtag}>
                          <span>#배쓰밤</span>
                          <span>#EID</span>
                        </div>
                      </Link>
                    </div>
                    <div className={css.prd_price}>
                      <span>₩</span>
                      <span>19,000</span>
                    </div>
                  </li>
                  <li>
                    <div className={css.prd_img}>
                      <Link to="">
                        <img
                          src="https://www.lush.co.kr/data/goods/22/04/14/1000002148/1000002148_main_085.jpg"
                          alt="상품명"
                        />
                      </Link>
                    </div>
                    <div className={css.prd_label}>
                      <Link to="">
                        <span className={css.prd_label_new}>NEW</span>
                      </Link>
                      <Link to="">
                        <span className={css.prd_label_vegan}>VEGAN</span>
                      </Link>
                    </div>
                    <div className={css.prd_name}>
                      <Link to="">
                        <div>라이트 더 나이트</div>
                        <div className={css.prd_hashtag}>
                          <span>#배쓰밤</span>
                          <span>#EID</span>
                        </div>
                      </Link>
                    </div>
                    <div className={css.prd_price}>
                      <span>₩</span>
                      <span>19,000</span>
                    </div>
                  </li>
                  <li>
                    <div className={css.prd_img}>
                      <Link to="">
                        <img
                          src="https://www.lush.co.kr/data/goods/22/04/14/1000002148/1000002148_main_085.jpg"
                          alt="상품명"
                        />
                      </Link>
                    </div>
                    <div className={css.prd_label}>
                      <Link to="">
                        <span className={css.prd_label_new}>NEW</span>
                      </Link>
                      <Link to="">
                        <span className={css.prd_label_vegan}>VEGAN</span>
                      </Link>
                    </div>
                    <div className={css.prd_name}>
                      <Link to="">
                        <div>라이트 더 나이트</div>
                        <div className={css.prd_hashtag}>
                          <span>#배쓰밤</span>
                          <span>#EID</span>
                        </div>
                      </Link>
                    </div>
                    <div className={css.prd_price}>
                      <span>₩</span>
                      <span>19,000</span>
                    </div>
                  </li>
                  <li>
                    <div className={css.prd_img}>
                      <Link to="">
                        <img
                          src="https://www.lush.co.kr/data/goods/22/04/14/1000002148/1000002148_main_085.jpg"
                          alt="상품명"
                        />
                      </Link>
                    </div>
                    <div className={css.prd_label}>
                      <Link to="">
                        <span className={css.prd_label_new}>NEW</span>
                      </Link>
                      <Link to="">
                        <span className={css.prd_label_vegan}>VEGAN</span>
                      </Link>
                    </div>
                    <div className={css.prd_name}>
                      <Link to="">
                        <div>라이트 더 나이트</div>
                        <div className={css.prd_hashtag}>
                          <span>#배쓰밤</span>
                          <span>#EID</span>
                        </div>
                      </Link>
                    </div>
                    <div className={css.prd_price}>
                      <span>₩</span>
                      <span>19,000</span>
                    </div>
                  </li>
                  <li>
                    <div className={css.prd_img}>
                      <Link to="">
                        <img
                          src="https://www.lush.co.kr/data/goods/22/04/14/1000002148/1000002148_main_085.jpg"
                          alt="상품명"
                        />
                      </Link>
                    </div>
                    <div className={css.prd_label}>
                      <Link to="">
                        <span className={css.prd_label_new}>NEW</span>
                      </Link>
                      <Link to="">
                        <span className={css.prd_label_vegan}>VEGAN</span>
                      </Link>
                    </div>
                    <div className={css.prd_name}>
                      <Link to="">
                        <div>라이트 더 나이트</div>
                        <div className={css.prd_hashtag}>
                          <span>#배쓰밤</span>
                          <span>#EID</span>
                        </div>
                      </Link>
                    </div>
                    <div className={css.prd_price}>
                      <span>₩</span>
                      <span>19,000</span>
                    </div>
                  </li>
                  <li>
                    <div className={css.prd_img}>
                      <Link to="">
                        <img
                          src="https://www.lush.co.kr/data/goods/22/04/14/1000002148/1000002148_main_085.jpg"
                          alt="상품명"
                        />
                      </Link>
                    </div>
                    <div className={css.prd_label}>
                      <Link to="">
                        <span className={css.prd_label_new}>NEW</span>
                      </Link>
                      <Link to="">
                        <span className={css.prd_label_vegan}>VEGAN</span>
                      </Link>
                    </div>
                    <div className={css.prd_name}>
                      <Link to="">
                        <div>라이트 더 나이트</div>
                        <div className={css.prd_hashtag}>
                          <span>#배쓰밤</span>
                          <span>#EID</span>
                        </div>
                      </Link>
                    </div>
                    <div className={css.prd_price}>
                      <span>₩</span>
                      <span>19,000</span>
                    </div>
                  </li>
                  <li>
                    <div className={css.prd_img}>
                      <Link to="">
                        <img
                          src="https://www.lush.co.kr/data/goods/22/04/14/1000002148/1000002148_main_085.jpg"
                          alt="상품명"
                        />
                      </Link>
                    </div>
                    <div className={css.prd_label}>
                      <Link to="">
                        <span className={css.prd_label_new}>NEW</span>
                      </Link>
                      <Link to="">
                        <span className={css.prd_label_vegan}>VEGAN</span>
                      </Link>
                    </div>
                    <div className={css.prd_name}>
                      <Link to="">
                        <div>라이트 더 나이트</div>
                        <div className={css.prd_hashtag}>
                          <span>#배쓰밤</span>
                          <span>#EID</span>
                        </div>
                      </Link>
                    </div>
                    <div className={css.prd_price}>
                      <span>₩</span>
                      <span>19,000</span>
                    </div>
                  </li>
                  <li>
                    <div className={css.prd_img}>
                      <Link to="">
                        <img
                          src="https://www.lush.co.kr/data/goods/22/04/14/1000002148/1000002148_main_085.jpg"
                          alt="상품명"
                        />
                      </Link>
                    </div>
                    <div className={css.prd_label}>
                      <Link to="">
                        <span className={css.prd_label_new}>NEW</span>
                      </Link>
                      <Link to="">
                        <span className={css.prd_label_vegan}>VEGAN</span>
                      </Link>
                    </div>
                    <div className={css.prd_name}>
                      <Link to="">
                        <div>라이트 더 나이트</div>
                        <div className={css.prd_hashtag}>
                          <span>#배쓰밤</span>
                          <span>#EID</span>
                        </div>
                      </Link>
                    </div>
                    <div className={css.prd_price}>
                      <span>₩</span>
                      <span>19,000</span>
                    </div>
                  </li>
                  <li>
                    <div className={css.prd_img}>
                      <Link to="">
                        <img
                          src="https://www.lush.co.kr/data/goods/22/04/14/1000002148/1000002148_main_085.jpg"
                          alt="상품명"
                        />
                      </Link>
                    </div>
                    <div className={css.prd_label}>
                      <Link to="">
                        <span className={css.prd_label_new}>NEW</span>
                      </Link>
                      <Link to="">
                        <span className={css.prd_label_vegan}>VEGAN</span>
                      </Link>
                    </div>
                    <div className={css.prd_name}>
                      <Link to="">
                        <div>라이트 더 나이트</div>
                        <div className={css.prd_hashtag}>
                          <span>#배쓰밤</span>
                          <span>#EID</span>
                        </div>
                      </Link>
                    </div>
                    <div className={css.prd_price}>
                      <span>₩</span>
                      <span>19,000</span>
                    </div>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
        <footer>footer</footer>
      </div>
    </div>
  );
}

export default Products;
