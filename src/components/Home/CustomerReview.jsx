import React from 'react';

const CustomerReview = () => {
    return (
        <div className='mb-28'>
            <h2 className='font-bold text-4xl text-center mb-7'>What our customers say</h2>
            <div className="carousel w-full">
                <div id="slide11" className="carousel-item  w-full">
                    <div className='flex'>
                        <div className='w-full pb-14 relative'>

                            <img src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2xpZW50LHNtaWxlfHx8fHx8MTY4NDU2Mzg1MQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400" className="w-1/2 rounded-box mx-auto" />
                            
                            <div className="flex justify-center gap-3 my-3">
                                <a href="#slide12" className="btn btn-circle bg-white border-none">❮</a>
                                <a href="#slide12" className="btn btn-circle bg-white border-none">❯</a>
                            </div>
                <div className="w-72 right-32 -z-40 bottom-5 absolute h-72 bg-purple-600 rounded-full"></div>
                        </div>
                        <div className='w-full'>
                            <div className="lg:w-1/2 mx-auto">
                            <h2 className='text-2xl mb-5'>Johana Doe</h2>
                            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa asperiores magni laboriosam vitae adipisci iste optio officiis. Placeat laboriosam, ratione iste sequi deserunt incidunt ab fuga adipisci tempora alias velit.</p>
                                <a className='text-purple-600 font-bold' href="">Read More</a>
                                </div>
                        </div>
                    </div>

                </div>
                <div id="slide12" className="carousel-item  w-full">
                    <div className='flex'>
                        <div className='w-full'><img src="https://images.unsplash.com/photo-1483381616603-8dde934da56f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2xpZW50LHNtaWxlfHx8fHx8MTY4NDU2Mzg0MQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400" className="w-1/2 rounded-box mx-auto" />
                            <div className="flex justify-center gap-3 my-3">
                                <a href="#slide11" className="btn btn-circle bg-purple-600 border-none">❮</a>
                                <a href="#slide11" className="btn btn-circle bg-accent border-none">❯</a>
                            </div></div>
                        <div className='w-full'>
                            <h2 className='text-2xl mb-5'>Mary Kim</h2>
                            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa asperiores magni laboriosam vitae adipisci iste optio officiis. Placeat laboriosam, ratione iste sequi deserunt incidunt ab fuga adipisci tempora alias velit.</p>s
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    );
};

export default CustomerReview;