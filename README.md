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


## Tech Stacks

- Client : React
- Server : Node.js, Express.js
- Database : MySql, Redis

## Run Locally

- Clone the project : git clone (https://github.com/chetandabli/vestal-laborer-3891.git)
- Go to the project directory : cd vestal-laborer-3891
- install dependencies : npm i
- Start the Server : node index.js

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file
- port : port for server
- secret : sectret key for json webtoken
- sqlpass : password for sql connection 
- sqlusername : username for sql

## API Endpoints

### Admin Authentication
- Admin Register: /adminAuth/register
- Admin Login: /adminAuth/login

### Admin Route
- Get Professionals List(Method: GET): /admin/getProfessionalsData
- Get Professionals by ID(Method: GET): /admin/Professionals?id=******
- Get Appointment List(Method: GET): /admin/getAppointments
- Get Appointment by ID(Method: GET): /admin/getAppointments?id=******
- Update Professionals Info by ID(Method: PATCH): /admin/updateProfessional/:id
- Remove Professionals Info by ID(Method: DELETE): /admin/RemoveProfessional/:id



### Professional Authentication
- Professional Register: /professional/register
- Professional Login: /professional/login

### Professional Route
- Get Professionals list (Method: GET): /professionals/
- Create Booking Slots (Method: POST):  /professionals/createBeautySlots
- Get Appointment list (Method:GET): /professionals/bookedSlots

### User Authentication
- User Register (Method: POST): /users/register
- User Login (Method: POST): /users/login

### User Route
- Get Users list (Method GET): /users/
- Get Professionals Slot list (Method: GET): /users/abailableSlots
- Get booked appointments list (Method: GET): /users/bookingSlots/:id

## Contributors
- [Shiva Saraswat](https://github.com/shivam5665)
- [Chetan Ram](https://github.com/chetandabli)
- [Raushan Sharma](https://github.com/RAUSHANSHARMA74)
- [Nihar Ranjan Patra](https://github.com/Nihar11789)
- [Gaurav Sahu](https://github.com/gauravsahuu)

