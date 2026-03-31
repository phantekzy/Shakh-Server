# Arc Web Framework

Arc is a framework built from scratch using Node.js and TypeScript. I created this to have total control over the request lifecycle and to remove the "magic" found in heavy libraries like Express. It is designed to be a transparent, fast, and secure engine for building APIs.

## Core Features

### 1. Unified Middleware Pipeline
The framework uses a recursive next() function to manage the execution of code.
- Every request moves through a single "pipe" that contains global middlewares and the final route handler.
- By using async/await, I ensure that one task (like checking a password) is 100% finished before the next one starts.
- This design prevents race conditions where multiple handlers try to send a response at the same time.

### 2. Regex-Based Routing
I built a custom router that doesn't just look for exact text matches.
- It converts path patterns (like /users/:id) into Regular Expressions.
- It is smart enough to handle IDs that contain numbers, hyphens, or dots (like maini-77).
- It supports optional trailing slashes so both /home and /home/ work correctly.

### 3. Built-in Security and Parsers
I wrote custom handlers to process incoming data safely:
- JSON Parser: Automatically reads JSON bodies but includes a 1MB limit to protect the server's memory from "JSON Bomb" attacks.
- URL-Encoded Parser: Processes standard HTML form data, decodes URI components, and handles plus signs (+) as spaces.
- CORS: A built-in system to control which websites are allowed to talk to the API.

### 4. Professional Request/Response Wrappers
I extended the basic Node.js tools into ArcRequest and ArcResponse.
- This gives me a clean way to write code using commands like res.status(200).json().
- It simplifies handling headers, query strings, and URL parameters.

### 5. Global Error Boundary
A safety net is built into the core engine.
- Every step of the process is wrapped in a try/catch block.
- If a bug happens in a specific route, the server catches the error, tells the user something went wrong, and stays online for everyone else.
- It is environment-aware, showing full error details during development but hiding them in production.

---

## TODO: Next Steps

- Static File Server: Create a middleware to serve files like images, CSS, and HTML from the disk.
- Router Benchmarking: Test the speed of the Regex matcher under very high traffic to find bottlenecks.
- Security Hardening: Add built-in protection for common web attacks like XSS and CSRF.
- Dependency Injection: Build a way to easily pass database connections or services into the request context.
- Validation Layer: Add a system to check if incoming data is correct before it reaches the main logic.
