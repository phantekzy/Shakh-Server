Arc
===

Arc is a minimal, predictable web framework for Node.js. Built from scratch
using TypeScript and the native Node.js http module, it eliminates the "magic"
of larger libraries to provide total control over the request-response lifecycle.

Quick Start
-----------

* Install Arc: npm install @phantekzy/arc
* View on NPM: https://www.npmjs.com/package/@phantekzy/arc
* Latest Release: v1.0.1
* Repository: https://github.com/phantekzy/Arc

Essential Documentation
-----------------------

All users should be familiar with:

* Routing: Regex-based path matching in core/router.ts
* Middleware: Recursive next() pipeline in core/app.ts
* Security: Built-in rate limiting and JWT authentication
* Error Handling: Global async error boundary in core/error.ts

Project Layout
==============

* core/        - Framework engine (Router, Request, Response, Error handling)
* middlewares/ - Built-in security, data parsing, and logging plugins
* handlers/    - Application logic and request processors
* routes/      - Route definitions and modular organization
* utils/       - Token management and shared helper functions

Architecture
============

1. Routing System
-----------------
The routing system converts path patterns into regular expressions. Dynamic 
segments (e.g., :id) are automatically extracted and attached to the request 
object. It supports optional trailing slashes and complex path segments.

2. Middleware Pipeline
----------------------
Execution flow is managed by a recursive next() function. This ensures a 
strict, linear execution of tasks. Global middlewares and route-specific 
handlers run in a predictable chain using async/await to prevent race 
conditions.

3. Built-in Middlewares
-----------------------
Arc comes pre-loaded with essential tools for production environments:
* jsonParser: Safe data parsing with 1MB payload limits
* staticFiles: Serves assets like images, CSS, and HTML from disk
* jwtAuth: Handles secure authentication and session data
* rateLimiter: Prevents API abuse by limiting request frequency

Usage
=====

Installation:
npm install @phantekzy/arc

Example:
import { App } from '@phantekzy/arc';

const app = new App();

app.get('/', (req, res) => {
    res.send({ message: "Arc is running" });
});

app.listen(3000);

Next features inchalah
======================

* Performance Benchmarking: Measure router speed under high-concurrency loads
* Dependency Injection: Clean way to pass database instances to context
* Input Validation: Schema-based middleware for incoming body data
* CLI Tool: Build a "create-arc-app" command to scaffold new projects
