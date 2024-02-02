    1. INTRODUCTION

This project tackles the transportation domain of the hackathon. We plan to implement a simple transportation service platform that aims to provide users a guide booking service. The users can sign up into the app and create an account. From there, they will able to send a request for a guide nearby based on the vehicle of their desire. The selected guide will receive the request along with their location and they can accept the request if they want to fulfil that request. Once the guide has accepted the request, they will go to the pickup location and pick up the user from there. Once the user has been dropped off at their destination, they can make payment which will be charged by the guide.

    2. SYSTEM ANALYSIS

System analysis is done in order to understand the problem and emphasize what is needed from system. A complete understanding of software requirements is essential to the success of a software development effort. System analysis refers to an orderly structured process for identifying and solving problems using computer. It is the most essential part of the project development. The system is properly designed and proper outline of the proposed computerized system is prepared. Various resources including the software, hardware and manpower requirements are decided and are mentioned in the report.

2.1 EXISTING SYSTEM
Presently, numerous services catering to travellers exist, encompassing both online and offline modalities. However, a prevailing issue persists wherein it is not very easy to attain the best tour guide for the best price

2.2PROPOSED SYSTEM
In this system users can create accounts or log in to access the system. They can choose the guides near their locality. They can send in a request. Guides create detailed profiles showcasing their expertise, trips, fares, and availability. 

2.3 MODULES
Client
    • Can create accounts
    • Can sign in to their login page
    • Can send requests for a guide
    • Can rate the guide
    • Can complaint against the guide
    • Can make payment
Guide
    • Can create accounts
    • Can sign into their login page
    • View requests from clients
    • Can view location of clients
    • Can charge trip fare
Admin
    • Can verify and approve guide accounts


    3. SYSTEM REQUIREMENTS
The following requirements are only the minimal requirements to run this utility more successfully and efficiently, there should be sufficient memory and software tools for efficient processing.

3.1 HARDWARE REQUIREMENTS
The selection of hardware is very important in the existence and proper working of any software. Then selection hardware, the size and capacity requirements are also important. 

• Processor		:	 Intel Pentium and above 
• RAM			:	 4GB or more 

3.2 SOFTWARE REQUIREMENTS
One of the most difficult tasks is selecting software for the system, once the system requirements is found out then we have to determine whether a particular software package fits for those system requirements. 
The application requirements :

 Database 		:	 MongoDB
 Operating System 	: 	 Windows 10 or above 
 Front End		:	React  
 Back End 		:	 Express
 Framework 		: 	 Node.js
 IDE 			: 	 VS Code 
 Web browser 		: 	 Chrome, Explorer, Edge etc.



    4. DESIGN

3.1 ARCHITECTURAL DESIGN 
The proposed system follows a client-server architecture. The client-side consists of the user-facing application where users can create accounts, send requests, and make payments. On the server-side, there will be a centralized system that manages user accounts, guide profiles, requests, and payments. Communication between the client and server will be facilitated through APIs.

3.2 DATABASE DESIGN 
The system will require a relational database to store user information, guide profiles, trip details, and transaction records. The database schema will include tables for users, guides, trips, and payments. Proper normalization techniques will be employed to ensure data integrity and efficiency.

3.3 USER INTERFACE DESIGN 
The user interface will be designed to be intuitive and user-friendly. It will include screens for user registration, login, profile management, guide selection, trip booking, and payment processing. The interface will be responsive to accommodate various screen sizes and devices.


    5. SYSTEM IMPLEMENTATION


4.1 FRONTEND DEVELOPMENT 
The frontend will be developed using modern web technologies such as HTML5, CSS3, and JavaScript. React.js will be utilized to facilitate faster development and better maintainability. The user interface will be designed following best practices for usability and accessibility.

4.2 BACKEND DEVELOPMENT 
The backend will be developed using a suitable server-side technology like Node.js. This will handle user authentication, guide management, request handling, and payment processing. Express will be implemented in the backend.

4.3 DATABASE IMPLEMENTATION 
The database will be implemented using a MongoDB. The database schema will be designed according to the previously defined database design, and proper indexing and query optimization techniques will be employed for efficient data retrieval and storage.



    6. SYSTEM TESTING

5.1 UNIT TESTING 
Unit tests will be conducted to verify the functionality of individual components such as user authentication, guide registration, request handling, and payment processing. Mocking frameworks may be used to simulate dependencies and ensure thorough testing coverage.

5.2 INTEGRATION TESTING 
Integration tests will be performed to validate the interaction between different modules of the system, including the frontend, backend, and database. This will ensure that data flows correctly between components and that the system operates as expected as a whole.

5.3 SYSTEM TESTING 
System tests will be conducted to evaluate the overall performance, reliability, and scalability of the system. This will involve testing real-world scenarios such as user registration, trip booking, and payment processing under varying load conditions.


    7. CONCLUSION

The proposed transportation service platform aims to address the existing challenges in the travel domain by providing users with a convenient and reliable guide booking service. By implementing a user-friendly interface, robust backend system, and thorough testing procedures, we aim to deliver a high-quality solution that enhances the overall travel experience for users.
