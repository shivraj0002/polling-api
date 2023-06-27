
# POLLING API📄

`This is simple project created using JAVASCRIPT (Nodejs, Express, Mongoose, Ejs ...). It allows you to create question and upload it and add votes to it and delte it.`

## Set Up
**npm install:**
**npm run dev: `Development`**
**npm run start: `Production`**

## Tech Stack

**Client:** `N/A`

**Server:** `Node.js, Express.js, Mongoose, (...)`


## 🔗 Live Demo
[render Link (Preview Project)](https://polling-api-mbup.onrender.com/api/v1)




<!-- 
## Preview📸
- PC💻 (Home Page)
![PC Preview](https://github.com/shivraj0002/CSV_Upload_Assignment/blob/main/assets/demo/home.png?raw=true)

- PC💻(File View Page)
![PC Preview](https://github.com/shivraj0002/CSV_Upload_Assignment/blob/main/assets/demo/viewFile.png?raw=true) -->



## Brief Information
`This is simple project created using JAVASCRIPT (Nodejs, Express, Mongoose ...). It allows you to Create A question and its options and vote the options.`

## Features
* `Create Question, Delete Question`
* `Create Options, Delete Option, Vote option`

## API Reference
`Polling Api provides a simple API for Creating Questions and Options and vote them also delete them. The API supports the following endpoints:`

* `GET /api/v1/questions/: Get All questions.`
* `GET /api/v1/questions/:id : Get question.`
* `DELETE /api/v1/questions/:id : Delete question.`
* `POST /api/v1/questions/:id/options/create : Create Options.`
* `POST /api/v1/questions/create : Create question.`
* `DELETE /api/v1/options/:id/delete : Delete Option.`
* `PATCH /api/v1/options/:id/add_vote : vote the option.`


## Folder Structure
```
POLLING API/
├── routes/
│   ├── optionRoutes.js
|   ├── questionRoutes.js
├── controllers/
│   ├── optionsController.js
|   ├── questionsController.js
├── models/
│   ├── mongoose.js
|   ├── optionsModel.js
|   ├── questionModel.js
├── .gitignore
├── package.json
├── package-log.json
├── app.js
├── server.js
├── config.env
├── README.md
```

## 🔗 Links
[render Link for This Project](https://polling-api-mbup.onrender.com/api/v1)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/shivraj0002)
