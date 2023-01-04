import React, { useEffect, useState } from 'react';
import './AllProduct.css'
import Sofa from '../../../Assent/img/asset 8.jpeg'
import { useQuery } from '@tanstack/react-query';
import { async } from '@firebase/util';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaList } from 'react-icons/fa';

const AllProduct = () => {

    const url = `http://localhost:5000/all_product`;

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
    //=============MongoDb post Add to Card==========================
    const AddToCard = (product) => {

        fetch(`http://localhost:5000/addCard`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.acknowledged) {
                    toast.success('Add to Card FaList', data)
                }
            })

    }



    // console.log(products);
    return (
        <>
            <div className="allProduct px-lg-5 d-block">
                <div className="container-fluid justify-content-between align-items-center d-flex px-lg-5">
                    <h4 className='collections2022'> <span className='d-none d-md-flex'>Fresh Furniture Collection 2022</span> </h4>
                    <form className="d-flex w-md-25 ">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                </div>
                <div className="d-flex justify-content-center ">
                    <marquee className='marquees pt-1' direction="left" >
                        This Year 2023 Our Shop All products <span className='text-primary'>10% Discount</span> & <span className='text-warning'> 30% Cash Back</span>.  Our shop Buy products from.<span className='text-danger'> Our Happy Customar ❤❤</span> .
                    </marquee>
                </div>

                <div className="row mt-3 px-3 px-md-0 ">

                    {
                        products?.map(product => <>

                            <div key={product?._id} className="col-lg-3 col-md-4">
                                <div className="products-box">
                                    <img className='w-100 ' src={product?.image} alt="" />
                                    <div className="products-details">
                                        <div className="p-top d-flex justify-content-between">
                                            <span className="d-block Name" >{product?.name}</span>
                                            <span className="d-block Prices">{product?.price}</span>
                                        </div>
                                        <div className="p-bottom d-flex justify-content-between">
                                            <div className="wrapper">
                                                <span className="cta bg-primary" >
                                                    <Link to={`/view_Product/${product?._id}`} className='text-white pointer'>View Details</Link>

                                                </span>
                                            </div>
                                            <div className="wrapper">
                                                <span onClick={() => AddToCard(product)} className="cta" >
                                                    <span className='text-white pointer'>Add to Card</span>

                                                </span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </>
                        )
                    }


                </div>
            </div>

        </>
    );
};

export default AllProduct;