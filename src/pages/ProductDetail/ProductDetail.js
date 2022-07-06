import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Image from '../../elements/Image';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import ProductDetailInfo from '../../components/ProductDetailInfo/ProductDetailInfo';
import css from './ProductDetail.module.scss';
import ProductShipping from '../../components/ProductShipping/ProductShipping';
import ProductReview from '../../components/ProductReview/ProductReview';
import NotFound from '../../components/NotFound/NotFound';
import Spinner from '../../components/Spinner/Spinner';

function ProductDetail() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    let timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const id = useLocation().pathname.split('/')[2];
  const isExist = id > 0 && id < 109;
  const [productInfo, setProductInfo] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  useEffect(() => {
    setIsUpdated(false);
    fetch(`http://localhost:10010/products/${id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        if (isExist) {
          setProductInfo(data.products[0]);
        }
      });
  }, [id, isExist, isUpdated]);

  const imageList = productInfo.productImages;
  const [image, setImage] = useState(null);
  useEffect(() => {
    setImage(imageList && imageList[0].url);
  }, [imageList]);

  const reviewList = productInfo?.productReviews;

  return (
    <div>
      {loading && <Spinner visible={loading} />}
      {isExist ? (
        <div className={css.product_detail_container}>
          <div className={css.container}>
            <div className={css.images_container}>
              <Image size={380} src={image} />
              <div className={css.images}>
                {imageList && (
                  <Image size={65} src={imageList[0].url} setImage={setImage} />
                )}
                {imageList && (
                  <Image size={65} src={imageList[1].url} setImage={setImage} />
                )}
                {imageList && (
                  <Image size={65} src={imageList[2].url} setImage={setImage} />
                )}
              </div>
            </div>
            <ProductInfo productInfo={productInfo} />
          </div>
          <ProductDetailInfo productInfo={productInfo} />
          <ProductReview reviewList={reviewList} setIsUpdated={setIsUpdated} />
          <ProductShipping />
        </div>
      ) : (
        <NotFound productDetail={true} />
      )}
    </div>
  );
}

export default ProductDetail;
