This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# auth

npm install next-auth@4.24.11


# Docker

```bash
docker init
```

? What directory is your build output to? (comma-separate if multiple)
```bash
.next/standalone
```
# ENV


on compose.yaml 

    env_file: ".env"

```bash
# run in the container to see if the env variable are correct
printenv
```


# run in docker

```bash
docker compose up --build
```


```bash
docker build -t rsalgadoc/frontend-next-app .
```
# Debido a que el build en AWS se queda pegado, por se una instancia muy pequeña, subir a DockerHub con el siguiente comando:
```bash
docker push rsalgadoc/frontend-next-app
```

```bash
docker pull rsalgadoc/frontend-next-app
```

```bash
docker run -d --name frontend-next-app --env-file .env -p 3003:3000 --restart always rsalgadoc/frontend-next-app
```

```bash
docker exec -it frontend-next-app sh
```

```bash
# run in the container to see if the env variable are correct
printenv
```

curl http://172.31.13.246:3003



# Problemas


`x-forwarded-host` header with value `172.31.13.246:3003` does not match `origin` header with value `ec2-3-133-140-15.us-east-2.compute.amazonaws.com` from a forwarded Server Actions request. Aborting the action.
 ⨯ [Error: Invalid Server Actions request.] { digest: '2154006316' }

Fix the eror with , adding this line on nginx

proxy_set_header X-Forwarded-Host $host;

Example:

    location /frontend-next-app/ {
       proxy_pass http://172.31.13.246:3003/frontend-next-app/;
       proxy_set_header X-Forwarded-Host $host;
    }

