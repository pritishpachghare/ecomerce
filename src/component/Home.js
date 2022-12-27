import React from 'react'
import Product from './Product'

export default function Home() {
    return (
        <div className='hero border-0'>
            <div className="card bg-dark text-black border-0">
                <img src="https://media.istockphoto.com/photos/man-at-the-shopping-picture-id868718238?b=1&k=20&m=868718238&s=612x612&w=0&h=shPfBYOaH8WtXHhXoCdd-VvssikIxadxVV8y5u6C57s=" className="card-img border-0" alt="..." height="600px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className='container'>
                        <h5 className="card-title display-3 fw-bolder mb-0 text-white">New Arrivals</h5>
                        <p className="card-text display-5 fw-bolder lead fs-2">Check Out All Of The Trends</p>

                    </div>

                </div>
            </div>
            <Product/>
        </div>
    )
}
