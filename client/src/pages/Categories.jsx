export default function Categories() {
    return (
        <div className="container-fluid my-5 py-5 px-0">

            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <h1 className="section-title position-relative text-center mb-5">Categories</h1>
                </div>
            </div>
            {/* Category 1: Elevate */}
            <div className="row bg-primary mb-4"> {/* Added margin bottom */}
                <div className="col-md-6 px-0" style={{ minHeight: '500px' }}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100" src="/images/category/elevate.png" alt="Elevate" style={{ objectFit: 'cover' }} />
                    </div>
                </div>

                <div className="col-md-6 py-5 py-md-0 px-0">
                    <div className="h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">

                        <h3 className="font-weight-bold text-white mt-3 mb-4">Elevate</h3>
                        <p className="text-white mb-4">Try our newest line of products, Elevate, where every product contains a symphony of stimulants, meticulously blended for the High-ly Driven Stoners. At the heart of "Elevate" are our LIFT3D Pre Workout Lollipops and Gym-rat Ganja Gummies, crafted for those who demand a surge of stamina with a side of fun. Sip on our Ethereal Energy Drink as you transcend the ordinary, or let our Canna-Busy Coffee be the fuel for your relentless pursuit of excellence.  Whether you're scaling corporate ladders or crushing weights, Elevate is your companion on the journey to the zenith of your potential.</p>

                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col-lg-3 col-md-6 mb-4 pb-2">
                    <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                        <div className="bg-primary mt-n5 py-3" style={{ width: '80px' }}>
                            <h4 className="font-weight-bold text-white mb-0">$48</h4>
                        </div>
                        <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: '150px', height: '150px' }}>
                            <img className="rounded-circle w-100 h-100" src="/images/products/Lift3d 2.png" alt="Vanilla Ice Cream" style={{ objectFit: 'cover' }} />
                        </div>
                        <h5 className="font-weight-bold mb-4">LIFT3D Pre-Workout Lollipop</h5>
                        <a href="#" className="btn btn-sm btn-secondary">Add to Cart</a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 pb-2">
                    <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                        <div className="bg-primary mt-n5 py-3" style={{ width: '80px' }}>
                            <h4 className="font-weight-bold text-white mb-0">$30</h4>
                        </div>
                        <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: '150px', height: '150px' }}>
                            <img className="rounded-circle w-100 h-100" src="/images/products/Gym-Rat Ganja Gummies.png" alt="Vanilla Ice Cream" style={{ objectFit: 'cover' }} />
                        </div>
                        <h5 className="font-weight-bold mb-4">Gym-Rat Ganja Gummies</h5>
                        <a href="#" className="btn btn-sm btn-secondary">Add to Cart</a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 pb-2">
                    <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                        <div className="bg-primary mt-n5 py-3" style={{ width: '80px' }}>
                            <h4 className="font-weight-bold text-white mb-0">$25</h4>
                        </div>
                        <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: '150px', height: '150px' }}>
                            <img className="rounded-circle w-100 h-100" src="/images/products/Ethereal.png" alt="Vanilla Ice Cream" style={{ objectFit: 'cover' }} />
                        </div>
                        <h5 className="font-weight-bold mb-4">Ethereal Energy Drink</h5>
                        <a href="#" className="btn btn-sm btn-secondary">Add to Cart</a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 pb-2">
                    <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                        <div className="bg-primary mt-n5 py-3" style={{ width: '80px' }}>
                            <h4 className="font-weight-bold text-white mb-0">$45</h4>
                        </div>
                        <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: '150px', height: '150px' }}>
                            <img className="rounded-circle w-100 h-100" src="/images/products/Canna-Busy.png" alt="Vanilla Ice Cream" style={{ objectFit: 'cover' }} />
                        </div>
                        <h5 className="font-weight-bold mb-4">Canna-Busy Coffee</h5>
                        <a href="#" className="btn btn-sm btn-secondary">Add to Cart</a>
                    </div>
                </div>

            </div>















            {/* Category 2 */}
            <div className="row bg-primary mb-4">
                <div className="col-md-6 px-0" style={{ minHeight: '500px' }}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100" src="/images/category/recover.png" alt="Elevate" style={{ objectFit: 'cover' }} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">

                        <h3 className="font-weight-bold text-white mt-3 mb-4">Recover</h3>
                        <p className="text-white mb-4">Embrace the art of rejuvenation with our original "Recovery" line, a testament to our commitment to holistic wellness and innovative nourishment. Dive into the protein-rich depths of 'Whey Out,' our flagship offering that redefines muscle recovery with every scoop. For the sweet-toothed athlete, 'Blaze and Glaze' donuts deliver indulgence without compromise, infusing post-workout bliss with guilt-free pleasure. 'Herbal Hemp' takes the edge off with nature's finest, while our 'Puff-Puff Pass Cream Puffs' are a culinary cuddle for your taste buds and muscles alike. The Recovery line is more than a product range; it's a celebration of balance, blending the rigor of training with the sweetness of restorative care. It's not just about pushing limits; it's about nurturing your body back to its pinnacle of health with every delicious, restorative bite or sip.</p>

                    </div>
                </div>
            </div>


            <div className="row">

                <div className="col-lg-3 col-md-6 mb-4 pb-2">
                    <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                        <div className="bg-primary mt-n5 py-3" style={{ width: '80px' }}>
                            <h4 className="font-weight-bold text-white mb-0">$48</h4>
                        </div>
                        <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: '150px', height: '150px' }}>
                            <img className="rounded-circle w-100 h-100" src="/images/products/Whey-Out Whey Protein.png" alt="Vanilla Ice Cream" style={{ objectFit: 'cover' }} />
                        </div>
                        <h5 className="font-weight-bold mb-4">Whey-Out Protein</h5>
                        <a href="#" className="btn btn-sm btn-secondary">Add to Cart</a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 pb-2">
                    <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                        <div className="bg-primary mt-n5 py-3" style={{ width: '80px' }}>
                            <h4 className="font-weight-bold text-white mb-0">$30</h4>
                        </div>
                        <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: '150px', height: '150px' }}>
                            <img className="rounded-circle w-100 h-100" src="/images/products/Blaze and Glazed Protein Donuts 2.png" alt="Vanilla Ice Cream" style={{ objectFit: 'cover' }} />
                        </div>
                        <h5 className="font-weight-bold mb-4">Blaze n Glazed Donuts</h5>
                        <a href="#" className="btn btn-sm btn-secondary">Add to Cart</a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 pb-2">
                    <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                        <div className="bg-primary mt-n5 py-3" style={{ width: '80px' }}>
                            <h4 className="font-weight-bold text-white mb-0">$25</h4>
                        </div>
                        <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: '150px', height: '150px' }}>
                            <img className="rounded-circle w-100 h-100" src="/images/products/Puff-Puff Pass Cream Puffs 2.png" alt="Vanilla Ice Cream" style={{ objectFit: 'cover' }} />
                        </div>
                        <h5 className="font-weight-bold mb-4">Puff Pass Cream Puffs</h5>
                        <a href="#" className="btn btn-sm btn-secondary">Add to Cart</a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 pb-2">
                    <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                        <div className="bg-primary mt-n5 py-3" style={{ width: '80px' }}>
                            <h4 className="font-weight-bold text-white mb-0">$45</h4>
                        </div>
                        <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: '150px', height: '150px' }}>
                            <img className="rounded-circle w-100 h-100" src="/images/products/Canna-Bulk Cookies.png" alt="Vanilla Ice Cream" style={{ objectFit: 'cover' }} />
                        </div>
                        <h5 className="font-weight-bold mb-4">Canna-Bulk Cookies</h5>
                        <a href="#" className="btn btn-sm btn-secondary">Add to Cart</a>
                    </div>
                </div>

            </div>












            {/* Category 3 */}
            <div className="row bg-primary mb-4">
                <div className="col-md-6 px-0" style={{ minHeight: '500px' }}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100" src="/images/category/vegan.png" alt="Elevate" style={{ objectFit: 'cover' }} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">

                        <h3 className="font-weight-bold text-white mt-3 mb-4">Vegan</h3>
                        <p className="text-white mb-4">Introducing the "Vegan" line, a revolutionary collection that caters to the plant-based athlete and eco-conscious consumer. Leading the charge is 'Herbal Hemp,' a blend of nature's finest ingredients, providing a clean, sustainable boost. 'Gym-Rat' redefines plant-powered nutrition, catering to those who live to lift, run, and conquer. Our 'Avocado Oil' is a versatile marvel, perfect for cooking or adding a smooth, nutritious touch to any meal. And for those in search of a vegan protein solution, 'Whey-Out' offers a plant-based alternative that doesn't skimp on flavor or function. Each product in our Vegan line is a testament to our commitment to ethical, environmentally friendly nutrition. It's not just about what's left out; it's about what we put in – pure, plant-based power for the discerning and dedicated.</p>

                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col-lg-3 col-md-6 mb-4 pb-2">
                    <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                        <div className="bg-primary mt-n5 py-3" style={{ width: '80px' }}>
                            <h4 className="font-weight-bold text-white mb-0">$48</h4>
                        </div>
                        <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: '150px', height: '150px' }}>
                            <img className="rounded-circle w-100 h-100" src="/images/products/herbal-hemp.png" alt="Vanilla Ice Cream" style={{ objectFit: 'cover' }} />
                        </div>
                        <h5 className="font-weight-bold mb-4">Herbal Hemp Protein Bars (Vegan)</h5>
                        <a href="#" className="btn btn-sm btn-secondary">Add to Cart</a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 pb-2">
                    <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                        <div className="bg-primary mt-n5 py-3" style={{ width: '80px' }}>
                            <h4 className="font-weight-bold text-white mb-0">$30</h4>
                        </div>
                        <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: '150px', height: '150px' }}>
                            <img className="rounded-circle w-100 h-100" src="/images/products/Gym-Rat Ganja Gummies.png" alt="Vanilla Ice Cream" style={{ objectFit: 'cover' }} />
                        </div>
                        <h5 className="font-weight-bold mb-4">Gym-Rat Ganja Gummies (Vegan)</h5>
                        <a href="#" className="btn btn-sm btn-secondary">Add to Cart</a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 pb-2">
                    <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                        <div className="bg-primary mt-n5 py-3" style={{ width: '80px' }}>
                            <h4 className="font-weight-bold text-white mb-0">$25</h4>
                        </div>
                        <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: '150px', height: '150px' }}>
                            <img className="rounded-circle w-100 h-100" src="/images/products/green-ganja.png" alt="Vanilla Ice Cream" style={{ objectFit: 'cover' }} />
                        </div>
                        <h5 className="font-weight-bold mb-4">Green Ganja Avocado Oil (Vegan)</h5>
                        <a href="#" className="btn btn-sm btn-secondary">Add to Cart</a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 pb-2">
                    <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                        <div className="bg-primary mt-n5 py-3" style={{ width: '80px' }}>
                            <h4 className="font-weight-bold text-white mb-0">$45</h4>
                        </div>
                        <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: '150px', height: '150px' }}>
                            <img className="rounded-circle w-100 h-100" src="/images/products/Whey-Out Whey Protein.png" alt="Vanilla Ice Cream" style={{ objectFit: 'cover' }} />
                        </div>
                        <h5 className="font-weight-bold mb-4">Whey-Out Whey Protein (Vegan)</h5>
                        <a href="#" className="btn btn-sm btn-secondary">Add to Cart</a>
                    </div>
                </div>

            </div>
        </div>


    );
}
