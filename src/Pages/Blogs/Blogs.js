import React from 'react';

const Blogs = () => {
    return (
        <div className="container">
            <div className="py-4">
                <h1 className="fw-bold">
                    1.How to improve the performance of react application?
                </h1>
                <p>
                    When it's necessary, keep component state local.
                    To avoid unwanted re-renders, memorize React components.
                    React code splitting with dynamic import.
                    In React, windowing or list virtualization is used.
                    Images are loaded slowly in React. Lock after on it.
                </p>
            </div>
            <div className="py-4">
                <h1 className="fw-bold">
                    2. What are the different ways to manage a state in a react application?
                </h1>
                <p>
                    Local state. <br />
                    Global state. <br />
                    Server state. <br />
                    URL state.
                </p>
            </div>
            <div className="py-4">
                <h2 className="fw-bold">
                    3. How does prototypical inheritance work?
                </h2>
                <p>
                    Prototypal inheritance is a javascript feature that allows you to add methods and properties to objects. It's a method that allows one object to inherit the properties and methods of another. We traditionally use Object.getPrototypeOf and Object. setPrototypeOf to get and set the Prototype of an object.
                </p>
            </div>
            <div className="py-4">
                <h2 className="fw-bold">
                    4. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </h2>
                <p>
                    Firstly, javascript give us the many method for an array, there mostly used search format are using "Array.filter", "Array.find", "Array.includes", "Array.indexof". Those give us to find andy data
                </p>
            </div>
            <div className="py-4">
                <h2 className="fw-bold">
                    5.What is a unit test? Why should write unit tests?
                </h2>
                <p>
                    This is a sort of software testing in which the smallest testable module of an application, such as functions, procedures, or interfaces, is tested to see if it is fit for use. Before code is deployed, unit testing verifies that it meets quality criteria. This promotes a stable engineering environment that prioritizes quality. Unit testing saves time and money across the product development life cycle, and it helps developers produce better code faster.
                </p>
            </div>
        </div>
    );
};

export default Blogs;