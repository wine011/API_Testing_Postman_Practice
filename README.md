# API Testing with Postman - Practice

This repository contains a comprehensive set of Postman collections for practicing API testing. These collections include real-world APIs, mock APIs, authentication scenarios, data-driven testing, and chaining workflows. The projects are primarily for personal learning and skill-building in RESTful API testing.

All collections were developed with guidance from the **SDET-QA YouTube channel**: Watch Here! (https://youtu.be/HI-W8s2HaJ8).

---

## Table of Contents

1. [ReqRes API Test Cases](#1-reqres-api-test-cases)  
2. [My Users API](#2-my-users-api)  
3. [My Users API with Assertions](#3-my-users-api-with-assertions)  
4. [Execution Sequence](#4-execution-sequence)  
5. [My Users API - Variables & Chaining](#5-my-users-api---variables--chaining)  
6. [GoRest User API - CRUD & Chaining Practice](#6-gorest-user-api---crud--chaining-practice)
7. [Books API - Data-driven Testing](#7-books-api---data-driven-testing)
7. [Books API - Parameterization](#7-books-api---parameterization)
8. [Upload Files API Test](#8-upload-files-api-test)  
9. [Authentication Practice](#9-authentication-practice)  
10. [Pet Store - Swagger JSON](#10-pet-store---swagger-json)  
11. [Pet Store - XML Model](#11-pet-store---xml-model)  

---

## 1. ReqRes API Test Cases
Simple GET, CREATE, UPDATE, and DELETE requests using the [ReqRes API](https://reqres.in/).

---

## 2. My Users API
Custom mock Users API using Node.js, npm, json-server, and a local JSON file.  
Supports full CRUD operations: GET, POST, PUT, DELETE.

---

## 3. My Users API with Assertions
**Project Overview:**  
Build a custom Users API using Node.js, npm, json-server, and a local JSON file.  

**Key Features:**  
- GET /students – Retrieve all students  
- GET /students/:id – Retrieve a student by ID  
- POST /students – Add a new student  
- PUT /students/:id – Update student details  
- DELETE /students/:id – Remove a student  

**Testing with Postman:**  
- Status code validation  
- Response time checks  
- Header checks  
- Schema validation  

---

## 4. Execution Sequence
Practice and verify execution sequence of scripts at Collection, Folder, and Request levels using `console.log`.

---

## 5. My Users API - Variables & Chaining
Enhanced mock Users API supporting dynamic variables and request chaining.  

**Features:**  
- Pre-request scripts for dynamic data (timestamps, user IDs)  
- Chained API requests using collection/environment variables  
- Post-response tests: status code, headers, response time, schema  

---

## 6. GoRest User API - CRUD & Chaining Practice
End-to-end API testing with GoRest public API.  

**Key Features:**  
- Full CRUD on /users endpoint  
- Dynamic variables and environment variables for chaining  
- Pre-request scripts for unique usernames/emails  
- Post-response tests and validation  
- Cleanup of runtime environment variables  

---
## 7. Books API - Data-driven testing
### Simple Books API
Test a Simple Books API built using Node.js, Express, and JWT authentication.  

**Features:**  
- Client registration and JWT authentication  
- Book retrieval and order management  
- Chained requests using collection variables (`{{accessToken}}`, `{{orderId}}`, `{{bookId}}`)  
- Error handling and validation scripts  

**Notes:**  
- Uses an in-memory database (data resets on server restart)  
- JWT tokens expire in 7 days  
- Duplicate registration returns an error  

---

## 7. Books API - Parameterization
Practice with dynamic parameters for API requests.  
**Note:** The endpoint `https://simple-books-api.click/api-clients/` is no longer working.

---

## 8. Upload Files API Test
Test single and multiple file uploads in a Node.js Express API.  

**Highlights:**  
- Single file upload with response validation  
- Request without file for error handling  
- Multiple file upload with metadata validation  

---

## 9. Authentication Practice
Practice OAuth2.0, Basic, Digest, Bearer Token, and API Key authentication mechanisms.

---

## 10. Pet Store - Swagger JSON
Practice using the Swagger Pet Store API with JSON format requests.

---

## 11. Pet Store - XML Model
Practice using the Swagger Pet Store API with XML request/response format.

---

## Tools & Technologies
- Node.js + npm  
- json-server  
- Postman  
- JWT authentication  
- Mock APIs and Swagger  


---

## Usage

1. Import the collections into Postman.
2. Configure environment variables if needed.
3. Run requests individually or as a collection.
4. Check test scripts in the `Tests` tab.

---

## Notes / Acknowledgements

- Secrets (tokens, passwords) have been removed for security.
- All examples are for practice purposes only.


## 📚 Guidance

Created with the guidance of **SDET-QA YouTube channel**: [Watch full playlist here](https://www.youtube.com/watch?v=vCJVFnepECc&list=PLUDwpEzHYYLuW9XEvFEJk2kqsk6HqscI4)  
and **ChatGPT**.


