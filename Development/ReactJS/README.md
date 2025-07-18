# REACTJS

* **VITE**
    - build tool that aims to provide a faster and leaner development experience for modern web projects

### Creating ReactJS Project

```
nvm install --lts
nvm use --lts
npm create vite@latest react-app
```

- Choose React and Javascript

```
cd react-app
npm install 
npm run dev
```
- App URL

```
http://localhost:5173/
```

* Library
    - Collection of functionalities that we can use in our code to achieve results that would normally require more code and work from our side.

* React is library to create interactive and reactive UIs.

* Imperative VS Declarative Code

    - Imperative

        - We write down all the instructions step by step.

    - Declarative

        - We describe the target state(s) and let some library figure out how to get there. 
        - We define the target UI content and structure, combined with different states and leave it up to react to figure out the appropriate DOM instructions.

* React creates a virtual DOM-like tree structure that reflects the current state of UI

* React splits its core logic across two main packages.
    - react 
      - creates virtual DOM and derives the current UI state
    - react-dom
      - react-dom/client
      - bridge between our react code, the virtual DOM and the browser with its actual DOM that we need to update.
      - Actual DOM instructions are generated by react-dom

* package.json

  - Manages packages and their versions.

* package-lock.json

  - Created automatically by Node.js. It locks in extra dependency and sub-dependency versions.

### Components

* Reusable building blocks that are combined to compose the final user interface.

- Ways to define components

    - Class
    - Functional

* A function will be treated as a component if it returns a renderable value(Typically JSX Code)

```
import myImage from './assets/my-image.png';
function App() {
  return <img src={myImage} />;
};
// For demo.jpg image file stored in public/images/demo.jpg
function App() {
  return <img src="/images/demo.jpg" />;
};
```

* To allow React to tell custom components apart from built-in components, custom component names have to start with capital letters when being used in JSX code (typically, PascalCase naming is used)
* Dynamic content can be output via curly braces (e.g., <p>{someText}</p>)

* The Special “children” Prop

```
<GoalItem id="g1">Learn React</GoalItem>

function GoalItem(props) {
  return <li>{props.children} (ID: {props.id})</li>;
}

function Link({children, config}) {
  return <a {...config} target="_blank" rel="noopener noreferrer">{children}</a>;
};

function Link({children, ...props}) {
  return <a {...props} target="_blank" rel="noopener noreferrer">{children}</a>;
};
```

* Props are a key React concept that make components configurable and, therefore, reusable.

* Root entry

```
import ReactDOM from 'react-dom/client';
import App from './App.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

* React State is about managing and updating internal data. Generally, whenever state is updated, react updates the parts of UI that are affected by the state change.

```
import { useState } from 'react';


function Counter(){
  const [counter,setCounter] = useState(0);
  function incrementCounter(event){
    setCounter((counter)=>{
      setCounter(counter+1);
    })
  }

  return (
    <>
      <h3>Counter Value : {counter}
      <button onClick={incrementCounter}>IncrementCounter</button>
    </>
  )
}
```

* Deriving Values from State

```
function CharCounter() {
  const [userInput, setUserInput] = useState('');
  function handleChange(event) {
    setUserInput(event.target.value);
  };
  const numChars = userInput.length;
  return (
    <>
      <input type="text" onChange={handleChange} />
      <p>Characters entered: {numChars}</p>
    </>
  );
};
```

  - when we call the state-updating function, react will reevaluate the component to which the state it belongs. The CharCounter component function will be called again by React. If it detects any differences compared to the currently rendered UI, react will go ahead and update the browser UI. Otherwise, nothing will happen.

* Lifting state up
  - When we have two components in our react app and a change or event in Component A should change the state in Component B
  - If state needs to change because of some event that occurs in another component, you should lift the state up and manage it on a higher, shared level (that is, a common ancestor component).


* Event handlers can be added to JSX elements via on[EventName] props (for example, onClick, onChange).
* In order to force React to re-evaluate components and (possibly) update the rendered UI, state must be used.
* When setting the state to a new value that depends on the previous value, a function should be passed to the state-updating function. This function then receives the previous state as a parameter (which will be provided automatically by React) and returns the new state that should be set.

* Conditional Statements

```
<div>
  {showDetails && <h1>Product Details</h1>}
