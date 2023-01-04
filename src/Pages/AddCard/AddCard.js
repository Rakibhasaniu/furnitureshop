import React, { useState } from 'react';
import './AddCard.css'
import imgss from '../../Assent/img/asset 12.jpeg'
import { useQuery } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';

const AddCard = () => {
    const navigate = useNavigate()

    // all all card

    const url = `http://localhost:5000/allCard`;

    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                return data;
            } catch (err) {
                console.log(err);
            }
        }
    })

    if (isLoading) {
        <div>
            <div className="Loding">
                <img src='https://static.spotapps.co/assets/widgets/loading.gif' alt="" />
            </div>
        </div>
    }

    // Buy Product
    const [ProductDetails, setProduct] = useState()
    const BuyProduct = (product) => {
        setProduct(product)
    }

    function refreshPage() {
        window.location.reload();
    }

    // console.log(products);
    const Reloade = () => {
        navigate('/payment')
        refreshPage()
    }

    return (
        <>
            <div className="AddToCard">

                <div className="row mx-md-4 mt-3">
                    <div className="col-lg-7 col-md-12 responsives">
                        <div className="container">
                            {
                                products?.map(product => <>
                                    <div className="row mx-md-3 card_box mb-2 mx-2 mainrow">
                                        <div className="col-lg-3 col-md-3 d-flex justify-content-center">
                                            <img className='cardImage' src={product.image} alt="" />
                                        </div>
                                        <div className="col-lg-9 col-md-9">
                                            <div className="row">
                                                <div className="col-md-11 d-flex justify-content-between mt-2">
                                                    <p>Name : {product?.name}</p>
                                                    <p className='ms-1 ms-md-4'>Price : <span className='text-primary'>{product?.price}</span></p>
                                                </div>
                                                <div className="col-md-1 d-none d-md-block">
                                                    <p className='closeCard'>x</p>
                                                </div>

                                            </div>
                                            <p className='detais'>Details : {product?.Details.slice(0, 180)} More.. </p>

                                            <div className='d-flex justify-content-end'>
                                                <button className='cardbtn bg-danger me-2 d-md-none'>Delete Now</button>
                                                {/* <button className='cardbtn btn-primary'>Buy Now</button> */}
                                                <button onClick={() => BuyProduct(product)} className='cardbtn btn-primary' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </>)
                            }
                        </div>
                    </div>
                    <div className="col-md-5 d-none d-lg-block text-white ">
                        <div className="row addToCardrightSite d-flex justify-content-center align-items-center">

                            <div className="col-lg-12">

                                <img className='w-100' src="https://thumbs.gfycat.com/GrouchySoupyArgali-max-1mb.gif" alt="" />
                                <br /><br /><br /><br /><br />
                                <button className='btn btn-success w-75 d-block mx-auto py-3 discountoffer'>Buy Now</button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Modal --> */}
                    <div className="modal fade mt-3" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div className="modal-content">
                                {/* <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div> */}
                                <div className="modal-body">
                                    {/* =============frome field=============== */}

                                    <div className="card">
                                        <img className='p-1' src={ProductDetails?.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <h5 className="card-title text-black"> {ProductDetails?.name}</h5>
                                                <h5 className="card-title text-black">Price : {ProductDetails?.price}</h5>
                                            </div>
                                            <p className="card-text text-black pt-2">{ProductDetails?.Details?.slice(0, 200)}</p>

                                        </div>
                                    </div>

                                </div>
                                <div className="modal-footer d-flex justify-content-between">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button onClick={Reloade} type="button" className="btn btn-primary">Get Payment</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </>
    );
};

export default AddCard;