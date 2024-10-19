import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import Loader from '../layout/Loader';
import { useDispatch, useSelector } from 'react-redux';
import {getAdminProducts} from '../../actions/productActions'
import {allOrders} from '../../actions/orderActions'
import MetaData from '../layout/MetaData';
import {allUsers} from '../../actions/userActions'

const Dashboard = () => {

  const dispatch = useDispatch() ;
  const {products} = useSelector(state => state.products)
  const {users} = useSelector(state => state.allUsers)
  const {orders, totalAmount, loading} = useSelector(state => state.allOrders)

  let outofStock = 0;
  products.forEach(product => {
    if(product.stock === 0){
      outofStock += 1;
    }

  })

  useEffect(() => {
    dispatch(getAdminProducts())
    dispatch(allOrders())
    dispatch(allUsers())
  }, [dispatch])

  return (
    <Fragment>
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10 mt-2">
          <h1>Dashboard</h1>

          {loading ? <Loader/>: (
            <Fragment>
              <MetaData title= {'Admin Dashboard'} />
              <div className="row-md">
        <div className="row">
          <div className="col-10 mb-4 mx-auto">
                <div className="card text-white bg-success h-100 w-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">Total Amount<br /><b>${totalAmount && totalAmount.toFixed(2)}</b></div>
                  </div>
                </div>
              </div>
              </div>
          </div>
            <div className="row">
              <div className="col-md-3 mb-3">
                <div className="card text-white bg-c-green1 h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">Products<br /><b>{products && products.length}</b></div>
                  </div>
                  <Link className="card-footer text-white clearfix small z-1" to="/admin/products">
                    <span className="float-start">View Details</span>
                    <span className="float-end">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card text-white bg-c-green2 h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">Orders<br /><b>{orders && orders.length}</b></div>
                  </div>
                  <Link className="card-footer text-white clearfix small z-1" to="/admin/orders">
                    <span className="float-start">View Details</span>
                    <span className="float-end">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
              
              <div className="col-md-3  mb-3">
                <div className="card text-white bg-c-green3 h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">Users<br /><b>{users && users.length}</b></div>
                  </div>
                  <Link className="card-footer text-white clearfix small z-1" to="/admin/users">
                    <span className="float-start">View Details</span>
                    <span className="float-end">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </Link>
                </div>
        </div>
        <div className="col-md-3 mb-3">
                <div className="card text-white bg-c-green2 h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">Reviews<br /><b>125</b></div>
                  </div>
                  <Link className="card-footer text-white clearfix small z-1" to="/admin/Reviews">
                    <span className="float-start">View Details</span>
                    <span className="float-end">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
              </div>
            </Fragment>
          )}

        </div>
      </div>
    </Fragment>

  );
};
export default Dashboard;
