import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Pement.css'

const Pement = () => {
    const navigate = useNavigate()

    const ConfirmPayment = () => {
        toast.success('successfuly complited Payment. Thank you')
        navigate('/')
    }

    return (
        <>
            <div className="Payment py-0 pt-4 ">
                <h2 className='text-center pt-5'>Payment Methord</h2>
                <div className="row pb-5 mx-md-2">
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className='px-1 pt-5 pb-1 d-flex justify-content-center'>
                                    <a className="btn btn-outline-primary bg-white w-75 mx-auto" data-bs-toggle="collapse" href="#collapseExample01" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNjUT1aDf58ol4MsTblmfhk3WuThbQm7vZfF3gXBq_I2H58WT_ZGlRxmuMIPpCmrP3Kxk&usqp=CAU" alt="" />
                                    </a>

                                </div>
                                <div className="collapse" id="collapseExample01">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title text-center py-2">Bkash Payments</h5>
                                            <p className="card-text">
                                                <form>
                                                    <div className="form-group">
                                                        <label for="card-number ">Phone Number</label>
                                                        <input type="text" className="form-control " id="card-number" placeholder="Enter Phone number" />
                                                    </div>

                                                    <div className="form-group mt-2">
                                                        <label for="cvv py-1">Total Amount</label>
                                                        <input type="text" defaultValue={'$100.00'} disabled className="form-control" id="cvv" placeholder="total amount" />
                                                    </div>
                                                </form>
                                            </p>
                                            <div className="d-flex justify-content-center">
                                                <button type="submit" className="btn btn-primary bg-primary text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className='px-1 pt-5 pb-1 d-flex justify-content-center'>
                                    <a className="btn btn-outline-primary bg-white w-75 mx-auto" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <img className='w-100' src="https://www.logo.wine/a/logo/Nagad/Nagad-Vertical-Logo.wine.svg" alt="" />
                                    </a>

                                </div>
                                <div className="collapse" id="collapseExample1">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title text-center py-2">Nogat Payments</h5>
                                            <p className="card-text">
                                                <form>
                                                    <div className="form-group">
                                                        <label for="card-number ">Phone Number</label>
                                                        <input type="text" className="form-control " id="card-number" placeholder="Enter Phone number" />
                                                    </div>

                                                    <div className="form-group mt-2">
                                                        <label for="cvv py-1">Total Amount</label>
                                                        <input type="text" defaultValue={'$100.00'} disabled className="form-control" id="cvv" placeholder="total amount" />
                                                    </div>
                                                </form>
                                            </p>
                                            <div className="d-flex justify-content-center">
                                                <button type="submit" className="btn btn-primary bg-primary text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className='px-1 pt-5 pb-1 d-flex justify-content-center'>
                                    <a className="btn btn-outline-primary bg-white w-75 mx-auto" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <img className='w-100' src="https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png" alt="" />
                                    </a>

                                </div>
                                <div className="collapse" id="collapseExample2">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title text-center py-2">Rocket Payments</h5>
                                            <p className="card-text">
                                                <form>
                                                    <div className="form-group">
                                                        <label for="card-number ">Phone Number</label>
                                                        <input type="text" className="form-control " id="card-number" placeholder="Enter Phone number" />
                                                    </div>

                                                    <div className="form-group mt-2">
                                                        <label for="cvv py-1">Total Amount</label>
                                                        <input type="text" defaultValue={'$100.00'} disabled className="form-control" id="cvv" placeholder="total amount" />
                                                    </div>
                                                </form>
                                            </p>
                                            <div className="d-flex justify-content-center">
                                                <button type="submit" className="btn btn-primary bg-primary text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="container">
                            <div className="row ">
                                <div className="col-lg-6 mb-lg-0 mb-3">
                                    <div className="card p-3">
                                        <div className="img-box">
                                            <img src="https://www.freepnglogos.com/uploads/visa-logo-download-png-21.png" alt="" />
                                        </div>
                                        <div className="number">
                                            <label className="fw-bold" for="">**** **** **** 1060</label>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <small><span className="fw-bold">Expiry date:</span><span>10/16</span></small>
                                            <small><span className="fw-bold">Name:</span><span>Kumar</span></small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-lg-0 mb-3">
                                    <div className="card p-3">
                                        <div className="img-box">
                                            <img src="https://www.freepnglogos.com/uploads/mastercard-png/file-mastercard-logo-svg-wikimedia-commons-4.png"
                                                alt="" />
                                        </div>
                                        <div className="number">
                                            <label className="fw-bold">**** **** **** 1060</label>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <small><span className="fw-bold">Expiry date:</span><span>10/16</span></small>
                                            <small><span className="fw-bold">Name:</span><span>Kumar</span></small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 mt-4">
                                    <div className="card p-3">
                                        <p className="mb-0 fw-bold h4">Payment Methods</p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card p-3">
                                        <div className="card-body border p-0">
                                            <p>
                                                <a className="btn btn-primary w-100 h-100 d-flex align-items-center justify-content-between"
                                                    data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true"
                                                    aria-controls="collapseExample">
                                                    <span className="fw-bold">PayPal</span>
                                                    <span className="fab fa-cc-paypal">
                                                    </span>
                                                </a>
                                            </p>
                                            <div className="collapse p-3 pt-0" id="collapseExample">
                                                <div className="row">
                                                    <div className="col-8">
                                                        <p className="h4 mb-0">Summary</p>
                                                        <p className="mb-0"><span className="fw-bold">Product:</span><span className="c-green">: Name of
                                                            product</span></p>
                                                        <p className="mb-0"><span className="fw-bold">Price:</span><span
                                                            className="c-green">:$452.90</span></p>
                                                        <p className="mb-0"></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body border p-0">
                                            <p>
                                                <a className="btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                                                    data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true"
                                                    aria-controls="collapseExample">
                                                    <span className="fw-bold">Credit Card</span>
                                                    <span className="">
                                                        <span className="fab fa-cc-amex"></span>
                                                        <span className="fab fa-cc-mastercard ms-1"></span>

                                                    </span>
                                                </a>
                                            </p>
                                            <div className="collapse show p-3 pt-0" id="collapseExample">
                                                <div className="row">
                                                    <div className="col-lg-5 mb-lg-0 mb-3">
                                                        <p className="h4 mb-0">Summary</p>
                                                        <p className="mb-0"><span className="fw-bold">Product:</span><span className="c-green">: Name of
                                                            product</span>
                                                        </p>
                                                        <p className="mb-0">
                                                            <span className="fw-bold">Price:</span>
                                                            <span className="c-green">:$452.90</span>
                                                        </p>
                                                        <p className="mb-0"></p>
                                                    </div>
                                                    <div className="col-lg-7">
                                                        <form action="" className="form">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="form__div">
                                                                        <input type="text" className="form-control" placeholder=" " />
                                                                        <label for="" className="form__label">Card Number</label>
                                                                    </div>
                                                                </div>

                                                                <div className="col-6">
                                                                    <div className="form__div">
                                                                        <input type="text" className="form-control" placeholder=" " />
                                                                        <label for="" className="form__label">MM / yy</label>
                                                                    </div>
                                                                </div>

                                                                <div className="col-6">
                                                                    <div className="form__div">
                                                                        <input type="password" className="form-control" placeholder=" " />
                                                                        <label for="" className="form__label">cvv code</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="form__div">
                                                                        <input type="text" className="form-control" placeholder=" " />
                                                                        <label for="" className="form__label">name on the card</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="btn btn-primary bg-primary text-white w-100">Sumbit</div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="btn btn-primary payment">
                                        Make Payment
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                {/* =================modal=============================== */}

                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content  pb-5">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Bkash Payments</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="card-body  p-2">

                                <p className="card-text">
                                    <form>
                                        <div className="form-group">
                                            <h5 className='text-center'>Verify Code</h5>
                                            <input type="text" className="form-control w-75 mx-auto" id="card-number" placeholder="Enter Phone number" />
                                        </div>

                                        <div className="form-group mt-2">
                                            <h5 className='text-center'>Bkash Pin</h5>
                                            <input type="text" className="form-control w-75 mx-auto" id="pin" placeholder="Bkash Pin" />
                                        </div>
                                    </form>
                                </p>
                                <div className="d-flex justify-content-center">
                                    <button onClick={ConfirmPayment} type="submit" className="btn btn-primary bg-primary text-white w-75 mx-auto" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Confirmed</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>


        </>
    );
};

export default Pement;