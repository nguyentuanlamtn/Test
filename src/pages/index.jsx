import React from "react";

const Home = () => {
    const products = [
        {img: '/images/product-01.png', title: '[What happened] How to create', price: '2,500', like: '236'},
        {img: '/images/product-02.png', title: '[What happened] How to create', price: '2,500', like: '236'},
        {img: '/images/product-03.png', title: '[What happened] How to create', price: '2,500', like: '236'},
        {img: '/images/product-04.png', title: '[What happened] How to create', price: '2,500', like: '236'},
        {img: '/images/product-05.png', title: '[What happened] How to create', price: '2,500', like: '236'},
        {img: '/images/product-06.png', title: '[What happened] How to create', price: '2,500', like: '236'},
        {img: '/images/product-07.png', title: '[What happened] How to create', price: '2,500', like: '236'},
        {img: '/images/product-08.png', title: '[What happened] How to create', price: '2,500', like: '236'},
        {img: '/images/product-09.png', title: '[What happened] How to create', price: '2,500', like: '236'},
        {img: '/images/product-10.png', title: '[What happened] How to create', price: '2,500', like: '236'},
        {img: '/images/product-11.png', title: '[What happened] How to create', price: '2,500', like: '236'},
        {img: '/images/product-12.png', title: '[What happened] How to create', price: '2,500', like: '236'},
        {img: '/images/product-13.png', title: '[What happened] How to create', price: '2,500', like: '236'},
        {img: '/images/product-14.png', title: '[What happened] How to create', price: '2,500', like: '236'},
        {img: '/images/product-15.png', title: '[What happened] How to create', price: '2,500', like: '236'},
        {img: '/images/product-16.png', title: '[What happened] How to create', price: '2,500', like: '236'},
        {img: '/images/product-17.png', title: '[What happened] How to create', price: '2,500', like: '236'},
        {img: '/images/product-18.png', title: '[What happened] How to create', price: '2,500', like: '236'},
        {img: '/images/product-19.png', title: '[What happened] How to create', price: '2,500', like: '236'},
        {img: '/images/product-20.png', title: '[What happened] How to create', price: '2,500', like: '236'},
        {img: '/images/product-21.png', title: '[What happened] How to create', price: '2,500', like: '236'},
        {img: '/images/product-22.png', title: '[What happened] How to create', price: '2,500', like: '236'},
        {img: '/images/product-23.png', title: '[What happened] How to create', price: '2,500', like: '236'},
        {img: '/images/product-24.png', title: '[What happened] How to create', price: '2,500', like: '236'},
        {img: '/images/product-25.png', title: '[What happened] How to create', price: '2,500', like: '236'},
    ]

    return (
        <main className="main">
            <section className="introduct">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="title">What happened!</h3>
                            <div className="content">
                                <p>How to create mobile-optimized videos in minutes. Not a designer, <br />
                                    every team makes a lot of videos Can be trimmed. Take the first <br />
                                    step to your brand's success. How to create <br />
                                    mobile-optimized videos in minutes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="best-product">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="title">Best product</h3>
                            <p className="content">
                                How to create mobile-optimized videos in minutes. Not a designer, <br />
                                every team makes a lot of videos Can be trimmed. Take the first
                            </p>
                        </div>
                        <div className="col-md-12">
                            <div className="list-best-product">
                                <div className="item">
                                    <div className="ranking">
                                        <img src="/images/number-01.png" alt="not found" className="w-100" />
                                    </div>
                                    <div className="image">
                                        <img src="/images/best-product-01.png" alt="not found" className="w-100 h-100" />
                                    </div>
                                    <div className="action">
                                        <p>How to create <br /> mobile-optimized </p>
                                        <a>Go</a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="ranking">
                                        <img src="/images/number-02.png" alt="not found" className="w-100" />
                                    </div>
                                    <div className="image">
                                        <img src="/images/best-product-02.png" alt="not found" className="w-100 h-100" />
                                    </div>
                                    <div className="action">
                                        <p>How to create <br /> mobile-optimized </p>
                                        <a>Go</a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="ranking">
                                        <img src="/images/number-03.png" alt="not found" className="w-100" />
                                    </div>
                                    <div className="image">
                                        <img src="/images/best-product-03.png" alt="not found" className="w-100 h-100" />
                                    </div>
                                    <div className="action">
                                        <p>How to create <br /> mobile-optimized </p>
                                        <a>Go</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="products">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="list-products">
                                {
                                    products.map((item, index) => {
                                        return (
                                            <div className="item" key={index}>
                                                <div className="image">
                                                    <img src={item.img} alt="not found" className="w-100 h-100" />
                                                </div>
                                                <h4 className="title">{item.title}</h4>
                                                <div className="action">
                                                    <p className="price">{item.price} won</p>
                                                    <a className="like">
                                                        <i className="fa fa-heart" />
                                                        <span>{item.like}</span>
                                                    </a>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <button className="btn btn-default btn-more">See more</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="brand-story">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="title">Brand story</h4>
                            <p className="content font-korea">
                                ???????????? ???????????? ???????????? ??? ??? ??? ?????? ??????????????????. ??????????????? ???????????????,  ?????? ????????? <br />
                                ????????? ??? ????????????. ???????????? ????????? ?????? ??? ?????????  ??????????????????. ???????????? ??? ??? ??? ?????? ??????????????????.
                            </p>

                            <div className="e-windows">
                                <div className="left">
                                    <img src="/images/collaboration.png" alt="not found" className="w-100 h-100" />
                                </div>
                                <div className="right">
                                    <h4 className="title">
                                        What happened's brand story
                                    </h4>
                                    <p className="content font-korea">
                                        ????????? ?????? ?????????, ?????????. ?????? ??????????????? ?????? ???????????? ????????? ?????? ?????? <br />
                                        ???????????????. ??? ????????? ?????? ?????? ?????? ????????? ???????????? ????????????, ?????????. ??? ?????? <br />
                                        ????????? ????????? ????????? ????????? ?????????. ?????? ?????? ???????????? ??????. ????????? ?????? ?????? <br />
                                        ????????? ???????????? ????????? ????????? ?????????. ????????? ????????? ?????? ?????? ????????? ??? ????????? <br />
                                        ???????????? ????????? ?????? ???????????? ??????????????? ????????? ??????.
                                    </p>
                                    <button className="btn btn-default btn-more">
                                        See more
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="news">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="title">Happened's issue</h4>
                            <p className="content font-korea">
                                ???????????? ???????????? ???????????? ??? ??? ??? ?????? ??????????????????. ??????????????? ???????????????,  ?????? ????????? <br />
                                ????????? ??? ????????????. ???????????? ????????? ?????? ??? ?????????  ??????????????????. ???????????? ??? ??? ??? ?????? ??????????????????.
                            </p>
                            <button className="btn btn-default btn-more">See more</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="video">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="title">What happened</h4>
                            <p className="content">
                                How to create mobile-optimized videos in minutes. Not a designer, <br />
                                every team makes a lot of videos Can be trimmed. Take the first
                            </p>
                            <button className="btn btn-default btn-more">See more</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home