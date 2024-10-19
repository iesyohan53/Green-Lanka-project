import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';

import Sidebar from './sidebar';
import Loader from '../layout/Loader';
import MetaData from '../layout/MetaData';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminProducts, clearErrors, deleteProduct } from '../../actions/productActions';
import { DELETE_PRODUCT_RESET } from '../../constants/productConstants';

const ProductsList = ({ history }) => {
    const alert = useAlert();
    const dispatch = useDispatch();

    // Corrected the typo from 'eror' to 'error'
    const { loading, error, products } = useSelector(state => state.products);
    const{error: deleteError, isDeleted} = useSelector(state => state.product)

    useEffect(() => {
        dispatch(getAdminProducts());

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors());
        }

        if(isDeleted){
            alert.success('Product deleted successfullly');
            history.push('/admin/products');
            dispatch({type: DELETE_PRODUCT_RESET })
        }

    }, [dispatch, alert, error, deleteError, isDeleted,history]);

    const setProducts = () => {
        const data = {
            columns: [  // Corrected 'column' to 'columns'
                {
                    label: 'ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: 'Price',
                    field: 'price',  // Corrected 'proce' to 'price'
                    sort: 'asc'
                },
                {
                    label: 'Stock',
                    field: 'stock',
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
        if (products && Array.isArray(products)) {
            products.forEach(product => {
                data.rows.push({
                    id: product.product_Id,
                    name: product.product_name,
                    price: `Rs.${product.price}`,
                    stock: product.availability,
                    actions: (
                        <Fragment>
                            <Link to={`/admin/product/${product._id}`} className="btn btn-primary py-1 px-2">
                                <i className="fa fa-pencil"></i>
                            </Link>
                            <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteProductHandler(product._id)}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </Fragment>
                    )
                });
            });
        }

        return data;
        
        }
        const deleteProductHandler = (id) =>{
            dispatch(deleteProduct(id))
    };

    return (
        <Fragment>
            <MetaData title={'All Products'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>
                <div className="col-12 col-md-10">
                    <Fragment>
                        <h1 className="my-5">All Products</h1>

                        {loading ? (
                            <Loader />
                        ) : (
                            <MDBDataTable
                                data={setProducts()}
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
    );
};

export default ProductsList;
