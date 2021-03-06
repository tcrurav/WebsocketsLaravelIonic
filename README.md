# Ionic (frontend) and Laravel (backend) Example using Laravel Websockets to create a simple chat

This project is just a project example to learn how to use Laravel Websockets (Backend) and Ionic 6 (frontend) to create a simple Chat example.

RESTFul end-point POST /broadcast is used to send messages from Ionic to Laravel API. 

In the frontend (Ionic) the libraries laravel-echo and pusher-js are used to receive messages from Laravel Websockets.

![screenshots](https://github.com/tcrurav/WebsocketsLaravelIonic/blob/master/screenshots/screenshot-1.png)

## Getting Started

Download links:

From Github: https://github.com/tcrurav/WebsocketsLaravelIonic.git

## Prerequisites

You need a working environment with:
* [Git](https://git-scm.com) - You can install it from https://git-scm.com/downloads.
* [Laravel](https://laravel.com/) - I always install Composer, and XAMPP to get a working environment.
* [Ionic](https://ionicframework.com/) - Free and open source, Ionic offers a library of mobile-optimized UI components, gestures, and tools for building fast, highly interactive apps.

## General Installation instructions

The best option to start with this project is cloning it in your PC:

```
git clone https://github.com/tcrurav/WebsocketsLaravelIonic.git
```

This project contains 2 different parts:
* Frontend
* Backend

Once you have cloned the project install all dependencies.

```
cd WebsocketsLaravelIonic/frontend
npm install

cd WebsocketsLaravelIonic/backend
composer install
```

To try this project just rename backend/.env.example to backend/.env and you will probably just need to change the following:

```
DB_DATABASE=your_db_name
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
```

Run your backend API (Laravel):

```
cd WebsocketsLaravelIonic/backend
php artisan serve
```

Run your backend Laravel websockets:

```
cd WebsocketsLaravelIonic/backend
php artisan websockets:serve
```

Finally run your frontend:

```
cd WebsocketsLaravelIonic/frontend
ionic serve
```

Enjoy!!!

## Important details to start this project from scratch

* Detail n??1: Don't forget to add the link to pusher library in Ionic index.html. You can find the last version of this library in https://pusher.com/docs/channels/getting_started/javascript/
* Detail n??2: Take into account that this approach use RESTful calls to send info to Laravel API, and keep listening the broadcasted messages by Laravel Websockets using laravel-echo and pusher-js libraries.

## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - The Editor used in this project
* [Laravel Websockets](https://beyondco.de/docs/laravel-websockets/getting-started/introduction) - Laravel WebSockets is a package for Laravel 5.7 and up that will get your application started with WebSockets in no-time!.

## Acknowledgments

* https://www.youtube.com/watch?v=rNOGLLPXzwc. Laravel Websockets and Laravel Echo with Vue. This tutorial helped me a lot to understand the way Laravel Websockets work with a JavaScript Client.