Mastering **React.js** for web development requires a structured approach that builds foundational skills, progresses to advanced concepts, and culminates in real-world projects and professional preparation. Below is a detailed plan to learn React.js, designed for beginners to intermediate learners with basic JavaScript knowledge. The plan spans 3-6 months (10-15 hours/week), covering core concepts, practical projects, and job readiness, with curated resources for each step. Since you previously asked about learning React Native alongside React.js, this plan focuses solely on React.js for web development but acknowledges shared concepts for context.

---

### Learning Plan: Mastering React.js for Web Development

#### Phase 1: Foundations (Weeks 1-4)
**Goal**: Build a strong foundation in JavaScript and core React.js concepts.

##### Step 1: Master JavaScript (ES6+)
React.js relies heavily on modern JavaScript. A solid grasp of ES6+ is essential for writing efficient React code.
- **Topics**:
  - Variables (`let`, `const`, `var`), data types, functions
  - Array methods (`map`, `filter`, `reduce`)
  - Objects, destructuring, spread/rest operators
  - Promises, async/await, error handling
  - Modules (import/export)
  - Event handling and DOM basics
- **Resources**:
  - [JavaScript.info](https://javascript.info/) (Free, comprehensive tutorials)
  - [FreeCodeCamp JavaScript Course](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) (Free, interactive)
  - [MDN Web Docs: JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (Free, authoritative reference)
- **Practice**:
  - Solve 20-30 problems on [Codewars](https://www.codewars.com/) or [LeetCode](https://leetcode.com/) (focus on arrays, objects, async code).
  - Build a small project, e.g., a to-do list or calculator in vanilla JavaScript.

##### Step 2: Learn HTML and CSS
React.js works with HTML and CSS for building UIs. Understanding these is crucial for styling and structuring components.
- **Topics**:
  - HTML: Semantic elements, forms, accessibility basics
  - CSS: Flexbox, Grid, responsive design, CSS-in-JS (for React)
  - Basic CSS frameworks (e.g., Tailwind CSS, Bootstrap)
- **Resources**:
  - [FreeCodeCamp HTML/CSS](https://www.freecodecamp.org/learn/2022/responsive-web-design/) (Free, interactive)
  - [CSS-Tricks](https://css-tricks.com/) (Free, practical guides)
  - [Tailwind CSS Docs](https://tailwindcss.com/docs) (Free, for modern styling)
- **Practice**:
  - Build a static webpage (e.g., a portfolio or landing page) using HTML and CSS.
  - Experiment with Tailwind CSS for responsive design.

##### Step 3: Introduction to React.js
Learn the basics of React.js to understand its component-based architecture.
- **Topics**:
  - Setting up a React environment (Create React App)
  - JSX, components (functional), props, state
  - React hooks (`useState`, `useEffect`)
  - Event handling, conditional rendering
  - Basic component styling (CSS modules, styled-components)
- **Resources**:
  - [React Official Tutorial](https://react.dev/learn) (Free, beginner-friendly)
  - [Scrimba: Learn React](https://scrimba.com/learn/learnreact) (Free, interactive course)
  - [The Net Ninja: React Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwf-M9l5k26Z3f6Pvez) (Free, YouTube)
  - [Udemy: React - The Complete Guide](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) (Paid, comprehensive)
- **Practice**:
  - Set up a React project using Create React App.
  - Build a simple app, e.g., a task tracker or counter, using functional components and hooks.
  - Style components using CSS modules or Tailwind CSS.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Task Tracker</title>
  <script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7.20.6/babel.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    function App() {
      const [tasks, setTasks] = React.useState([]);
      const [input, setInput] = React.useState('');

      const addTask = () => {
        if (input.trim()) {
          setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
          setInput('');
        }
      };

      const toggleTask = (id) => {
        setTasks(tasks.map(task => 
          task.id === id ? { ...task, completed: !task.completed } : task
        ));
      };

      return (
        <div className="max-w-md mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Task Tracker</h1>
          <div className="flex mb-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border p-2 flex-1 mr-2"
              placeholder="Add a task"
            />
            <button
              onClick={addTask}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Add
            </button>
          </div>
          <ul>
            {tasks.map(task => (
              <li
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className={`p-2 mb-2 cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`}
              >
                {task.text}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    ReactDOM.render(<App />, document.getElementById('root'));
  </script>
</body>
</html>
```

---

#### Phase 2: Intermediate React.js Skills (Weeks 5-10)
**Goal**: Dive deeper into React.js, focusing on advanced features, state management, and data handling.

##### Step 4: Advanced Components and Routing
Learn to build complex UIs and handle navigation.
- **Topics**:
  - Advanced hooks (`useReducer`, `useCallback`, `useMemo`)
  - React Router (nested routes, dynamic routing)
  - Component composition (HOCs, render props)
  - Lazy loading and code splitting
- **Resources**:
  - [React Router Docs](https://reactrouter.com/) (Free, official guide)
  - [React Official Docs: Advanced](https://react.dev/reference/react) (Free)
  - [Academind: React Tutorials](https://www.youtube.com/c/Academind) (Free, YouTube)
- **Practice**:
  - Build a multi-page web app (e.g., a blog with home, post, and about pages) using React Router.
  - Implement lazy loading for a component (e.g., post details).

##### Step 5: State Management and APIs
Manage complex state and integrate with APIs for dynamic data.
- **Topics**:
  - State management (Redux Toolkit, Zustand, or Context API)
  - Fetching data (`fetch`, Axios)
  - Error handling, loading states
  - Browser storage (localStorage, sessionStorage)
- **Resources**:
  - [Redux Toolkit Docs](https://redux-toolkit.js.org/) (Free)
  - [Zustand GitHub](https://github.com/pmndrs/zustand) (Free, lightweight)
  - [The Net Ninja: Redux Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iWstf-M9l5k26Z3f6Pvez) (Free, YouTube)
  - [Axios Docs](https://axios-http.com/docs/intro) (Free)
- **Practice**:
  - Build a weather app that fetches data from [OpenWeatherMap](https://openweathermap.org/) and stores user preferences in localStorage.
  - Use Redux Toolkit or Zustand for state management.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Weather App</title>
  <script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/axios@1.6.2/dist/axios.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7.20.6/babel.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    function WeatherApp() {
      const [city, setCity] = React.useState('');
      const [weather, setWeather] = React.useState(null);
      const [loading, setLoading] = React.useState(false);
      const [error, setError] = React.useState('');

      const API_KEY = 'YOUR_API_KEY'; // Replace with OpenWeatherMap API key
      const fetchWeather = async () => {
        setLoading(true);
        setError('');
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          );
          setWeather(response.data);
          localStorage.setItem('lastCity', city);
        } catch (err) {
          setError('City not found');
        }
        setLoading(false);
      };

      React.useEffect(() => {
        const lastCity = localStorage.getItem('lastCity');
        if (lastCity) {
          setCity(lastCity);
          fetchWeather();
        }
      }, []);

      return (
        <div className="max-w-md mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Weather App</h1>
          <div className="flex mb-4">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border p-2 flex-1 mr-2"
              placeholder="Enter city"
            />
            <button
              onClick={fetchWeather}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Search
            </button>
          </div>
          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {weather && (
            <div className="border p-4 rounded">
              <h2 className="text-xl">{weather.name}</h2>
              <p>{weather.main.temp}°C</p>
              <p>{weather.weather[0].description}</p>
            </div>
          )}
        </div>
      );
    }

    ReactDOM.render(<WeatherApp />, document.getElementById('root'));
  </script>
</body>
</html>
```

##### Step 6: Debugging and Testing
Ensure your apps are robust and performant.
- **Topics**:
  - Debugging with React DevTools
  - Unit testing with Jest
  - UI testing with React Testing Library
  - Performance optimization (memoization, `useMemo`, `useCallback`)
- **Resources**:
  - [React DevTools](https://react.dev/learn/react-developer-tools) (Free)
  - [Jest Docs](https://jestjs.io/docs/getting-started) (Free)
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) (Free)
- **Practice**:
  - Write unit tests for a component (e.g., the weather app’s input form).
  - Use React DevTools to identify and fix a performance issue (e.g., unnecessary re-renders).

---

#### Phase 3: Building Real-World Apps (Weeks 11-16)
**Goal**: Apply skills to build complex, production-ready web apps.

##### Step 7: Advanced Features
Incorporate features used in professional React apps.
- **Topics**:
  - Server-side rendering (Next.js basics)
  - Authentication (Firebase Auth or Auth0)
  - WebSockets or real-time updates (e.g., Socket.IO)
  - Advanced styling (Tailwind CSS, styled-components)
- **Resources**:
  - [Next.js Docs](https://nextjs.org/docs) (Free, for SSR and static sites)
  - [Firebase Auth Docs](https://firebase.google.com/docs/auth) (Free)
  - [Socket.IO Docs](https://socket.io/docs/v4/) (Free)
  - [Tailwind CSS Docs](https://tailwindcss.com/docs) (Free)
- **Practice**:
  - Build a social media dashboard using Next.js (posts, likes, comments) with Firebase Auth and real-time updates via Socket.IO.
  - Use Tailwind CSS for styling.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Social Media Dashboard</title>
  <script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7.20.6/babel.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    function Post({ post }) {
      const [likes, setLikes] = React.useState(post.likes);

      const handleLike = () => {
        setLikes(likes + 1);
      };

      return (
        <div className="border p-4 mb-4 rounded">
          <h3 className="text-lg font-bold">{post.title}</h3>
          <p>{post.content}</p>
          <button
            onClick={handleLike}
            className="text-blue-500 mt-2"
          >
            Likes: {likes}
          </button>
        </div>
      );
    }

    function Dashboard() {
      const [posts, setPosts] = React.useState([
        { id: 1, title: 'First Post', content: 'Hello, world!', likes: 0 },
        { id: 2, title: 'Second Post', content: 'React is awesome!', likes: 0 },
      ]);

      return (
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Social Media Dashboard</h1>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      );
    }

    ReactDOM.render(<Dashboard />, document.getElementById('root'));
  </script>
</body>
</html>
```

##### Step 8: Portfolio Project
Create a polished, full-featured app to showcase your skills.
- **Project Ideas**:
  - E-commerce platform (product listing, cart, checkout)
  - Task management app (Kanban board, drag-and-drop)
  - Blog platform (posts, comments, user profiles)
- **Steps**:
  1. Plan features and UI using [Figma](https://www.figma.com/) (free tier).
  2. Implement core functionality with React Router and state management.
  3. Add advanced features (e.g., authentication, real-time updates).
  4. Optimize performance and test thoroughly.
- **Resources**:
  - [Dribbble](https://dribbble.com/) (UI inspiration)
  - [GitHub](https://github.com/) (Host code)
  - [Vercel](https://vercel.com/) (Free deployment for React apps)

---

#### Phase 4: Professional Preparation (Weeks 17-20)
**Goal**: Prepare for a job or freelance work by building a portfolio and contributing to open-source.

##### Step 9: Open-Source Contributions
Contribute to React projects to gain real-world experience.
- **Steps**:
  - Search for “good first issue” on [GitHub: React Issues](https://github.com/facebook/react/issues).
  - Start with small fixes (e.g., documentation, minor bugs).
  - Progress to features or optimizations.
- **Resources**:
  - [First Contributions](https://firstcontributions.github.io/) (Free guide)
  - [GitHub: React](https://github.com/facebook/react) (Free)
- **Practice**:
  - Submit 2-3 pull requests to React or related libraries.

##### Step 10: Job/Freelance Prep
Build a portfolio and prepare for opportunities.
- **Steps**:
  - Create a portfolio site showcasing 2-3 React projects.
  - Deploy apps to [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).
  - Practice interview questions (JavaScript, React, algorithms).
  - Network on LinkedIn and X (#ReactJS, #WebDevelopment).
- **Resources**:
  - [LeetCode](https://leetcode.com/) (Interview prep)
  - [HackerRank](https://www.hackerrank.com/) (Coding challenges)
  - [Awwwards](https://www.awwwards.com/) (Portfolio inspiration)
- **Practice**:
  - Deploy your portfolio and one project to Vercel.
  - Prepare a 1-minute pitch for your projects.

---

### Sample Timeline
| Week | Focus | Deliverable |
|------|-------|-------------|
| 1-2  | JavaScript, HTML, CSS | To-do list (JS), static webpage (HTML/CSS) |
| 3-4  | React.js Basics | Task tracker app |
| 5-6  | Advanced Components & Routing | Blog app with React Router |
| 7-8  | State & APIs | Weather app with API and localStorage |
| 9-10 | Debugging & Testing | Tested and optimized weather app |
| 11-14 | Advanced Features | Social media dashboard with Next.js and Firebase |
| 15-16 | Portfolio Project | E-commerce or task management app |
| 17-18 | Open-Source | 2-3 pull requests |
| 19-20 | Job Prep | Portfolio site, deployed apps, interview prep |

---

### Tools
- **Code Editor**: VS Code (free, with Prettier, ESLint)
- **Environment**: Create React App or Next.js
- **Browser**: Chrome/Firefox (for dev tools)
- **Version Control**: Git, GitHub
- **Testing**: Jest, React Testing Library
- **Deployment**: Vercel, Netlify

---

### Tips for Success
- **Daily Practice**: Code daily on [CodePen](https://codepen.io/) or [CodeSandbox](https://codesandbox.io/) for quick React experiments.
- **Community**: Join [Reddit: r/reactjs](https://www.reddit.com/r/reactjs/) or follow #ReactJS on X.
- **Stay Updated**: Follow the [React Blog](https://react.dev/blog) for updates.
- **Track Progress**: Use Notion or Trello to manage tasks and milestones.
- **Avoid Overwhelm**: Focus on one feature at a time (e.g., routing before state management).

---

This plan equips you to master React.js for web development, building on skills that overlap with React Native (e.g., components, hooks) while focusing on web-specific features like routing and SSR. If you want to integrate React Native learning, adjust the timeline, or get more specific resources, let me know!