</div>

<div>
  {showTerms ? <p>Our terms of use …</p> : null}
</div>

function Button({isButton, config, children}) {
  const Tag = isButton ? 'button' : 'a';
  return <Tag {...config}>{children}</Tag>;
};

import MyComponent from './my-component.jsx';
import MyOtherComponent from './my-other-component.jsx';
const Tag = someCondition ? MyComponent : MyOtherComponent;
```

* It is worth noting that using **&&** can lead to unexpected results if we’re using it with non-Boolean condition values.  If showDetails were 0 instead of false/null, the number 0 would be displayed on the screen.

* List Data

```
const productElements = [];
for (const product of products) {
  productElements.push((
    <li>
      <h2>{product.title}</h2>
      <p>${product.price}</p>
    </li>
  ));
}

const productElements = products.map(product => (
    <li>
      <h2>{product.title}</h2>
      <p>${product.price}</p>
    </li>
  )
);

return (
  <ul>
    {productElements}
  </ul>
);

```

* React uses the concept keys when working with list data and rendering list items. These are unique identifiers values that can be attached to JSX elements which help in identify elements that were rendered before and didn't change.

```
<li key={todo.id}>{todo.text}</li>
```

* Good keys are unique id values, such that every id belongs to exactly one value. If that value moves or is removed, its id should move or disappear with that value.


### Styling React Apps

```
import './index.css';
```

* During the transpilation process, the transpiler identifies the CSS import, removes it from the JavaScript file, and injects the CSS code(or an appropriate link to the potentially bundled and optimized CSS file) into the index.html file.

```
function TodoItem() {
  return <li className="goal-item" style={{color: 'red', fontSize: '18px'}}>Learn React!</li>;
};
```

* Setting Styles Dynamically
* Combining Multiple Dynamic CSS Classes
* Merging Multiple Inline Style Objects

```
let defaultStyle = { color: 'black' };
if (isImportant) {
  defaultStyle = { ...defaultStyle, backgroundColor: 'red' };
}
```
* Building Components with Customizable Styles (Using props)
* When using just CSS, clashing CSS class names can be a problem.
* Scoped Styles with CSS Modules
  - Individual CSS files are linked to specific Javascript files and the components defined in those files.
  - This link is established by transforming CSS class names, such that every JS file receives its own, unique CSS class names
  - CSS Modules are enabled and used by naming CSS files in a very specific and clearly defined way
  ```
  <anything>.module.css

  import classes from './file.module.css';
  ```
  * TextBox.module.css
  ```
  .alert {
    padding: 1rem;
    border-radius: 6px;
    background-color: #f9bcb5;
    color: #480c0c;
  }
  .info {
    padding: 1rem;
    border-radius: 6px;
    background-color: #d6aafa;
    color: #410474;
  }
  ```
  * TextBox.jsx

  ```
  import classes from './TextBox.module.css';
  function TextBox({ children, mode }) {
    let cssClasses;
    if (mode === 'alert') {
      cssClasses = classes.alert;
    } else if (mode === 'info') {
      cssClasses = classes.info;
    }
    return <p className={cssClasses}>{children}</p>;
  }
  export default TextBox;
  ```
  * CSS Modules are a very popular way of scoping styles to (React) components

* styled-components

  ```
  npm install styled-components
  ```

  - Provides wrapper components around all built in core components(p,a,button,input etc.)

  ```
  import styled from 'styled-components';
  const Button = styled.button`
    background-color: #333;
    color: white;
    border: none;
    padding: 1rem;
    border-radius: 4px;
  `;
  export default Button;
  ```

* [Using TailwindCSS](https://tailwindcss.com/docs/installation/using-vite)


### Refs

* Its a feature which allows us to store references to values(DOM elements).

```
import { useRef } from 'react';
function EmailForm(){
  const emailRef = useRef(null);

  return (
    <>
      <input
        ref={emailRef}
        type="email"
        id="email"
      />
    </>
  )
}

