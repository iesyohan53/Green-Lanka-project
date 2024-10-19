import React, { Fragment, useState, useEffect } from 'react';
import Pagination from 'react-js-pagination';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; // Import useParams hook
import { useAlert } from 'react-alert';


import MetaData from './layout/MetaData';
import Product from './product/Product';
import Loader from './layout/Loader';
import { getProducts, clearErrors } from '../actions/productActions';



const Product1 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  

  const alert = useAlert();
  const dispatch = useDispatch();

  const { keyword } = useParams(); // Access the keyword parameter from the URL

  const { loading, products, error, productsCount, resPerPage } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    // Fetch products based on the keyword and current page
    dispatch(getProducts(keyword, currentPage));
  }, [dispatch, alert, error, keyword, currentPage]);

  const setCurrentPageNo = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={'Buy Best Products'} />
          <div className='container container-fluid'>
            <h1 id='products_heading'>Latest Products</h1>

            <section id='products' className='container mt-5'>
              <div className='row'>
                {products && products.length > 0 ? (
                  products.map((product) => (
                    <Product key={product._id} product={product} />
                  ))
                ) : (
                  <h2>No Products Found</h2>
                )}
              </div>
            </section>

            {resPerPage < productsCount && (
              <div className='d-flex justify-content-center mt-5'>
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resPerPage}
                  totalItemsCount={productsCount}
                  onChange={setCurrentPageNo}
                  nextPageText={'Next'}
                  prevPageText={'Prev'}
                  firstPageText={'First'}
                  lastPageText={'Last'}
                  itemClass='page-item'
                  linkClass='page-link'
                />
              </div>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Product1;
