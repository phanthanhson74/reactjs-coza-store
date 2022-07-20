import React from 'react'
import { useEffect, useState } from 'react'

function Productview() {

	const [posts, setPosts] = useState([])

	useEffect(() => {
		fetch('https://62c7b2c174e1381c0a7b2115.mockapi.io/api/products')
			.then(res => res.json())
			.then(posts => {
				setPosts(posts);
			})
	}, [])


	return (
		<section className="bg0 p-t-23 p-b-140">
			<div className="container">
				<div className="p-b-10">
					<h3 className="ltext-103 cl5">
						Product Overview
					</h3>
				</div>

				<div className="flex-w flex-sb-m p-b-52">
					<div className="flex-w flex-l-m filter-tope-group m-tb-10">
						<button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*">
							All Products
						</button>

						<button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".women">
							Women
						</button>

						<button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".men">
							Men
						</button>

						<button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".bag">
							Bag
						</button>

						<button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".shoes">
							Shoes
						</button>

						<button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".watches">
							Watches
						</button>
					</div>

					<div className="flex-w flex-c-m m-tb-10">
						<div className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
							<i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"></i>
							<i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
							Filter
						</div>

						<div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
							<i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
							<i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
							Search
						</div>
					</div>
				</div>

				{posts.map((products) => {
					return (
						<>
							<div class="container-fluid">
								<div className='d-flex flex-row col-sm-3'>
									<div class="card" >
										<img src={products.imageURL} class="card-img-top" alt="..." />
										<div class="card-body">
											<h5 class="card-title">{products.title}</h5>
											<p class="card-text">${products.price}</p>
											<a href="/" class="btn btn-primary">Go somewhere</a>
										</div>
									</div>
								</div>
							</div>
						</>
					)
				})}

				<div className="flex-c-m flex-w w-full p-t-45">
					<a href="/" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">
						Load More
					</a>
				</div>
			</div>
		</section>

	)
}

export default Productview