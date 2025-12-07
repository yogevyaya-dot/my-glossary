---
title: "HTTP"
description: "Hypertext Transfer Protocol - An application layer protocol for transmitting hypermedia documents, such as HTML."
date: "2023-10-27"
---

**HTTP** (Hypertext Transfer Protocol) is the foundation of data communication for the World Wide Web. It functions as a request-response protocol in the client-server computing model. A web browser, for example, may be the client and an application running on a computer hosting a website may be the server.

## Request Methods (Verbs)
* **GET:** Requests data from a specified resource (e.g., loading a webpage).
* **POST:** Submits data to be processed to a specified resource (e.g., submitting a form).
* **PUT:** Updates a specified resource.
* **DELETE:** Deletes the specified resource.

## Status Codes
* **200 OK:** Success.
* **301 Moved Permanently:** The page has moved to a new URL.
* **404 Not Found:** The server cannot find the requested resource.
* **500 Internal Server Error:** The server crashed or encountered an error.

## Frequently Asked Questions

**1. What is the difference between HTTP and HTTPS?**
The 'S' stands for **Secure**. HTTPS encrypts the data transferred between the client and server using TLS/SSL certificates, protecting sensitive info like passwords and credit cards.

**2. Why do I see a 404 error?**
It means the link you clicked is broken, the page was deleted, or you typed the URL incorrectly.

**3. Is HTTP stateless?**
Yes. The server does not keep any data (state) between two requests. This is why we use "Cookies" to remember user logins and shopping carts.

**4. What is a URL parameter?**
It is the part of a URL that follows a question mark (e.g., `?search=shoes`). It sends extra information to the server via a GET request.

**5. What is a User-Agent?**
A string of text sent by your browser to the server identifying the browser type, operating system, and device. Servers use this to serve mobile or desktop versions of a site.