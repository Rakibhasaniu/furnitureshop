import React from 'react';
import './AllProduct.css'
import Sofa from '../../../Assent/img/asset 8.jpeg'

const AllProduct = () => {
    return (
        <>
            <div className="allProduct px-lg-5">
                <div className="container-fluid justify-content-between align-items-center d-flex px-lg-5">
                    <h4>Fresh Furniture Collection 2022</h4>
                    <form class="d-flex w-25 ">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>

                </div>
                <div className="row mt-3">
                    <div className="col-lg-3">
                        <div className="products-box">
                            <img className='w-100' src={Sofa} alt="" />
                            <div className="products-details">
                                <div className="p-top d-flex justify-content-between">
                                    <a className="d-block" href="#">Bolero Sofa</a>
                                    <span className="d-block">$450.00</span>
                                </div>
                                <div className="p-bottom d-flex justify-content-between">
                                    <div className="wrapper">
                                        <a className="cta bg-primary" href="#">
                                            <span className='text-white'>View Details</span>

                                        </a>
                                    </div>
                                    <div className="wrapper">
                                        <a className="cta" href="#">
                                            <span className='text-white'>Add to Card</span>

                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="products-box">
                            <img className='w-100' src={Sofa} alt="" />
                            <div className="products-details">
                                <div className="p-top d-flex justify-content-between">
                                    <a className="d-block" href="#">Bolero Sofa</a>
                                    <span className="d-block">$450.00</span>
                                </div>
                                <div className="p-bottom d-flex justify-content-between">
                                    <div className="wrapper">
                                        <a className="cta bg-primary" href="#">
                                            <span className='text-white'>View Details</span>

                                        </a>
                                    </div>
                                    <div className="wrapper">
                                        <a className="cta" href="#">
                                            <span className='text-white'>Add to Card</span>

                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default AllProduct;