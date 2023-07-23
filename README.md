
# Homestead Horizon [Vacation Rental Platform]

![image](https://res.cloudinary.com/dypi6beg5/image/upload/v1690027387/lh7pbh3wironm76zhgqo.png)

Welcome to Homestead Horizon, the ultimate vacation rental platform designed to make your travel dreams a reality. Our user-friendly web application serves as a portal for hosts to manage their properties and for guests to discover and book their perfect getaways. With a seamless one-to-many relationship between hosts and properties, intuitive guest profile management, and a smooth many-to-many booking system, we ensure a hassle-free experience for everyone. Explore our property listings with powerful search and filtering options, and enjoy the convenience of managing bookings with just a few clicks. Join us on this journey, and let Homestead Horizon be your gateway to memorable vacations.

## Demo Link

> [Homestead-Horizon (Vercel Link)](https://homesteadhorizon.vercel.app/)  

##  Installation & Getting started 

To deploy this project on your local machine, run following commands root folders.

* Cloning the repository

  ```bash
    git clone https://github.com/KanadeAditya/Homestead-Horizon
  ```

* Install packages

  ```bash
    npm install
  ```

* Setup .env file


    ```bash
      DATABASE_URL=
      GOOGLE_CLIENT_ID=
      GOOGLE_CLIENT_SECRET=
      GITHUB_ID=
      GITHUB_SECRET=
      NEXTAUTH_SECRET=
    ```

* Setup Prisma

  ```bash
    npx prisma db push

  ```

* Start the app

  ```bash
    npm run dev
  ```
## Features

- Implemented credential authentication with Google and GitHub.
- Built image upload functionality using Cloudinary CDN.
- Validated and handled client forms using react-hook-form.
- Created a booking/reservation system.
- Enabled personalized management of reservations and properties for hosts and guests.
- Performed CRUD operations for guest reservation cancellation, owner reservation cancellation, property creation and deletion, and favorite properties updation.
- Developed an advanced search algorithm by category, date range, map location, number of guests, rooms, and bathrooms.
- Utilized TypeScript for enhanced type-checking and developer productivity.
- Leveraged Next.js for server-side rendering, automatic code splitting, and simplified routing, which improved performance and SEO.
- Designed the UI with Tailwind CSS, including animations and effects.
- Ensured full responsiveness for different devices.

## 💻 Built with

Technologies used in the project:

*   Typescript
*   Next.js
*   Mongo DB
*   React.js
*   Tailwind.css
*   Prisma
###
<div align="left">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" height="50" alt="typescript logo"  />
<img width="12" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" height="50" alt="react logo"  />
<img width="12" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" height="50" alt="nextjs logo"  />
<img width="12" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="50" alt="nodejs logo"  />
<img width="12" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" height="50" alt="mongodb logo"  />
<img width="12" />
<img src="https://skillicons.dev/icons?i=tailwind" height="50" alt="tailwindcss logo"  />
<img width="12" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" height="50" alt="npm logo"  />
</div>

###