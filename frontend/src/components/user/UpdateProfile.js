import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import MetaData from '../layout/MetaData';
import '../../App.css';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile, loadUser, clearErrors } from '../../actions/userActions';
import { UPDATE_PROFILE_RESET } from '../../constants/userConstants';

const UpdateProfile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const alert = useAlert();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, loading: userLoading } = useSelector((state) => state.auth);
    const { error, isUpdated, loading } = useSelector(state => state.user);

    useEffect(() => {
        if (!userLoading && user) {
            setName(user.name);
            setEmail(user.email);
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            alert.success('User updated successfully');
            dispatch(loadUser());
            dispatch({ type: UPDATE_PROFILE_RESET });
            navigate('/me');
        }
    }, [dispatch, alert, isUpdated, error, user, userLoading, navigate]);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { name, email }); // Log to check values
        
        const formData = new FormData();
        formData.set('name', name);
        formData.set('email', email);

        dispatch(updateProfile(formData));
    };

    return (
        <Fragment>
            <MetaData title={'Update Profile'} />
            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                        <h1 className="mt-2 mb-5">Update Profile</h1>

                        <div className="form-group">
                            <label htmlFor="name_field">Name</label>
                            <input
                                type="text"
                                id="name_field"
                                className="form-control"
                                name='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email_field">Email</label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="btn update-btn btn-block mt-4 mb-3" disabled={loading ? true :false}>Update</button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default UpdateProfile;
