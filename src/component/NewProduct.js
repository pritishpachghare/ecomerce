import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addCart} from '../redux/action/index'

export default function NewProduct() {

    const {id} = useParams()
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addCart(product))
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
            setLoading(false)
        }
        getProduct();
    }, [id])

    const Loading = () => {
        return (
            <>
                Loading...
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className='col-md-6'>
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
                <div className='col-md-6'>
                <h4 className='text-uppercase text-black-50'>
                    {product.category}
                </h4>
                <h1 className='display-5'>{product.title}</h1>
                <p className='lead fw-bolder'>Rating {product.rating && product.rating.rate}
                <i className='fa fa-star ml-2'></i>
                </p>
                <h3 className='fw-bold display-6 my-4'>$ {product.price}</h3>
                <p className='lead'>{product.description}</p>
                <button className='btn btn-outline-dark me-2' onClick={()=>addProduct(product)}>Add to cart </button>
                <NavLink className='btn btn-dark me-2' to='/cart'>Go to cart </NavLink>
                </div>
            </>
        )

    }

    return (
        <div>
            <div className='container py-5 my-5'>
                <div className='row'>

                </div>
                <div className='row justify-content-center'>
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}