```
* After initial component render cycle, the connection is established.

```
function handleSubmitForm(event) {
  event.preventDefault();
  const enteredEmail = emailRef.current.value; // .current is mandatory!
  // could send enteredEmail to a backend server
};
```
* With this we can read the value from DOM element without having to use useState() and an event listener.

* We should not manipulate the DOM  and only react should do this.

```
emailRef.current.value = '';
```

* Using Refs for More than DOM Access
  - We can store strings or numbers or any other kind of value in a Ref

  ```
  const passwordRetries = useRef(0);
  passwordRetries.current = 1;
  ```
  - Useful for storing data that should survive component re-evaluations.
  - Changes to Ref values will not re-evaluate a component.
  - If we have data that should survive component re-evaluations but should not be managed as state (because change to that data should not cause the component to be re-evaluted when changed), we could use a Ref.

  * Refs in Custom Components

    - We can use them to access React Components- including our own components

    ```
    function Form() {
      const preferencesRef = useRef({});
      function handleSubmit(event) {
        event.preventDefault();
        console.log(preferencesRef.current.selectedPreferences); // reading a value
        preferencesRef.current.reset(); // executing a function stored in Preferences
      }
      return (
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.formControl}>
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" />
          </div>
          <Preferences ref={preferencesRef} />
          <button>Submit</button>
        </form>
      );
    }

    function Preferences(props) { // wrap with forwardRef() for React < 19
      const { ref } = props; // Extracting ref prop
      const [wantsNewProdInfo, setWantsNewProdInfo] = useState(false);
      const [wantsProdUpdateInfo, setWantsProdUpdateInfo] = useState(false);
      function handleChangeNewProdPref () {
        setWantsNewProdInfo((prevPref) => !prevPref);
      }
      function handleChangeUpdateProdPref() {
        setWantsProdUpdateInfo((prevPref) => !prevPref);
      }
      function reset() {
        setWantsNewProdInfo(false);
        setWantsProdUpdateInfo(false);
      }
      ref.current.reset = reset;
      ref.current.selectedPreferences = {
        newProductInfo: wantsNewProdInfo,
        productUpdateInfo: wantsProdUpdateInfo,
      };
        return (
          <div>
            <label>
              <input
                type="checkbox"
                id="pref-new"
                checked={wantsNewProdInfo}
                onChange={setWantsNewProdInfo}
              />
              <span>New Products</span>
            </label>
            <label>
              <input
                type="checkbox"
                id="pref-updates"
                checked={wantsProdUpdateInfo}
                onChange={setWantsProdUpdateInfo}
              />
              <span>Product Updates</span>
            </label>
          </div>
      );
    });
    ```

    - In versions below 19,
    ```
    const Preferences = forwardRef((props, ref) => {
      // component code ...
    });
    export default Preferences;

    function Preferences(props, ref) {
      // component code ...
    };
    export default forwardRef(Preferences);
    ```
* Controlled versus Uncontrolled Components

  - Uncontrolled Components: React is not directly controlling the UI state.

  - Controlled Approach

  ```
  function Preferences({newProdInfo, prodUpdateInfo, onUpdateInfo}) {
    return (
      <div className={classes.preferences}>
        <label>
          <input
            type="checkbox"
            id="pref-new"
            checked={newProdInfo}
            onChange={onUpdateInfo.bind(null, 'pref-new')}
          />
          <span>New Products</span>
        </label>
        <label>
          <input
            type="checkbox"
            id="pref-updates"
            checked={prodUpdateInfo}
            onChange={onUpdateInfo.bind(null, 'pref-updates')}
          />
          <span>Product Updates</span>
        </label>
      </div>
    );
  };
  ```

  * **bind()** default javascript method that can be called on any JS function to control which arguments will be passed to that function once its invoked in the futrue.

  ```
  function Form() {
    const [wantsNewProdInfo, setWantsNewProdInfo] = useState(false);
    const [wantsProdUpdateInfo, setWantsProdUpdateInfo] = useState(false);
    function handleUpdateProdInfo(selection) {
      // using one shared update handler function is optional
      // you could also use two separate functions (passed to Preferences) as props
      if (selection === 'pref-new') {
        setWantsNewProdInfo((prevPref) => !prevPref);
      } else if (selection === 'pref-updates') {
        setWantsProdUpdateInfo((prevPref) => !prevPref);
      }
    }
    function reset() {
      setWantsNewProdInfo(false);
      setWantsProdUpdateInfo(false);
    }
    function handleSubmit(event) {
      event.preventDefault();
      // state values can be used here
      reset();
    }
    return (
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.formControl}>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" />
        </div>
        <Preferences
          newProdInfo={wantsNewProdInfo}
          prodUpdateInfo={wantsProdUpdateInfo}
          onUpdateInfo={handleUpdateProdInfo}
        />
        <button>Submit</button>
      </form>
    );
  }
  ```

  * It is a good practice to go for controlled components in most cases. If we are only extracting some entered user input values, however, then using Refs and creating an uncontrolled component is absolutely fine.

  * Refs can be used to gain direct access to DOM elements or to store values that won't be reset or changed whech the surrounding component is re-evaluated

  * Refs should be used for direct access to read values, not to manipulate DOM elements. For this, we should leave to React. We can use refs for calling the methods such as focus()

  * Components that gain DOM access via Refs, instead of state and other React features, are considered uncontrolled components.

  ### Portals

  * Allows us to instruct React to insert a DOM element in a differenct place than where it would normally be inserted.

  * To use this portal feature, we must first define a place wherein elements can be inserted

  ```
  index.html

    <body>
      <div id="root"></div>
      <div id="dialogs"></div>
      <script type="module" src="/src/main.jsx"></script>
    </body>

  ```

  ```
  import { createPortal } from 'react-dom';
  import classes from './ErrorDialog.module.css';
  function ErrorDialog({ onClose }) {
    return createPortal(
      <>
        <div className={classes.backdrop}></div>
        <dialog className={classes.dialog} open>
          <p>
            This form contains invalid values. Please fix those errors before
            submitting the form again!
          </p>
          <button onClick={onClose}>Okay</button>
        </dialog>
      </>,
      document.getElementById('dialogs')
    );
  }
  export default ErrorDialog;
  ```

  * Portals are used to instruct React to render JSX elements in a different place in the DOM than they normally would.

  ### Side Effects

  * Side effects are actions or processes that occur in addition to another main process which does the component render cycle for updating the user interface.

  * Sending an HTTP request doesn't directly influence the user interface while response data is used for rendering. HTTP requests are asynchronous tasks which is side effect of some event such as clicking the button etc.

  * Any action that started upon the execution of React component function is a side effect if that action is not directly related to the main task of rendering the components user interface.

  * Examples of side effects

    - Sending an HTTP request
    - Storing data or fetching data from browser storage
    - Setting timers or intervalus
    - Logging data to console via console.log()

#### useEffect()

```
import { useState, useEffect } from 'react';
async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const blogPosts = await response.json();
  return blogPosts;
}
function BlogPosts() {
  const [loadedPosts, setLoadedPosts] = useState([]);
  useEffect(function () {
    fetchPosts().then((fetchedPosts) => setLoadedPosts(fetchedPosts));
  }, []);
  return (
    <ul>
      {loadedPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
export default BlogPosts;
```

* The first argument is a function that will be executed by React.The second argument is always an array which specifies the dependencies of the effect function.Change in ny dependency specified in this arrary causes the effect function execution.

* If dependecy is omitted, then react executes the effect function after every component re-evalution. If empty array is provided, it will be executed once.

```
import { useState, useEffect } from 'react';
async function fetchPosts(url) {
  const response = await fetch(url);
  const blogPosts = await response.json();
  return blogPosts;
}
function BlogPosts({ url }) {
  const [loadedPosts, setLoadedPosts] = useState([]);
  useEffect(function () {
    fetchPosts(url)
     .then((fetchedPosts) => setLoadedPosts(fetchedPosts));
  }, [url]);
  return (
    <ul>
      {loadedPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
export default BlogPosts;
```

* The common effect dependencies are
  - state values, props and functions that might be executed inside of the effect function.

  - Any value that's not defined inside a component function shouldn't be added to the dependencies array.

  - In Javascript, functions are actually objects. When the code that contains a function is executed again(eg: a component function being executed by React), a new function object will be created in memory.


* Cleaning up after effects

  ```
  // Alert.jsx
  import { useState, useEffect } from 'react';
  function Alert() {
    const [alertDone, setAlertDone] = useState(false);
    useEffect(function () {
      console.log('Starting Alert Timer!');
      setTimeout(function () {
        console.log('Timer expired!');
        setAlertDone(true);
      }, 2000);
    }, []);
    return (
      <>
        {!alertDone && <p>Relax, you still got some time!</p>}
        {alertDone && <p>Time to get up!</p>}
      </>
    );
  }
  export default Alert;
  ```

  ```
  // App.jsx
  import { useState } from 'react';
  import Alert from './components/Alert.jsx';
  function App() {
    const [showAlert, setShowAlert] = useState(false);
    function handleShowAlert() {
      // state updating is done by passing a function to setShowAlert
      // because the new state depends on the previous state (it's the opposite)
      setShowAlert((isShowing) => !isShowing);
    }
    return (
      <>
        <button onClick={handleShowAlert}>
          {showAlert ? 'Hide' : 'Show'} Alert
        </button>
        {showAlert && <Alert />}
      </>
    );
  }
  export default App;
  ```

  - In above example, if we start toggling the alert, the timer is set every time the Alert component is rendered, but it will not clear existing timer. This results in running timers simultaneously.

  - For HTTP requests, we should abort any ongoing HTTP request before a new one is sent.

  - In these cases, we need to clean up the effect before it runs again.

  - **useEffect()** can return an optional cleanup function. Which will be executed every time before it runs the effect again.

  ```
    useEffect(function () {
      let timer;
      console.log('Starting Alert Timer!');
      timer = setTimeout(function () {
        console.log('Timer expired!');
        setAlertDone(true);
      }, 2000);
      return function() {
        clearTimeout(timer);
      }
    }, []);
  ```
  - The cleanup function is not executed when the effect function is called for the first time. However, it will be called by React whenever a component that contains an effect unmounts(Removed from DOM)

- Dealing with multiple effects

  - Better approach would be to split our effect functions by dependencies
  ```
  function Demo() {
    const [a, setA] = useState(0); // state updating functions aren't called
    const [b, setB] = useState(0); // in this example
    useEffect(function() {
      console.log(a);
    }, [a]);  
  
    useEffect(function() {
      console.log(b);
    }, [b]);
    // return some JSX code ...
  }

  ```

* Functions as dependencies

  ```
  function Alert() {
    const [alertMsg, setAlertMsg] = useState('Expired!');
    function handleChangeAlertMsg(event) {
      setAlertMsg(event.target.value);
    }
    function setAlert() {
      setTimeout(function () {
        console.log(alertMsg);
      }, 2000);
    }
    useEffect(
      function () {
        setAlert();
      },
      []
    );
    return <input type="text" onChange={handleChangeAlertMsg} />;
  }
  export default Alert;
  ```

  * Initially, alertMsg is set to "Expired!"
  * useEffect runs once (because of the empty dependency array []), triggering setAlert()
  * setAlert() sets a timeout of 2 seconds, after which it logs the value of alertMsg
  * However, since the timeout function captures the value of alertMsg when setAlert was called (the initial state "Expired!"), any future changes to alertMsg won’t be reflected in this timeout.
  * If the user changes the input, alertMsg updates. However, setAlert() does NOT re-run because useEffect only runs once when the component mounts.

  ```
  // FIX
  useEffect(
    function () {
      setAlert();
    },
    [setAlert]
  );
  ```
  * If we need the final message
  ```
  function setAlert() {
    return setTimeout(function () {
      console.log(alertMsg);
    }, 2000);
  }
  useEffect(
    function () {
      const timer = setAlert();
      return function () {
        clearTimeout(timer);
      };
    },
    [setAlert]
  );
  ```
  * Moving the depencies

  ```
  useEffect(
    function () {
      function setAlert() {
        return setTimeout(function () {
          console.log(alertMsg);
        }, 2000);
      }
      const timer = setAlert();
      return function () {
        clearTimeout(timer);
      };
    },
    [alertMsg]
  );
  ```

* Always add all non-external dependencies - no matter whether they're variables or functions
* Functions are just objects and can change if their surrounding code executes again.

#### useCallback

- This ensures that a function is only recreated if one of the specified dependencies has changed. The default JS behavior of creating a new function object whenever the surrounding code executes again is disabled.

```
import { useState, useEffect, useCallback } from 'react';
function Alert() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  function handleUpdateEmail(event) {
    setEnteredEmail(event.target.value);
  }
  function handleUpdatePassword(event) {
    setEnteredPassword(event.target.value);
  }
  const validateEmail = useCallback(
    function () {
      if (!enteredEmail.includes('@')) {
        console.log('Invalid email!');
      }
    },
    [enteredEmail]
  );
  useEffect(
    function() {
      validateEmail();
    },
    [validateEmail]
  );
  // return JSX code ...
}
export default Alert;
```

* **Unnecessary effect execution is the usage of objects as dependencies**

```
// Error.jsx
import { useEffect } from 'react';
function Error(props) {
  useEffect(
    function () {
      // performing some error logging
      // in a real app, a HTTP request might be sent to some analytics API
      console.log('An error occurred!');
      console.log(props.message);
    },
    [props]
  );
  return <p>{props.message}</p>;
}
export default Error;
```

```
import { useState } from 'react';
import Error from './Error.jsx';
function Form() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  function handleUpdateEmail(event) {
    setEnteredEmail(event.target.value);
  }
  function handleSubmitForm(event) {
    event.preventDefault();
    if (!enteredEmail.endsWith('.com')) {
      setErrorMessage('Only email addresses ending with .com are accepted!');
    }
  }
  return (
    <form onSubmit={handleSubmitForm}>
      <div>
        <label>Email</label>
        <input type="email" onChange={handleUpdateEmail} />
      </div>
      {errorMessage && <Error message={errorMessage} />}
      <button>Submit</button>
    </form>
  );
}
export default Form;

```
* The useEffect dependency [props] is problematic because props is an object reference, and React re-creates props whenever Form re-renders. This can cause unnecessary effect executions.

```
// FIX
useEffect(
  function () {
    console.log('An error occurred!');
    console.log(props.message);
  },
  [props.message]
);
```

#### Effects and Asynchronous code

* The effect function itself should not be asynchronous and should not return a promise like below

  ```
  useEffect(async function () {
    const fetchedPosts = await fetchPosts();
    setLoadedPosts(fetchedPosts);
  }, []);
  ```

* To avoid the warnings in above cases, we can use promises without async/wait like below

  ```
  useEffect(function () {
    fetchPosts().then((fetchedPosts) => setLoadedPosts(fetchedPosts));
  }, []);

  // Other Alterative
  useEffect(function () {
    async function loadData() {
      const fetchedPosts = await fetchPosts();
      setLoadedPosts(fetchedPosts);
    }
  
    loadData();
  }, []);
  ```

### Rules of Hooks

- Only call hooks at the top level of component functions.Don't call them inside of if statements, loops or nested functions
- Only call hooks inside of react components or custom hooks.

### Effects

* Actions that are not directly related to the main process of a function can be considered side effects.
* If no dependency array is specified, the effect function executes after every component function invocation.
* For function dependencies, useCallback() can help reduce the number of effect executions.
* For object dependencies, destructuring can help reduce the number of effect executions.

### Steps to cancel a fetch call in useEffect

- Create an instance of AbortController
- Pass the controllers signal to the fetch request
- Call abort() inside the cleanup function

```
import { useEffect, useState } from 'react';

function FetchData() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://jsonplaceholder.typicode.com/posts', { signal })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setError(err.message);
        }
      });

    return () => {
      controller.abort(); // Cleanup: Cancel fetch if the component unmounts
    };
  }, []);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {data && <p>Fetched {data.length} items</p>}
    </div>
  );
}

