import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="grid text-center my-8 md:text-5xl sm:text-3xl font-bold underline ">
        Ans the Question
      </h1>
      <div className="grid md:grid-cols-2 gap-8 my-8">
        <div>
          <h1 className="text-3xl font-bold my-2">When is  you used context api?</h1>
          <p>
            Context API is a feature in React that is used to share data between
            components without having to pass props down through every level of
            the component tree. It is typically used when you have data that
            needs to be shared between multiple components, such as user
            authentication data, theme settings, or localization data. Context
            API can be especially useful in larger applications where passing
            data through props can become cumbersome and difficult to manage. By
            using Context API, you can centralize your data and make it
            accessible to all the components that need it, without having to
            pass it through intermediate components that don't need it. It also
            provides a way to manage global state in your application, making it
            an efficient tool for state management.
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold my-2">What is Custom hooks ?</h1>
          <p>
            Custom hooks are a feature in React that allow you to extract
            reusable logic from your components and share it across your
            application. Custom hooks are functions that use React hooks such as
            useState, useEffect, useContext, and others, to create a piece of
            reusable logic that can be used by any component in your
            application. Custom hooks can be used to solve common problems in
            your application, such as managing form state, handling asynchronous
            data fetching, or managing the state of a component that needs to be
            reused across multiple parts of your application. By creating custom
            hooks, you can make your code more modular, easier to test, and less
            repetitive. In summary, custom hooks are functions that allow you to
            extract reusable logic from your components and share it across
            your.
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold my-2">What is useful useRef?</h1>
          <p>
            The useRef hook in React is useful for accessing and manipulating
            DOM elements directly from your component code. It creates a
            reference that persists across re-renders and can be used to access
            the underlying DOM node or component instance. One use case for
            useRef is to focus an input field when a component is mounted or
            when a certain action is performed. Another use case is to store
            values that need to persist across re-renders but don't necessarily
            trigger a re-render themselves. For example, useRef can be used to
            store a counter that increments each time a button is clicked
            without causing the component to re-render. It can also be used to
            create an instance variable to store the previous state of a
            component, which can be useful when working with complex state
            updates.
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold my-2">What is the useMatch?</h1>
          <p>
            The match object is part of the React Router library and provides
            information about how a URL matched a specific route in your
            application. The match object contains properties such as the URL
            path, any parameters that were extracted from the path, and whether
            the route was exact or not. The match object is typically used in
            React applications to conditionally render components based on the
            current URL. For example, you might use the match object to render a
            different component based on whether the user is at the root URL or
            a specific sub-path. The match object can be accessed in several
            ways, depending on how your components are structured. You can use
            the useRouteMatch hook to access the match object directly within a
            component, or you can use the Route component to render a component.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
