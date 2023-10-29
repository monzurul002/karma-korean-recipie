
const Blogs = () => {
    return (
        <div className="container py-5">
            <div>
                <h5 className="text-primary-emphasis">Differences between uncontrolled and controlled components.</h5>
                <p className="text-secondary">In React, the main difference between uncontrolled and controlled components lies in how they handle and manage data and user input. Uncontrolled components rely on the DOM to handle their values and state, making them more flexible but often less predictable. In contrast, controlled components manage their data through React state, ensuring a consistent and predictable user experience. They allow you to easily access, update, and validate user input, making them a preferred choice when you need precise control over form elements and interactive components in your application.</p>
            </div>
            <div>
                <h5 className="text-primary-emphasis">How to validate React props using PropTypes.</h5>
                <p className="text-secondary">To validate React props using PropTypes, you can use the `prop-types` library. First, ensure it's installed in your project. Then, define a `propTypes` object within your component, specifying the expected data types and, if needed, whether a prop is required. For example, if a component expects a 'name' prop as a string and it's required, you can set `name: PropTypes.string.isRequired`. Using PropTypes helps catch potential data type errors during development and improves the reliability of your React components by providing runtime warnings when props don't match the defined types or are missing..</p>
            </div>
            <div>
                <h5 className="text-info-emphasis">Difference between nodejs and express js .</h5>
                <p className="text-secondary">Node.js is a runtime environment that allows JavaScript to run on the server-side. It provides the fundamental platform for server-side JavaScript execution. Express.js, on the other hand, is a web application framework for Node.js. It builds on Node.js to simplify the creation of web applications by providing a set of high-level abstractions for handling HTTP requests, routing, middleware, and more. Node.js is more of a runtime, while Express.js is a framework that runs on top of Node.js, making it easier and more efficient to develop web applications, APIs, and services. Express.js simplifies common web development tasks and speeds up development with its minimalistic, flexible design.
                </p>
            </div>
            <div>
                <h5 className="text-primary-emphasis">What is a custom hook, and why will you create a custom hook?</h5>
                <p className="text-secondary">A custom hook in React is a reusable JavaScript function that encapsulates specific logic or behavior to be shared across different components. Custom hooks promote code reuse and maintainability in React applications. Here's a step-by-step explanation of creating a custom hook:

                    1. **Identify Repeated Logic**: First, identify any repetitive logic or functionality within your React components. This could include state management, data fetching, side effects, or any behavior that's used in multiple places.

                    2. **Create a New JavaScript Function**: Define a new JavaScript function that encapsulates the identified logic. This function can take arguments and return data, functions, or state, making it versatile and customizable.

                    3. **Prefix with 'use'**: To follow the React convention, name your custom hook with a 'use' prefix. For example, if it handles state, you could name it 'useCustomState' or something similar.

                    4. **Implement the Logic**: Inside the custom hook function, implement the logic you want to encapsulate. You can use React's built-in hooks or any JavaScript functionality you need.

                    5. **Return Data or Functions**: The custom hook should return the data or functions that components will use to access and interact with the encapsulated logic.

                    6. **Import and Use in Components**: Import your custom hook in your React components and use it just like you would with built-in React hooks. This promotes code reusability and maintains a clean, DRY (Don't Repeat Yourself) codebase.

                    Common use cases for custom hooks include managing global state, handling complex side effects, encapsulating API calls, and any functionality that can be reused across multiple components, enhancing the modularity and readability of your code.
                </p>
            </div>
        </div>
    );
};

export default Blogs;