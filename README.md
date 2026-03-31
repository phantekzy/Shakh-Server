# Arc Web Framework

Arc is a framework for Node.js created to provide a transparent and predictable engine for building APIs. Instead of using high-level libraries like Express, Arc is built from scratch using TypeScript and the native Node.js http module. This gives developers total control over the request-lifecycle and removes the hidden logic found in larger frameworks.

## Core Architecture

### 1. Regex-Based Routing
The routing system does not rely on simple string matching. It converts defined paths into regular expressions.
- Dynamic segments like :id are automatically identified and extracted.
- It is resilient to complex URL characters including hyphens and dots.
- Captured parameters are attached directly to the request object for easy access.

### 2. Recursive Middleware Pipeline
The heart of the framework is a linear execution chain managed by a recursive next() function.
- Every request moves through a series of checkpoints in a strict order.
- By using asynchronous execution (await), the engine ensures that one task—such as authentication or logging—is fully completed before the next begins.
- This architecture prevents race conditions and ensures the server state remains predictable.

### 3. Request and Response Wrappers
To improve the development experience without adding bloat, the native Node.js request and response objects are wrapped in ArcRequest and ArcResponse.
- It includes a built-in JSON parser that handles incoming data streams safely.
- It provides a clean API for sending responses using methods like res.status() and res.json().

### 4. Global Error Boundary
A centralized safety net is built into the core handler.
- The entire middleware pipeline is wrapped in a try/catch block.
- If a route handler or middleware crashes, the error is caught, a 500 status is sent to the user, and the server process remains online.

## How It Works

1. A request hits the Node.js http server.
2. Arc wraps the raw request and response.
3. The Router matches the URL against defined patterns using Regex.
4. The Pipeline starts, running global middlewares first, then route-specific handlers.
5. The next() function moves the request through each step.
6. The final handler sends the response back to the user.

---

## TODO: Next Steps for Development

- Static File Server: Build a middleware to serve images, CSS, and HTML files from the disk.
- Form Data Parser: Add support for application/x-www-form-urlencoded data to handle standard HTML forms.
- Router Optimization: Benchmarking the Regex matcher to ensure performance remains high under heavy load.
- Security Headers: Implement a built-in system to set security headers (HSTS, XSS Protection, CSP).
- Dependency Injection: Create a clean way to pass database connections or services into the request context.
- Validation Layer: Integrate a schema-based validation system to check incoming data before it reaches handlers.
