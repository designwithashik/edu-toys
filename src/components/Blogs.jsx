import React from 'react';

const Blogs = () => {
    return (
        <div>
                  <h2 className="text-3xl  text-center font-bold mb-4 text-[#FF1276]">Blogs</h2>
            <div className="flex gap-5 flex-col">
                <div className="">
                <h1 className="text-xl font-bold">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
      <p className="py-6"><span className="font-bold text-[#FF1276]">Ans: </span> Access token is a key that allows you to access certain resources or information on a website or app after you log in. It's given to you by the website's server. <br />
                    On the other hand Refresh token is also given to you when you log in, but it's a special token that helps you get a new access token when the current access token is expired.
                        <br />
                        Refresh tokens are long-lived and stored securely on your device. When your access token expires, you can use the refresh token to get a new access token without logging in again. Access tokens are stored in memory while you're using the website, and refresh tokens are stored securely on your device, often using techniques like HTTP-only cookies or encrypted browser storage facilities.
</p>
                </div>
                <div className="">
                <h1 className="text-xl font-bold">Compare SQL and NoSQL databases?</h1>
                    <div className="py-6 text-sm"><span className="font-bold text-[#FF1276]">Ans: </span> SQL: SQL databases are structured databases that use a predefined logic and SQL language for managing and querying data.
                        <br />NoSQL: NoSQL databases are flexible databases that can handle unstructured and varied data formats without a predefined logic.
                        <br />The Comparison between these two are down below
                        <br />
                        SQL
                        <ul className='list-disc list-inside'>
                            <li>
                                Uses structured tables with predefined schemas(logic)
                            </li>
                            <li>
                            ullows a rigid schema
                            </li>
                            <li>
                            Suitable for structured and relational data
                            </li>
                        </ul>
                        NoSQL
                        <ul className='list-disc list-inside'>
                            <li>
                            Doesn't Uses structured tables with predefined schemas(logic). Offers flexibility.
                            </li>
                            <li>
                            Supports dynamic schema
                            </li>
                            <li>
                            Suitable for unstructured and semi-structured data
                            </li>
                        </ul>





</div>
                </div>
                <div className="">
                <h1 className="text-xl font-bold">What is express js? What is Nest JS?</h1>
                    <p className="py-6"><span className="font-bold text-[#FF1276]">Ans: </span> Express.js is a minimalist web application framework for Node.js that helps you build server-side applications and APIs easily.
                        <br />
                        On the other hand NestJS is a powerful and opinionated framework for building scalable server-side applications using TypeScript, inspired by Angular's structure and patterns.</p>
                </div>
                <div className="">
                <h1 className="text-xl font-bold">What is MongoDB aggregate and how does it work?</h1>
                    <p className="py-6"><span className="font-bold text-[#FF1276]">Ans: </span> MongoDB's aggregate is a feature that allows you to perform advanced data processing and aggregations on documents in a collection.
                        <br />
                        It works by defining a pipeline of stages, where each stage performs a specific operation on the data. The results are passed from one stage to the next, allowing you to perform complex transformations and calculations. It provides a flexible and efficient way to analyze and manipulate your data within MongoDB.
                    </p>
                </div>
                 </div>
        </div>
    );
};

export default Blogs;