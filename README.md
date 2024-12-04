# code-in-bound-assessment

# NestJS Product Management API

This project is a simple API built with **NestJS** and **TypeORM** for managing products. It provides basic CRUD (Create, Read, Update, Delete) operations for product management using PostgreSQL as the database.

## Features

- **Create a Product**: Adds a new product to the database.
- **Get All Products**: Retrieves all products stored in the database.
- **Get a Single Product**: Retrieves a specific product by its ID.
- **Update a Product**: Updates an existing product.
- **Delete a Product**: Removes a product from the database.

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **TypeORM**: An ORM for TypeScript and JavaScript (ES7, ES6, ES5).
- **PostgreSQL**: A powerful, open-source relational database system.
- **class-validator**: A library for validation of request bodies.

## Prerequisites

Before running the application, ensure you have the following:

- **Node.js** (v18 or above)
- **PostgreSQL** installed and running locally or on a remote server
- **NestJS CLI** (optional, for development)

## Installation

### Step 1: Clone the Repository

Clone the repository to your local machine:
https://github.com/sasikalanalagatla/code-in-bound-assessment.git
cd code-in-bound-assessment

### Step 2: Install Dependencies
Install the necessary dependencies:
npm install

### Step 3: Configure PostgreSQL
Make sure you have a PostgreSQL database available and configure the connection in the app.module.ts file.

TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'products',  // Set your database name here
  autoLoadEntities: true,
  synchronize: true,      // Set to false in production
})

### Step 4: Run the Application
Once the database is configured, run the NestJS application:
npm run start

The application will start running on http://localhost:3000.

**API Endpoints**

**1. Create a Product**
URL: /products

**Method**: POST

**Body**:

json

{  "title": "Product Title",

  "category": "Category Name",
  
  "subcategory": "Subcategory Name",
  
  "description": "Product Description",
  
  "status": "available"
  
}


**Response**:

json

{

  "msg": "Product added successfully",
  
  "status": 201,
  
  "data": { ...product }

}

**2. Get All Products**

URL: /products

**Method** GET

**Response**:

json

{

  "status": 200,
  
  "message": "Data fetched successfully",
  
  "totalData": 10,
  
  "result": [ ...products ]

}

**3. Get a Single Product**

URL: /products/getOne

**Method**: GET

**Query Parameters**:

id: The ID of the product to fetch.

**Response**:

json

{

  "status": 200,
  
  "message": "Product fetched successfully",
  
  "result": { ...product }

}

**4. Update a Product**

URL: /products/update

**Method**: PUT

**Query Parameters**:

id: The ID of the product to update.

**Body**:

json

{

  "title": "Updated Title",
  
  "category": "Updated Category",
  
  "subcategory": "Updated Subcategory",
  
  "description": "Updated Description",
  
  "status": "unavailable"

}
**Response**:

json
{
  "status": 200,
  "message": "Product updated successfully"
}

**5. Delete a Product**

URL: /products/delete

**Method**: DELETE

**Query Parameters**:

id: The ID of the product to delete.

**Response**:

json

{

  "status": 200,
  
  "message": "Product deleted successfully"

}

# Validation
The application uses the class-validator library to ensure that the request data adheres to the required constraints. All fields in the CreateProductDto and UpdateProductDto are validated to ensure they are non-empty and have valid data types.

## Example of Validation Errors
json

{

  "statusCode": 400,
  
  "message": [
  
    "Title should have at least 4 characters",
    
    "Category is required"
  
  ],
  
  "error": "Bad Request"

}

# Error Handling
The application handles errors using NestJS built-in exception filters. Common exceptions like BadRequestException and NotFoundException are thrown to indicate the error status and message.

# Running Tests
To run tests for the application, use the following command:
npm run test

This will run unit tests to ensure that all parts of the application are working as expected.

# License
This project is licensed under the MIT License - see the LICENSE file for details.

# Contact
For any questions or issues, feel free to open an issue in the GitHub repository.

### Key Sections:
- **Installation**: Describes how to set up the project on a local machine.
- **API Endpoints**: Lists each available endpoint with required method, body format, and response.
- **Validation & Error Handling**: Details about the request validation and how errors are managed.
