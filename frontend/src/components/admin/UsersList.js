import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';

import Sidebar from './sidebar';
import Loader from '../layout/Loader';
import MetaData from '../layout/MetaData';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { allUsers, clearErrors, deleteUser } from '../../actions/userActions';
import { DELETE_USER_RESET } from '../../constants/userConstants';

const UsersList = ({ history }) => {
    const alert = useAlert();
    const dispatch = useDispatch();

    // Use safe destructuring with fallback
    const { loading, error, users } = useSelector(state => state.allUsers || {});
    const { isDeleted } = useSelector(state => state.user || {});

    useEffect(() => {
        dispatch(allUsers());

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isDeleted) {
            alert.success('User deleted successfully');
            history.push('/admin/users');
            dispatch({ type: DELETE_USER_RESET });
        }
    }, [dispatch, alert, error, isDeleted, history]);

    const deleteUserHandler = (id) => {
        dispatch(deleteUser(id));
    };

    const setUsers = () => {
        const data = {
            columns: [
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc',
                },
                {
                    label: 'Email',
                    field: 'email',
                    sort: 'asc',
                },
                {
                    label: 'Role',
                    field: 'role',
                    sort: 'asc',
                },
                {
                    label: 'Actions',
                    field: 'actions',
                },
            ],
            rows: [],
        };

        // Ensure users is an array before mapping
        if (Array.isArray(users)) {
            users.forEach(user => {
                data.rows.push({
                    
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    actions: (
                        <Fragment>
                            <Link to={`/admin/user/${user._id}`} className="btn btn-primary py-1 px-2">
                                <i className="fa fa-pencil"></i>
                            </Link>
                            <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteUserHandler(user._id)}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </Fragment>
                    ),
                });
            });
        }

        return data; // Return the populated data object
    };

    return (
        <Fragment>
            <MetaData title={'All Users'} />
            {loading ? (
                <Loader />
            ) : (
                <div className="row">
                    <div className="col-12 col-md-2">
                        <Sidebar />
                    </div>
                    <div className="col-12 col-md-10">
                        <Fragment>
                            <h1 className="my-5">All Users</h1>
                            <MDBDataTable
                                data={setUsers()}
                                className="px-3"
                                bordered
                                striped
                                hover
                            />
                        </Fragment>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default UsersList;
