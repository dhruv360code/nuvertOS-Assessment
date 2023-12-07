# Full Stack Assignment - Chemical Compounds Web App

## Project Overview

This project aims to create a Full Stack web application for managing and displaying details of chemical compounds. The application includes a front end developed using Angular for an interactive user interface and a back end developed using ExpressJS with Sequelize ORM for handling CRUD operations on the compounds' data.


### Front End Tasks

1. Implement a card view displaying all compound names and images as separate cards.
2. Add pagination functionality to navigate through the list of compounds.
3. Use routing to change the page and display detailed information (name, image, description) when clicking on a compound card.

### Backend Tasks

1. Develop CRUD API endpoints to access and edit the compound list and details.
2. Create a database table using MySQL to store the provided data in CSV format (easy import functionality).


## Getting Started

1. Clone the repository to your local machine.
2. Navigate to the `nuvert-frontend` directory and run `npm install` to install Angular dependencies.
3. Navigate to the `coupounds` directory and run `npm install` to install ExpressJS and Sequelize dependencies.
4. Create a MySQL database and update the connection details in the backend configuration.
5. Start the Angular app and Express server.



## API Endpoints

- `GET /api/getAllCompounds`: Retrieve a list of all compounds.
- `GET /api/getCompound`: Retrieve details of a specific compound.
- `POST /api/addCompound`: Add a new compound.
- `PUT /api/updateCompound/:id`: Update details of a specific compound.
- `DELETE /api/deleteCompound/id`: Delete a compound.

## Screenshots

![Screenshot from 2023-12-07 22-37-25](https://github.com/dhruv360code/nuvertOS-Assessment/assets/76557628/1f90caf3-7ea6-4d49-8953-63d3aff872c4)
![Screenshot from 2023-12-07 22-37-19](https://github.com/dhruv360code/nuvertOS-Assessment/assets/76557628/f9a5e67e-3d68-43f8-bc9a-050d0f3f108d)
![Screenshot from 2023-12-07 22-37-12](https://github.com/dhruv360code/nuvertOS-Assessment/assets/76557628/b7ee5363-0c61-4f66-be54-b92ca821b096)
[Screencast from 07-12-23 10:36:05 PM IST.webm](https://github.com/dhruv360code/nuvertOS-Assessment/assets/76557628/6b172714-2655-45b1-9a1c-abedcc8736e5)

