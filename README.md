# Next.JS Simple Blog
## Introduction
Making a simple blog app to learn about some technologies i haven't worked before:
+ NextJS
+ SQLite
+ Knex

## Installation
1. Clone the repo with `git clone git@github.com:dostoievskiab/nextjs-simple-blog.git` 
2. Install packages with `npm install`
3. Run the migrations `npx knex migrate:latest`
4. Run seeds `npx knex seed:all`
5. Run code using `npm run dev`

## Notes to myself
1. NextJS run around three unique functions, here are the description from the documentation (or you could access this [stackoverflow post](https://stackoverflow.com/questions/64520234when-exaclty-is-nextjs-build-time-happening) that has answer with a better explanation)
    - getStaticProps - Use to fetch data at build time.
    - getStaticPaths - Specify dynamic routes to pre-render pages based on data.
    - getServerSideProps - Fetch data on each request.

## To Do
1. Should check how to automatically insert timestamp on seed files with knex/sqlite
2. Need to think about user/access structure