export default FetchData;
```

```
// apiService.js
export async function fetchData(endpoint, params = {}) {
  const url = `https://jsonplaceholder.typicode.com/${endpoint}`;
  const options = {
    method: 'GET',
    ...params, // You can pass additional options like headers here
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error; // Propagate the error
  }
}

// FetchComponent.jsx
import { useEffect, useState } from 'react';
import { fetchData } from './apiService';

function FetchComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetchData('posts', { signal: controller.signal })
      .then(setData)
      .catch(setError);

    return () => controller.abort(); // Cleanup
  }, []);

  return (
    <div>
      {error && <p>Error: {error.message}</p>}
      {data && <p>Fetched {data.length} items</p>}
    </div>
  );
}

export default FetchComponent;

```

### Handling User Input & Forms

```
function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    const credentials = { email, password };
    console.log(credentials);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </p>
      <p className="actions">
        <button>Login</button>
      </p>
    </form>
  );
}
```

```
function App() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  function handleSubmit(event) {
    event.preventDefault();
    const credentials = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(credentials);
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={emailRef} />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordRef} />
      </p>
      <p className="actions">
        <button>Login</button>
      </p>
    </form>
  );
}
```

```
function App() {
  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    const credentials = {
      email: fd.get('email'),
      password: fd.get('password'),
    };
    console.log(credentials);
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </p>
      <p className="actions">
        <button>Login</button>
      </p>
    </form>
  );
}
```
* The above approach would not be ideal, if our application needs to change input values, using only FormData since we need to write the imperative code such as below to update an input field

```
function clearInput() {
  document.getElementById('email').value = ''; // imperative code :(
}
```

* if we need to access the input fields outside of handleSubmit() where event object is not available, then  working with Refs will simplify things.

```
const emailRef = useRef(null);
function showForm() {
  // other code ...
  emailRef.current.focus(); 
}
// simplified JSX code below
return (
  <form>
    <input ref={emailRef} />
  </form>
);
```

* Handling form submissions with Actions

  - React 19 consists of two kinds of actions
      
      - Client actions
      - Server actions

  - Client actions introduced to simplify the process of handling form submissions and data extractions

  ```
  function App() {
    function submitAction(formData) {
      const credentials = {
        email: formData.get('email'),
        password: formData.get('password'),
      };
      console.log(credentials);
    }
    return (
      <form action={submitAction}>
        <p>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </p>
        <p className="actions">
          <button>Login</button>
        </p>
      </form>
    );
  }
  ```

  - Here on form submission, the react will prevent the browser default and create a form data object for us


```
// Synchronous action
function storeTaskAction(formData) {
  const task = {
    title: formData.get('title'),
    body: formData.get('body'),
    dueDate: formData.get('date')
  };
  localStorage.setItem('daily-task', JSON.stringify(task));
}
```

```
//Asynchronous action
async function storeTodoAction(formData) {
  const todoTitle = formData.get('title');
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos', 
    {
      method: 'POST',
      body: JSON.stringify({ title: todoTitle }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
  );
  const todo = await response.json();
  console.log(todo);
} 
```