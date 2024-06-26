# E-Commerce Backend

This project is a mini e-commerce backend designed for learning purposes, focusing on microservices architecture, clean code principles, and CI/CD pipeline implementation.

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup](#setup)

## Introduction
This project aims to provide a simplified backend infrastructure for an e-commerce platform. It is built with the intention of understanding and implementing microservices architecture and clean coding practices. While it may not encompass all features of a full-fledged e-commerce system, it serves as a learning tool for developers interested in these concepts.

## Features
- **Microservices Architecture**: The project is structured into multiple independent microservices, each responsible for specific functionalities such as user authentication, product management, admin , and cart management.
- **Clean Architecture**: The codebase follows the principles of clean architecture, separating concerns into layers such as domain, application, and infrastructure.
- **CI/CD Pipeline**: Continuous Integration and Continuous Deployment (CI/CD) pipeline is implemented to automate the build, test, and deployment processes, ensuring the reliability and stability of the application.

## Technologies Used
- **Programming Languages**: node.js,TS
- **Frameworks**:Express.js
- **Databases**:  MongoDB
- **Tools**:  Docker,kafka

## Setup
1. **Clone the Repository**: `git clone https://github.com/SAFVAN-C-M-C/Mini-Project-Microservice-clean.git`
2. **Install Dependencies**: `npm install`
3. **Configuration**: Update environmental files as needed, such as database credentials, PORT, jwt secrets, etc.
5. **Run Services**: Start each microservice by `npm run start:dev`.
