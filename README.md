# login-react

A typical website built with React, featuring a login form and utilizing NestJS for the backend.

## Deploy

Application is running on [Netlify](https://zweroboy1-login-react.netlify.app/).

Backend is running on [Render](https://login-react-00s4.onrender.com/deals).

MySQL database is running on my account at hostinger.com.

You can login as `alex@gmail.com` with password `123fGH` or register as new user.

## Technolgies Used

- React (React Hook Form, React Router, Redux, Redux Persist, React Toastify, Yup)
- TypeScript
- SCSS
- Vite
- Nest
- Prisma
- MySQL

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads)
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager
- Nest CLI - [Install Nest CLI](https://www.npmjs.com/package/@nestjs/cli)

## Installation

01. Clone the repo:

    

```bash
git clone https://github.com/zweroboy1/login-react.git
```

02. Copy the file login-react/server/.env.example to .env:

    

```bash
cp login-react/server/.env.example login-react/server/.env
```

Here you can change the MySQL database settings and JWT variables:

    

```env
DATABASE_URL="mysql://user:password@site.com/db"

CRYPT_SALT=10
JWT_SECRET_KEY=qq56546qq
JWT_SECRET_REFRESH_KEY=5645gfhgfh6456
TOKEN_EXPIRE_TIME=1h
TOKEN_REFRESH_EXPIRE_TIME=24h
```

03. Install the backend app:

```bash
cd login-react/server
npm i
```

04. Import the database to your MySQL server:

```mysql
--
-- Table structure for table `Deal`
--

CREATE TABLE `Deal` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `yield` decimal(5,2) NOT NULL,
  `sold` int(11) NOT NULL,
  `ticket` int(11) NOT NULL,
  `daysLeft` int(11) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Deal`
--

INSERT INTO `Deal` (`id`, `name`, `price`, `yield`, `sold`, `ticket`, `daysLeft`, `image`) VALUES
(1, 'The Rena Torch', 6500000, '9.25', 75, 60000, 150, 'deal1.jpg'),
(2, 'HHHR Tower', 6500000, '9.25', 75, 60000, 150, 'deal2.jpg'),
(3, 'Ocean Peaks', 6500000, '9.25', 75, 60000, 150, 'deal3.jpg'),
(4, 'Al Yaqoub Tower', 6500000, '9.25', 75, 60000, 150, 'deal4.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `version` int(11) DEFAULT 1,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `User`
--

INSERT INTO `User` (`id`, `email`, `password`, `version`, `createdAt`, `updatedAt`) VALUES
(1, 'alex@gmail.com', '9638f76e9ec9268f23baa273e9769c04080fa11583b5a0e024d46940f1a78f2834be1ec0538883f834f52a10b4b46d9a6cf39fc47f9934c6ac282ede8d8d1c11', 1, '2024-04-19 15:10:34', '2024-04-19 15:10:34')
```

05. Generate Prisma Client (open the folder `login-react/server` in another terminal window):

```bash
npx prisma generate
```

06. Start the backend app:

```bash
npm start
```

07. Open the folder `login-react/client` in another terminal window.

08. Copy the file login-react/client/.env.example to .env:

    

```bash
cp .env.example .env
```

Here you can change the backend endpoint:

```env
VITE_BASE_URL=http://localhost:4000/
```

09. Install the frontend app:
   

```bash
npm i
```

10. Start the frontend app:

```bash
npm run dev
```

The application works here: [http://localhost:5173/](http://localhost:5173/)

The backend works here: [http://localhost:4000/](http://localhost:4000/)
