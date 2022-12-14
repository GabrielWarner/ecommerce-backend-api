# Ecommerce Backend



## Description
In this application I built a backend database that holds a stores products that are under seperate categories. Each product has an associated tag name that is linked with a foreign key within sequelize. This application is using the dotenv npm package to pass in environment variables along with a combination of Express, MySQL2 and Sequelize to setup the server and database. 

Screeshot of Insomnia Routes ![image](https://user-images.githubusercontent.com/98490756/182547705-1aa9fc55-a41d-4c83-89d7-43318d87da8f.png)


Link to video demonstration: https://drive.google.com/file/d/14ThZQkGF5Da-hoMgl946D3ziagbsYyCu/view

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Test Instructions](#test-instructions)
- [Questions](#questions)
## Installation
In the file path of the project open the integrated terminal and login to your MySQL portal and run the command:

```md
SOURCE db/schema.sql
```
Next exit MySQL and run the following command to seed your database.
```md
npm run seed
```
Next you will want to turn on the server.
```md
node server.js
```

## Usage

none

## License





## Contributions

none

## Test Instructions

None

## Questions

https://github.com/gabrielwarner

For questions or business inquirys, please contact me through email: gabe0412@uw.edu
