# Arc 

Arc is a framework for Node.js created to provide a transparent and predictable engine for building APIs and serving web content. Built from scratch using TypeScript and the native Node.js http module, Arc eliminates the "magic" found in larger libraries, giving developers total control over the request-response lifecycle.

## Project Structure

Arc is designed with a clear separation of concerns:
- core/: The framework engine (Router, Request, Response, and Error handling).
- middlewares/: Built-in plugins for security, data parsing, and logging.
- handlers/ & routes/: Modular patterns for organizing application logic.
- utils/: Helper functions for token management and core utilities.

## Core Architecture

### 1. Regex-Based Routing
The routing system converts path patterns into regular expressions.
- Dynamic segments (e.g., :id) are automatically extracted and attached to the request object.
- It supports optional trailing slashes and complex path segments.
- Located in core/router.ts.

### 2. Recursive Middleware Pipeline
The execution flow is managed by a recursive next() function within core/app.ts.
- This ensures a strict, linear execution of tasks.
- Global middlewares and route-specific handlers run in a predictable chain.
- The use of async/await prevents race conditions during the request flow.

### 3. Comprehensive Built-in Middlewares
Arc comes pre-loaded with essential tools for production environments:
- jsonParser & urlencodedParser: Safe data parsing with 1MB payload limits.
- staticFiles: Serves assets like images, CSS, and HTML from the disk.
- jwtAuth & cookieParser: Handles secure authentication and session data.
- rateLimiter: Prevents API abuse by limiting request frequency.
- cors & logger: Manages cross-origin security and request visibility.

### 4. Global Error Boundary
A centralized safety net in core/error.ts catches asynchronous crashes.
- Prevents a single bug from taking down the entire server.
- Provides environment-aware error reporting.

## How to use (Development)

1. Define your routes in the routes/ directory.
2. Create logic in the handlers/ directory.
3. Initialize the Arc app in server.ts.
4. Run the server using the npm start script.

---

## TODO: Next Steps for Development

- Performance Benchmarking: Measure the Regex router's speed under high-concurrency loads.
- Dependency Injection: Implement a clean way to pass database instances into the request context.
- Input Validation: Create a schema-based validation middleware to verify incoming body data.
- Automated Testing: Add unit tests for the core Router and Middleware pipeline.
- CLI Tool: Build a basic "create-arc-app" command to scaffold new projects.
