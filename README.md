## Fastify Web API Starter

#### 1. Clone repository

```
#clone this repository
git clone https://github.com/dongnguyenltqb/fastify-web-api-starter.git

#jump to folder fastify-web-api-starter
cd fastify-web-api-starter

#install dependency
npm i
```



### 2 . Local development

Use `docker compose` for local development, project has been installed with `mongodb` and `elasticsearch`

You can change `mongodb` `elasticsearch` configuration in `src/config.js`, `docker-compose` and don't forget to change `mongo-docker-init.js`

- Start `docker compose` for first time.

  ```
  docker-compose up -d --build
  ```

- Stop `backend` 

  ```
  docker-compose stop backend
  ```

- Start `backend`

  ```
  npm run dev
  ```



### 3 . Staging environment

I currenty use `cloud run` for `staging` and `prod` env.

Check out this [post](https://medium.com/@dongnguyenltqb/docker-to-serverless-google-cloud-platform-4cd1154b2c46) if you want.

---

#### Thank for visiting my GitHub. Happy coding ^_^



