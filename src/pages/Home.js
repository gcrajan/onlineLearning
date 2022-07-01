import React from 'react';
import "./style.css"

const Home = () => {
    return ( 
        <div className="conatiner section_first">
            <div className='row'>
            <div className="col-lg-4 col-md-12 mb-md-3" >
                    <div className="sec_card me-md-1 row">
                        <div className="col-md-3">
                            <img src="./img/access.png" alt="test" className='w-100' />
                        </div>
                        <div className="col-md-9">
                        <div className='homeTxt'>
                                <h3>32,245</h3>
                                <p>Enjoy the variety of fresh topics.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 mb-md-3" >
                    <div className="sec_card me-md-1 row">
                        <div className="col-md-3">
                            <img src="./img/online.png" alt="test" className='w-100' />
                        </div>
                        <div className="col-md-9">
                        <div className='homeTxt'>
                                <h3>32,245</h3>
                                <p>Enjoy the variety of fresh topics.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 mb-md-3" >
                    <div className="sec_card me-md-1 row">
                        <div className="col-md-3">
                            <img src="./img/expert.png" alt="test" className='w-100' />
                        </div>
                        <div className="col-md-9">
                        <div className='homeTxt'>
                                <h3>32,245</h3>
                                <p>Enjoy the variety of fresh topics.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="online_categories pt-5 pb-4">
                <div className="online_categories_head">
                    <p className="pt-md-4">
                        Top categories
                    </p>
                    <h1>Popular Online categories</h1>
                </div>
            </div>

            <div className="popular_courses pt-md-4">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-3 cards">
                        <div className="card">
                            <div className="card-img">
                                <img src="./img/online/ge1.jpg" alt="test" className='w-100'  />
                            </div>
                            <div className="d-flex card_details">
                                <div className="col-2">
                                    <img src="./img/online/ge.png" className='w-100' alt="gen" />
                                </div>
                                <div className="col-10">
                                    <h3>General Education</h3>
                                    <p>05 Courses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-3 cards">
                        <div className="card">
                            <div className="card-img">
                                <img src="./img/online/cs1.jpg" className='w-100' alt="test" />
                            </div>
                            <div className="d-flex card_details">
                                <div className="col-2">
                                    <img src="./img/online/cs.png" className='w-100' alt="gen" />
                                </div>
                                <div className="col-10">
                                    <h3>Computer Science</h3>
                                    <p>05 Courses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-3 cards">
                        <div className="card">
                            <div className="card-img">
                                <img src="./img/online/ce1.jpg" className='w-100' alt="test" />
                            </div>
                            <div className="d-flex card_details">
                                <div className="col-2">
                                    <img src="./img/online/ce.png" className='w-100' alt="gen" />
                                </div>
                                <div className="col-10">
                                    <h3>Civil Engineering</h3>
                                    <p>05 Courses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-3 cards">
                        <div className="card">
                            <div className="card-img">
                                <img src="./img/online/bs1.jpg" className='w-100' alt="test" />
                            </div>
                            <div className="d-flex card_details">
                                <div className="col-2">
                                    <img src="./img/online/bs.png" className='w-100' alt="gen" />
                                </div>
                                <div className="col-10">
                                    <h3>Business Studies</h3>
                                    <p>05 Courses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-3 cards">
                        <div className="card">
                            <div className="card-img">
                                <img src="./img/online/ai1.jpg" alt="test" className='w-100'  />
                            </div>
                            <div className="d-flex card_details">
                                <div className="col-2">
                                    <img src="./img/online/ai.png" className='w-100' alt="gen" />
                                </div>
                                <div className="col-10">
                                    <h3>Arificial Intelligence</h3>
                                    <p>05 Courses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-3 cards">
                        <div className="card">
                            <div className="card-img">
                                <img src="./img/online/ceng1.jpg" className='w-100' alt="test" />
                            </div>
                            <div className="d-flex card_details">
                                <div className="col-2">
                                    <img src="./img/online/ceng.png" className='w-100' alt="gen" />
                                </div>
                                <div className="col-10">
                                    <h3>Computer Engineering</h3>
                                    <p>05 Courses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;