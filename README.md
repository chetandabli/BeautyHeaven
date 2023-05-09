# Beauty Heaven - A Beauty Booking System

> Project Code : vestal-laborer-3891 <br/>
> frontend Deployed link :      <br/>
> backend deployed link :      <br/>

Beauty Heaven (Beauty booking system) website is an online platform designed to connect beauty professionals with clients looking to book beauty-related sessions. The website offers a user-friendly interface that allows clients to search for services and book appointments with beauty professionals in their area.
Upon visiting the website, users can create an account and browse through a wide range of beauty services offered by professionals, such as haircuts, facials, manicures, pedicures, makeup application, and more. Users can then select their preferred service, date, time, and location.
Beauty professionals can also create an account on the website and set up their availability by opening slots. They can specify the services they offer, their rates, and their preferred work schedule. They can then receive booking requests from clients and confirm or decline them based on their availability.
Overall, a beauty booking system website provides a convenient and efficient way for clients to find and book beauty services while also helping beauty professionals manage their appointments and grow their businesses.

## Features

 - Authentication: The project includes JWT-based authentication to secure user data.
 - Authorization: The project includes role-based authorization to restrict access to certain routes or functionality.
 - Cross-platform compatibility: The project is designed to be compatible across multiple platforms and devices.
 - Hashing: User passwords are securely hashed to protect against unauthorized access.
 - dotenv: The project uses dotenv to manage environment variables and sensitive configuration data.
 - Relationship: The project includes database schema relationships between collections to support complex data structures.
 - Aggregation: The project uses MongoDB's aggregation framework to perform advanced queries and data manipulations.
 - Redis: To check the token is blacklisted or not.
 
 ## TechStack
 
 ### Client
 - React
 
 ### Sever 
 - Node.js, Express
 
 ### Database
 - MySql, redis

## API Endpoints

### Admin Authentication
    - Admin Register: /adminAuth/register
    - Admin Login: /adminAuth/login

### Admin Route
    - Get Professionals List(Method: GET): /admin/professionals
    - Get professional by ID(Method: GET): /admin/?id
    - Get Appointment List(Method: GET): /admin/appointments
    - Get Appointment by ID(Method: GET): /admin/appointments?id=******
    - Update Professional Info by ID(Method: PATCH): /admin/updateProfessional/:id
    - Remove Professional Info by ID(Method: DELETE): /admin/removeProfessional/:id
    
### Professional Authentication
    - Professional Register: /professions/register
    - Professional Login: /professions/login

### Professional Route
    - Get Professionals List(Method: GET): /professions/
    - Get Booked Slots List(Method: GET): /professions/bookedSlots
    - Create Booking Slots(Method: POST): /professions/createBeautySlots

### User Authentication
    - Users Register: /User/register
    - Users Login: /User/login
 
 ### User Route
    - Get Users List(Method: GET): /users/
    - Get Appointments Slots(Method: GET): /users/availableSlots
    - Get Booked Slots by Id(Method:PUT): /users/beautySlots/:id
    
## Run Locally
 ### Clone the project
     -https://github.com/chetandabli/vestal-laborer-3891.git    
### Go to the project directory
    - cd busy-motion-6100
    
### Install dependencies

    - npm install

### Start the server
    - node index.js
    
## Environment Variables
 To run this project, you will need to add the following environment variables to your .env file

      - Secret: secret key for jwt token
      - sqlpass: password for MySql Database connection
      - sqlusername: Username of MySql DB connection

## Contributors
-[Shiva Saraswat](https://github.com/shivam5665)
-[Chetan Ram](https://github.com/chetandabli)
-[Gaurav Sahu](https://github.com/gauravsahuu)
-[Raushan Sharma](https://github.com/RAUSHANSHARMA74)
-[Nihar Ranjan Patra](https://github.com/Nihar11789)

