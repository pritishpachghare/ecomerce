import React, { useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'

export default function Product() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    let componentMounted = true;

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products")
            if (componentMounted) {
                setData(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)
                console.log(filter)
            }
            return () => {
                componentMounted(false);
            }
        }
        getProduct();
    }, [])

    const Loading = () => {
        return (
        <>
        {/* <div className='col-md-3'>
        <Skeleton height={350}/>
        </div>
        <div className='col-md-3'>
        <Skeleton height={350}/>
        </div>
        <div className='col-md-3'>
        <Skeleton height={350}/>
        </div>
        <div className='col-md-3'>
        <Skeleton height={350}/>
        </div> */}  Loading...
        </>
        )
    }

    const filterProduct = (cat) =>{
        const productList = data.filter((x)=> x.category === cat);
        setFilter(productList);
    }
 
    const ShowProduct = () => {
        return (
            <>
                <div className='buttons d-flex justify-content-center pb-5 mb-5 '>
                    <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)}>All</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className='btn btn-outline-dark me-2'  onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className='btn btn-outline-dark me-2'  onClick={()=>filterProduct("jewelery")}>Jwellary</button>
                    <button className='btn btn-outline-dark me-2'  onClick={()=>filterProduct("electronics")}>Electronics</button>
                </div>
                {filter?.map((product) => {
                    return (
                            <div className='col-md-3 mb-4' key={product.id}>
                                <div className="card h-100 p-4 text-center">
                                    <img src={product.image} className="card-img-top" height="250px" alt={product.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title.substring(0,12)}</h5>
                                        <p className="card-text">${product.price}</p>
                                        <NavLink to={`/product/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                    </div>
                                </div>
                            </div>
                    )
                })}
            </>
        )

    }

    return (
        <div>
            <div className='container py-5 my-5'>
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h1 className='display-6 fw-bolder text-center'>Latest Product</h1>
                        <hr />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}
