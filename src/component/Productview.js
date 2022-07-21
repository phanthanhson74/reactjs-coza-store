import React from 'react'
import { useEffect, useState } from 'react'

function Productview() {

	const [data , setData] = useState([]);
	const [filter, setFilter] = useState(data);
	const [posts, setPosts] = useState([])

	useEffect(() => {
		fetch('https://62c7b2c174e1381c0a7b2115.mockapi.io/api/products')
			.then(res => res.json())
			.then(posts => {
				setPosts(posts);
			})
	}, [])


	const filterProduct = (cat) => {
		const updatedList = data.filter((x) => x.categories === cat);
		setFilter(updatedList);
	}

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
						<button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" onClick={() => setFilter(data)}>
							All Products
						</button>

						<button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" onClick={() => filterProduct("women")}>
							Women
						</button>

						<button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" onClick={() => filterProduct("men")}>
							Men
						</button>

						<button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" onClick={() => filterProduct("bag")}>
							Bag
						</button>

						<button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" onClick={() => filterProduct("shoes")}>
							Shoes
						</button>

						<button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" onClick={() => filterProduct("watches")}>
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

				<div className='flex-w flex-sb-m'>
					{posts.map((products) => {
						return (
							<>
								<div className='col-sm-3 mb-4'>
									<div className="card border-0 " >
										<div className="img-hover-zoom img-hover-zoom--colorize">
											<img src={products.imageURL} class="w-100" alt="..."  />
										</div>
										<div className="card-body ">
											<h5 className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6 pl-1">{products.title}</h5>
											<p className="stext-105 cl3">${products.price}</p>
											<div className="block2-txt-child2 flex-r p-t-3">
												<a href="/" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
													<img class="icon-heart1 dis-block trans-04" src="asset/images/icons/icon-heart-01.png" alt="ICON" />
													<img class="icon-heart2 dis-block trans-04 ab-t-l" src="asset/images/icons/icon-heart-02.png" alt="ICON" />
												</a>
											</div>
										</div>

									</div>
								</div>
							</>
						)
					})}

				</div>

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