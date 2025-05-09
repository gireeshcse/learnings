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