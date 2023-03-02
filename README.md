# 🍲 WeAte.

I built this project as the capstone project for my software engineering bootcamp. I LOVE hosting dinner parties, so I wanted to create something that could help people throw their own. This resources is intended to help people track guests, recipes, and vibes they had at their dinner parties. One of my favorite parts of this project is that it allows you to find recipes you used at certain parties – that way you can easily reference past dishes or drinks you made.

You can also email yourself a grocery list so that you don't forget what each recipe requires when you're shopping! I'm most proud of the visual aspect of this project – it's definitely where I shine.

## 🍽️ Requirements for WeAte.

- Ruby 2.7.4
- NodeJS (v16), and npm

See Environment Setup at the bottom of this page for instructions on installing these tools if you don't already have them.

## 🥂 Installing WeAte.
To get started and set up the database, do the following:
#### `bundle install`
#### `npm install --prefix client`
#### `rails db:migrate`

## 🪩 Using WeAte.

In the project directory, first run:
#### `rails s` to run the backend on [http://localhost:3000](http://localhost:3000)

Then, you can run:

#### `npm start --prefix client` to run the frontend on [http://localhost:4000](http://localhost:4000)

This will run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

When you make changes the page will reload automatically. You may also see lint errors in the console.

## 🤙 Contact me
If you'd like to connect (or hire me!), please reach out on [LinkedIn](https://www.linkedin.com/in/samanthajavery/).


## Environment Setup

### Install the Latest Ruby Version

Verify which version of Ruby you're running by entering this in the terminal:

```console
$ ruby -v
```

We recommend version 2.7.4. If you need to upgrade you can install it using rvm:

```console
$ rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler` and `rails`:

```console
$ gem install bundler
$ gem install rails
```

### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is not 16.x.x, install it and set it as the current and
default version with:

```sh
nvm install 16
nvm use 16
nvm alias default 16
```

You can also update your npm version with:

```sh
npm i -g npm
```

### Install Postgresql

Render requires that you use PostgreSQL for your database instead of SQLite.
PostgreSQL (or just Postgres for short) is an advanced database management
system with more features than SQLite. If you don't already have it installed,
you'll need to set it up.

#### PostgreSQL Installation for WSL

To install Postgres for WSL, run the following commands from your Ubuntu terminal:

```sh
sudo apt update
sudo apt install postgresql postgresql-contrib libpq-dev
```

Then confirm that Postgres was installed successfully:

```sh
psql --version
```

Run this command to start the Postgres service:

```sh
sudo service postgresql start
```

Finally, you'll also need to create a database user so that you are able to
connect to the database from Rails. First, check what your operating system
username is:

```sh
whoami
```

If your username is "ian", for example, you'd need to create a Postgres user
with that same name. To do so, run this command to open the Postgres CLI:

```sh
sudo -u postgres -i
```

From the Postgres CLI, run this command (replacing "ian" with your username):

```sh
createuser -sr ian
```

Then enter `control + d` or type `logout` to exit.

[This guide][postgresql wsl] has more info on setting up Postgres on WSL if you
get stuck.

[postgresql wsl]: https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-postgresql

#### Postgresql Installation for OSX

To install Postgres for OSX, you can use Homebrew:

```sh
brew install postgresql
```

Once Postgres has been installed, run this command to start the Postgres
service:

```sh
brew services start postgresql
```
