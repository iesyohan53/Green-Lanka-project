import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded d-flex flex-column" style={{ marginBottom: "20px" }}>
              <img
              className="card-img-top mx-auto"
              src={product.images && product.images[0] ? product.images[0].url : 'default-image.jpg'}
              alt=""
              />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title mb-1">
                <Link to={`/product/${product._id}`}>{product.product_name}</Link>
              </h5>
              <div className="ratings mb-1">
                <div className="rating-outer">
                  <div
                    className="rating-inner"
                    style={{ width: `${(product.ratings / 5) * 100}%` }}
                  ></div>
                </div>
                <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>
              </div>
              <p className="card-text mb-2">Rs.{product.price}</p>
              <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block mt-auto">
                View Details
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Product