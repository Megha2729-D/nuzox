import React, { Component } from "react";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: "oversizeTshirts", // default tab
        };
        this.imageObserver = null;
    }

    // Handle tab click
    handleTabChange = (tabId) => {
        this.setState({ activeTab: tabId }, () => {
            this.setupLazyLoad(); // re-observe lazy images for new tab
        });
    };

    componentDidMount() {
        // ---- Lazy Load Setup ----
        this.setupLazyLoad();

        // ---- Scroll Listener for Navbar ----
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
        if (this.imageObserver) {
            this.imageObserver.disconnect();
        }
    }

    handleScroll = () => {
        const navbarLinks = document.querySelector(".navbar_links");
        if (navbarLinks) {
            if (window.scrollY > 100) {
                navbarLinks.classList.add("active");
            } else {
                navbarLinks.classList.remove("active");
            }
        }
    };

    // Lazy load images
    setupLazyLoad = () => {
        const lazyImages = document.querySelectorAll(".lazy-image-wrapper");

        if (this.imageObserver) {
            this.imageObserver.disconnect(); // remove previous observers
        }

        this.imageObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const wrapper = entry.target;
                        const imgs = wrapper.querySelectorAll("img");

                        imgs.forEach((img) => {
                            const src = img.getAttribute("data-src");
                            if (src) {
                                img.src = src;
                                // Add loaded class after 3 seconds
                                setTimeout(() => wrapper.classList.add("loaded"), 2000);
                            }
                        });

                        observer.unobserve(wrapper);
                    }
                });
            },
            { threshold: 0.1 }
        );

        lazyImages.forEach((imgWrapper) => this.imageObserver.observe(imgWrapper));
    };

    // category data
    categories = [
        { name: "Full Sleeves", img: "full-sleeves.webp" },
        { name: "Half Sleeves", img: "half-sleeves.webp" },
        { name: "Oversized T-Shirts", img: "oversized-tshirts.webp" },
        { name: "Cargo Joggers", img: "cargo-joggers.jpg" },
        { name: "Formal Pant", img: "formal-pant.webp" },
        { name: "Hoodies", img: "hoodies.avif" },
        { name: "Polo", img: "polo.jpg" },
        { name: "Shorts", img: "shorts.jpg" },
        { name: "Track pant", img: "track-pant.jpg" },
    ];

    // column layout pattern — matches original layout order
    colClasses = [
        "col-lg-3 col-6",
        "col-lg-4 col-6",
        "col-lg-3 col-6",
        "col-lg-2 col-6",
        "col-lg-2 col-6",
        "col-lg-3 col-6",
        "col-lg-2 col-6",
        "col-lg-3 col-6",
        "col-lg-2 col-6",
    ];

    oversizedTshirts = [
        {
            name: "Acidwash Oversized Cotton T-shirt",
            category: "oversizeTshirts",
            price: 599,
            oldPrice: 999,
            offer: "Buy 3 @ ₹2999",
            img1: `${process.env.PUBLIC_URL}/assets/images/oversized-t-shirts/acidwash-oversized-cotton-t-shirt-green.webp`,
            img2: `${process.env.PUBLIC_URL}/assets/images/oversized-t-shirts/acidwash-oversized-cotton-t-shirt-green-front.webp`,
        },
        {
            name: "Acidwash Oversized Cotton T-shirt",
            category: "oversizeTshirts",
            price: 599,
            oldPrice: 999,
            offer: "Buy 3 @ ₹2999",
            img1: `${process.env.PUBLIC_URL}/assets/images/oversized-t-shirts/acidwash-oversized-cotton-t-shirt-black.webp`,
            img2: `${process.env.PUBLIC_URL}/assets/images/oversized-t-shirts/acidwash-oversized-cotton-t-shirt-black-front.webp`,
        },
        {
            name: "Acidwash Oversized Cotton T-shirt",
            category: "oversizeTshirts",
            price: 599,
            oldPrice: 999,
            offer: "Buy 3 @ ₹2999",
            img1: `${process.env.PUBLIC_URL}/assets/images/oversized-t-shirts/acidwash-oversized-cotton-t-shirt-brown.webp`,
            img2: `${process.env.PUBLIC_URL}/assets/images/oversized-t-shirts/acidwash-oversized-cotton-t-shirt-brown-front.webp`,
        },
        {
            name: "Acidwash Oversized Cotton T-shirt",
            category: "oversizeTshirts",
            price: 599,
            oldPrice: 999,
            offer: "Buy 3 @ ₹2999",
            img1: `${process.env.PUBLIC_URL}/assets/images/oversized-t-shirts/acidwash-oversized-cotton-t-shirt-blue.webp`,
            img2: `${process.env.PUBLIC_URL}/assets/images/oversized-t-shirts/acidwash-oversized-cotton-t-shirt-blue-front.webp`,
        },
        {
            name: "Acidwash Oversized Cotton T-shirt",
            category: "oversizeTshirts",
            price: 599,
            oldPrice: 999,
            offer: "Buy 3 @ ₹2999",
            img1: `${process.env.PUBLIC_URL}/assets/images/oversized-t-shirts/acidwash-oversized-cotton-t-shirt-red.webp`,
            img2: `${process.env.PUBLIC_URL}/assets/images/oversized-t-shirts/acidwash-oversized-cotton-t-shirt-red-front.webp`,
        },
        {
            name: "Oversized Unisex - French Terry Cotton",
            category: "oversizeTshirts",
            price: 599,
            oldPrice: 999,
            offer: "Buy 3 @ ₹2999",
            img1: `${process.env.PUBLIC_URL}/assets/images/oversized-t-shirts/oversized-unisex-french-terry-cotton-yellow-green.webp`,
            img2: `${process.env.PUBLIC_URL}/assets/images/oversized-t-shirts/oversized-unisex-french-terry-cotton-yellow-green-front.webp`,
        },
        {
            name: "Acidwash Oversized Cotton T-shirt",
            category: "oversizeTshirts",
            price: 599,
            oldPrice: 999,
            offer: "Buy 3 @ ₹2999",
            img1: `${process.env.PUBLIC_URL}/assets/images/oversized-t-shirts/oversized-unisex-french-terry-cotton-red.webp`,
            img2: `${process.env.PUBLIC_URL}/assets/images/oversized-t-shirts/oversized-unisex-french-terry-cotton-red-front.webp`,
        },
        {
            name: "Acidwash Oversized Cotton T-shirt",
            category: "oversizeTshirts",
            price: 599,
            oldPrice: 999,
            offer: "Buy 3 @ ₹2999",
            img1: `${process.env.PUBLIC_URL}/assets/images/oversized-t-shirts/oversized-unisex-french-terry-cotton-sea-green.webp`,
            img2: `${process.env.PUBLIC_URL}/assets/images/oversized-t-shirts/oversized-unisex-french-terry-cotton-sea-green-front.webp`,
        },
        {
            name: "Men's Polo T Shirt for Men (Polyester Blend | Regular Fit)",
            category: "poloTshirts",
            price: 399,
            oldPrice: 499,
            offer: "Buy 3 @ 999",
            img1: `${process.env.PUBLIC_URL}/assets/images/polo/mens-polo-t-shirt-for-men-polyester-blend-regular-fit-light-blue.webp`,
            img2: `${process.env.PUBLIC_URL}/assets/images/polo/mens-polo-t-shirt-for-men-polyester-blend-regular-fit-light-blue-front.webp`,
        },
        {
            name: "Men's Polo T Shirt for Men (Polyester Blend | Regular Fit)",
            category: "poloTshirts",
            price: 399,
            oldPrice: 499,
            offer: "Buy 3 @ 999",
            img1: `${process.env.PUBLIC_URL}/assets/images/polo/mens-polo-t-shirt-for-men-polyester-blend-regular-fit-navy-blue.webp`,
            img2: `${process.env.PUBLIC_URL}/assets/images/polo/mens-polo-t-shirt-for-men-polyester-blend-regular-fit-navy-blue-front.webp`,
        },
        {
            name: "Men's Polo T Shirt for Men (Polyester Blend | Regular Fit)",
            category: "poloTshirts",
            price: 399,
            oldPrice: 499,
            offer: "Buy 3 @ 999",
            img1: `${process.env.PUBLIC_URL}/assets/images/polo/mens-polo-t-shirt-for-men-polyester-blend-regular-fit.webp`,
            img2: `${process.env.PUBLIC_URL}/assets/images/polo/mens-polo-t-shirt-for-men-polyester-blend-regular-fit-front.webp`,
        },
        {
            name: "Men's Polo T Shirt for Men (Polyester Blend | Regular Fit)",
            category: "poloTshirts",
            price: 399,
            oldPrice: 499,
            offer: "Buy 3 @ 999",
            img1: `${process.env.PUBLIC_URL}/assets/images/polo/mens-polo-t-shirt-for-men-polyester-blend-regular-fit.webp`,
            img2: `${process.env.PUBLIC_URL}/assets/images/polo/mens-polo-t-shirt-for-men-polyester-blend-regular-fit-front.webp`,
        },
        {
            name: "Men's Polo T Shirt for Men (Polyester Blend | Regular Fit)",
            category: "poloTshirts",
            price: 399,
            oldPrice: 499,
            offer: "Buy 3 @ 999",
            img1: `${process.env.PUBLIC_URL}/assets/images/polo/mens-polo-t-shirt-for-men-polyester-blend-regular-fit.webp`,
            img2: `${process.env.PUBLIC_URL}/assets/images/polo/mens-polo-t-shirt-for-men-polyester-blend-regular-fit-front.webp`,
        },
        {
            name: "Men's Polo T Shirt for Men (Polyester Blend | Regular Fit)",
            category: "poloTshirts",
            price: 399,
            oldPrice: 499,
            offer: "Buy 3 @ 999",
            img1: `${process.env.PUBLIC_URL}/assets/images/polo/mens-polo-t-shirt-for-men-polyester-blend-regular-fit.webp`,
            img2: `${process.env.PUBLIC_URL}/assets/images/polo/mens-polo-t-shirt-for-men-polyester-blend-regular-fit-front.webp`,
        },
        {
            name: "Men's Polo T Shirt for Men (Polyester Blend | Regular Fit)",
            category: "poloTshirts",
            price: 399,
            oldPrice: 499,
            offer: "Buy 3 @ 999",
            img1: `${process.env.PUBLIC_URL}/assets/images/polo/mens-polo-t-shirt-for-men-polyester-blend-regular-fit.webp`,
            img2: `${process.env.PUBLIC_URL}/assets/images/polo/mens-polo-t-shirt-for-men-polyester-blend-regular-fit-front.webp`,
        },
        {
            name: "Men's Polo T Shirt for Men (Polyester Blend | Regular Fit)",
            category: "poloTshirts",
            price: 399,
            oldPrice: 499,
            offer: "Buy 3 @ 999",
            img1: `${process.env.PUBLIC_URL}/assets/images/polo/mens-polo-t-shirt-for-men-polyester-blend-regular-fit.webp`,
            img2: `${process.env.PUBLIC_URL}/assets/images/polo/mens-polo-t-shirt-for-men-polyester-blend-regular-fit-front.webp`,
        },
        {
            name: "White Half Sleeve Tee",
            category: "halfSleeves",
            price: 399,
            oldPrice: 499,
            offer: "Buy 3 @ 999",
            img1: `${process.env.PUBLIC_URL}/assets/images/oversized-t-shirts/oversized-unisex-french-terry-cotton-sea-green.webp`,
            img2: `${process.env.PUBLIC_URL}/assets/images/oversized-t-shirts/oversized-unisex-french-terry-cotton-sea-green-front.webp`,
        },
    ];

    render() {
        const { activeTab } = this.state;

        return (
            <>
                <div className="container-fluid hero top p-0">
                    <div id="carouselExampleAutoplaying" className="carousel slide h-sl d-none d-lg-flex" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item hero-crd active">
                                <a href="https://nuzox.in/collections/oversized-t-shirts">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/nuzox-banner-lg-1.webp`} className="desk-baner" alt="" />
                                </a>
                            </div>
                            <div className="carousel-item hero-crd ">
                                <a href="https://www.nuzox.in/collections/formal-pant">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/nuzox-banner-lg-2.webp`} className="desk-baner" alt="" />
                                </a>
                            </div>
                            <div className="carousel-item hero-crd ">
                                <a href="https://nuzox.in/shop/hoodies">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/nuzox-banner-lg-3.webp`} className="desk-baner" alt="" />
                                </a>
                            </div>
                            <div className="carousel-item hero-crd ">
                                <a href="https://nuzox.in/collections/half-sleeves">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/nuzox-banner-lg-4.webp`} className="desk-baner" alt="" />
                                </a>
                            </div>
                        </div>
                        <button className="carousel-control-prev  navs-slidr" type="button" data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide="prev">
                            <span className="pre navs-round" aria-hidden="true"><i className="fa-solid fa-chevron-left "></i></span>
                            <span className="visually-hidden ">Previous</span>
                        </button>
                        <button className="carousel-control-next  navs-slidr" type="button" data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide="next">
                            <span className="next navs-round" aria-hidden="true"><i className="fa-solid fa-chevron-right"></i></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div id="carouselExampleAutoplayingo" className="carousel slide h-sl d-lg-none" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item hero-crd active">
                                <a href="https://nuzox.in/shop/hoodies">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/nuzox-banner-sm-1.webp`} className="mob-baner" alt="" />
                                </a>
                            </div>
                            <div className="carousel-item hero-crd ">
                                <a href="https://www.nuzox.in/collections/oversized-t-shirts">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/nuzox-banner-sm-2.webp`} className="mob-baner" alt="" />
                                </a>
                            </div>
                            <div className="carousel-item hero-crd ">
                                <a href="https://www.nuzox.in/collections/cargo-joggers">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/nuzox-banner-sm-3.webp`} className="mob-baner" alt="" />
                                </a>
                            </div>
                            <div className="carousel-item hero-crd ">
                                <a href="https://www.nuzox.in/collections/polo">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/nuzox-banner-sm-4.webp`} className="mob-baner" alt="" />
                                </a>
                            </div>
                        </div>
                        <button className="carousel-control-prev  navs-slidr" type="button" data-bs-target="#carouselExampleAutoplayingo"
                            data-bs-slide="prev">
                            <span className="pre navs-round" aria-hidden="true"><i className="fa-solid fa-chevron-left "></i></span>
                            <span className="visually-hidden ">Previous</span>
                        </button>
                        <button className="carousel-control-next  navs-slidr" type="button" data-bs-target="#carouselExampleAutoplayingo"
                            data-bs-slide="next">
                            <span className="next navs-round" aria-hidden="true"><i className="fa-solid fa-chevron-right"></i></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="section_container">
                    <section className="py-4">
                        <div className="row options_box">
                            <div className="col-lg-3 my-2 my-lg-0">
                                <div className="bg_light_grey p-2 h-100 d-flex align-items-center justify-content-lg-center">
                                    <div className="row">
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/icons/bonus.png`} className="w-100" alt="" />
                                        </div>
                                        <div className="col-9 ps-0">
                                            <h6 className="text-uppercase fw-bold">BONUS PLUS</h6>
                                            <p className="mb-0">
                                                Make fun of shopping and collect bonuses
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 my-2 my-lg-0">
                                <div className="bg_light_grey p-2 h-100 d-flex align-items-center justify-content-lg-center">
                                    <div className="row">
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/icons/fast-delivery.png`} className="w-100" alt="" />
                                        </div>
                                        <div className="col-9 ps-0">
                                            <h6 className="text-uppercase fw-bold">FREE SHIPPING</h6>
                                            <p className="mb-0">
                                                Free shipping on all orders over ₹1999
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 my-2 my-lg-0">
                                <div className="bg_light_grey p-2 h-100 d-flex align-items-center justify-content-lg-center">
                                    <div className="row">
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/icons/rupee.png`} className="w-100" alt="" />
                                        </div>
                                        <div className="col-9 ps-0">
                                            <h6 className="text-uppercase fw-bold">MONEY BACK GUARANTEE</h6>
                                            <p className="mb-0">
                                                30 Days money return guarantee
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 my-2 my-lg-0">
                                <div className="bg_light_grey p-2 h-100 d-flex align-items-center justify-content-lg-center">
                                    <div className="row">
                                        <div className="col-3 d-flex align-items-center justify-content-center">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/icons/24-hours-support.png`} className="w-100" alt="" />
                                        </div>
                                        <div className="col-9 ps-0">
                                            <h6 className="text-uppercase fw-bold">ONLINE SUPPORT 24/7</h6>
                                            <p className="mb-0">
                                                Call us: (+100) 123 456 7890
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="bg-light">
                    <section className="section_container py-5">
                        <h6 className="sub_heading text-center text-uppercase mb-0 text-yellow">Shop by</h6>
                        <h1 className="h2 text-center">Category</h1>
                        <div className="col-lg-12 m-auto">
                            <div className="row justify-content-center">
                                {this.categories.map((category, index) => {
                                    const colClass = this.colClasses[index % this.colClasses.length]; // repeat pattern
                                    return (
                                        <div key={index} className={`${colClass} categ_parent my-3`}>
                                            <div className="rounded-1 position-relative overflow-hidden shadow">
                                                <div className="categ_img">
                                                    <img
                                                        src={`${process.env.PUBLIC_URL}/assets/images/categories/${category.img}`}
                                                        className="w-100"
                                                        alt={category.name}
                                                    />
                                                </div>
                                                <div className="categ_content">
                                                    <h4>{category.name}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                </div>
                {/* ----- T-Shirts Section ----- */}
                <section className="section_container py-5">
                    <h6 className="sub_heading text-center text-uppercase mb-0 text-yellow">
                        Our Popular
                    </h6>
                    <h2 className="text-center mb-4">T-Shirts</h2>

                    {/* Tabs */}
                    <div className="tab-navigation justify-content-center">
                        <button
                            className={`tab-btn ${activeTab === "oversizeTshirts" ? "active" : ""
                                }`}
                            onClick={() => this.handleTabChange("oversizeTshirts")}
                        >
                            Oversized
                        </button>
                        <button
                            className={`tab-btn ${activeTab === "poloTshirts" ? "active" : ""}`}
                            onClick={() => this.handleTabChange("poloTshirts")}
                        >
                            Polo
                        </button>
                        <button
                            className={`tab-btn ${activeTab === "halfSleeves" ? "active" : ""
                                }`}
                            onClick={() => this.handleTabChange("halfSleeves")}
                        >
                            Half Sleeve
                        </button>
                    </div>

                    {/* Product Grid */}
                    <div className="row justify-content-center mt-4">
                        {this.oversizedTshirts
                            .filter((p) => p.category === activeTab)
                            .map((p, i) => (
                                <div
                                    className="col-lg-3 col-md-4 col-6 mb-4"
                                    key={i}
                                >
                                    <div
                                        className="shadow-sm h-100 product-card position-relative overflow-hidden"
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                            window.location.href = `/product/${encodeURIComponent(p.name.replace(/\s+/g, "-").toLowerCase())}`
                                        }
                                    >
                                        {p.offer && (
                                            <div className="offer-badge position-absolute text-white fw-bold">
                                                <div className="p-1">{p.offer}</div>
                                            </div>
                                        )}

                                        <div className="lazy-image-wrapper position-relative">
                                            <div className="spinner-block">
                                                <div className="dot-spinner">
                                                    {[...Array(8)].map((_, idx) => (
                                                        <div key={idx} className="dot"></div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="image-wrapper">
                                                <img data-src={p.img1} className="w-100 img-main" alt={p.name} />
                                                <img
                                                    data-src={p.img2}
                                                    className="w-100 img-hover position-absolute top-0 start-0"
                                                    alt={p.name}
                                                />
                                            </div>

                                            {/* Pick Option button — stays a real link */}
                                            <div className="overlay-btn position-absolute bottom-0 start-0 w-100 text-center py-2">
                                                <div className="pick_button w-75 mx-auto ">
                                                    <a
                                                        href={`/cart/add/${encodeURIComponent(p.name.replace(/\s+/g, "-").toLowerCase())}`}
                                                        className="text-white"
                                                        onClick={(e) => e.stopPropagation()} // Prevent card click
                                                    >
                                                        Pick Option
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-2">
                                            <h5 className="mt-2">{p.name}</h5>
                                            <p className="mb-0">
                                                ₹{p.price}{" "}
                                                {p.oldPrice && (
                                                    <>
                                                        <span className="old_price text-decoration-line-through text-secondary ms-1">
                                                            ₹{p.oldPrice}
                                                        </span>
                                                        <span className="discount_percent ms-1">
                                                            (
                                                            {Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100)}
                                                            % off)
                                                        </span>
                                                    </>
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-3">
                        <button className="view_butt">View All</button>
                    </div>
                </section>
            </>
        )
    }
}

export default HomePage;
