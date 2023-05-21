import React from 'react';

const Gallery = () => {
    return (
        <div className='mb-28'>
            <h2 className='text-4xl mb-7 text-center font-bold'>Joy Gallery </h2>
            <div className="carousel rounded-box w-full">

                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Y3Vx8kK/wallpaperflare-com-wallpaper-3.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle bg-purple-600 border-none">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-purple-600 border-none">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/X8s2tqW/wallpaperflare-com-wallpaper-1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-purple-600 border-none">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-purple-600 border-none">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/0t5wjm7/wallpaperflare-com-wallpaper-2.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-purple-600 border-none">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-purple-600 border-none">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/ZVgF4tf/wallpaperflare-com-wallpaper.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-purple-600 border-none">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-purple-600 border-none">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;