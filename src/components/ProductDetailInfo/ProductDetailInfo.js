import React from 'react';
import css from './ProductDetailInfo.module.scss';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

function ProductDetailInfo() {
  return (
    <div>
      <section className={css.tab}>
        <Link to>상품상세정보</Link>
        <Link to>상품후기</Link>
        <Link to>배송/교환 및 반품안내</Link>
      </section>
      <section className={css.desc}>
        <div className={css.category}>배쓰 밤</div>
        <div className={css.name}>더티</div>
        <div className={css.first_image}>
          <Image
            width={986}
            height={400}
            src="https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9keSUyMHdhc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          />
        </div>
        <div className={css.desc_text}>
          러쉬 시그니처 향기가 드디어 배쓰 밤으로! 스피어민트의 기분 좋은 활기!
          상쾌한 스피어민트, 타임 허브와 타라곤의 만남은 당신에게 잊히기 않는
          향기를 선물해 줄 거에요.
        </div>
        <div className={css.second_image}>
          <Image
            width={986}
            height={400}
            src="https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9keSUyMHdhc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          />
        </div>
        <div className={css.third_image}>
          <Image
            size={500}
            src="https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9keSUyMHdhc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          />
        </div>
      </section>
    </div>
  );
}

export default ProductDetailInfo;
