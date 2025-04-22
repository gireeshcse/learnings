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

