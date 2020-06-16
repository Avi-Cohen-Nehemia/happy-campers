# "The" Camping App 🏕️
#### v 0.1.0

Front end application for DevelopMe_ wk, 12 task.

We were tasked with creating a full stack application from requirements gathering through to development, testing and later deployment.

## Installation

```
npm i && npm start
```

### Connect Locally with API

App still in development. You can access the API locally by cloning the API repo located [here](https://github.com/harrietgoddard/camping-api).

Then run the following commands to setup Homestead, spin up Vagrant and migrate the database tables.

```
git clone git@github.com:harrietgoddard/camping-api.git
composer install
vendor/bin/homestead make
cp .env.example .env

// - inside .env change the db name, user and password in .env to homestead, root, secret
// - in homestead.yaml change memory to 512

vagrant up
vagrant ssh
cd code
run artisan key:generate
run artisan migrate
```

Then depending on your OS change the `.env` file in your **react front end app directory** using the instructions below.

### Mac OS

You need to point the React app towards the appropriate URL. You can edit this in the `.env` file in the root directory.

```
REACT_APP_API_URL=http://<laravel url here>/api/
```

### Win OS

You need to point the React app towards the appropriate URL. You can edit this in the `.env` file in the root directory.

```
REACT_APP_API_URL=http://localhost:8000/api/
```

## Teams

Front end: Mhairi and Dan
Back end: Harriet and Avi

## Technology Stack

- React
- Redux
- PHP
- Laravel
- SCSS / CSS
- AWS
- Capistrano