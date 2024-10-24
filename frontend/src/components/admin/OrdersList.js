import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';

import Sidebar from './sidebar';
import Loader from '../layout/Loader';
import MetaData from '../layout/MetaData';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { allOrders, clearErrors, deleteOrder } from '../../actions/orderActions';
import { DELETE_ORDER_RESET } from '../../constants/orderConstants';

const OrdersList = ({history}) => {
    const alert = useAlert();
    const dispatch = useDispatch();

    
    const { loading, error, orders } = useSelector(state => state.allOrders);
    const {isDeleted} = useSelector(state => state.order)
    useEffect(() => {
        dispatch(allOrders());

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if(isDeleted){
            alert.success('Order deleted successfullly');
            history.push('/admin/orders');
            dispatch({type: DELETE_ORDER_RESET })
        }

    }, [dispatch, alert, error, isDeleted,history]);

    const deleteOrderHandler = (id) => {
        dispatch(deleteOrder(id))
    }

    const setOrders = () => {
        const data = {
            columns: [  // Corrected 'column' to 'columns'
                {
                    label: 'Order ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'No of Items',
                    field: 'numofitems',
                    sort: 'asc'
                },
                {
                    label: 'Amount',
                    field: 'amount', 
                    sort: 'asc'
                },
                {
                    label: 'Status',
                    field: 'status',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                },
            ],
            rows: []
        };

        // Ensure products is defined and is an array
        if (orders && Array.isArray(orders)) {
            orders.forEach(order => {
                data.rows.push({
                    id: order.order_Id,
                    numofItems: order.orderItems.length,
                    amount: `Rs.${order.totalPrice}`,
                    status: order.orderStatus && String (order.orderStatus).includes('Delivered')
                        ?<p style= {{ color: 'green'}} > {order.orderStatus}</p>
                        : <p style= {{color: 'red'}} > {order.orderStatus}</p>,
                    actions: (
                        <Fragment>
                            <Link to={`/admin/order/${order._id}`} className="btn btn-primary py-1 px-2">
                                <i className="fa fa-eye"></i>
                            </Link>
                            <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteOrderHandler(order._id)} >
                                <i className="fa fa-trash"></i>
                            </button>
                        </Fragment>
                    )
                });
            });
        }

        return data;
    }
    
  return (
    <Fragment>
            <MetaData title={'All Orders'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>
                <div className="col-12 col-md-10">
                    <Fragment>
                        <h1 className="my-5">All Orders</h1>

                        {loading ? <Loader /> : (
                            <MDBDataTable
                                data={setOrders()}
                                className="px-3"
                                bordered
                                striped
                                hover
                            />
                        )}
                    </Fragment>
                </div>
            </div>
        </Fragment>
  )
}

export default OrdersList
