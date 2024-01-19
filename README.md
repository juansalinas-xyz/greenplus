# Green Plus App

## Based in:

[<img src="public/next.svg" width="250" />](https://nextjs.org/)

## Pre-requirements

- [Docker](https://www.docker.com/products/docker-desktop/)
- [npm](https://nodejs.org/en/download)
- [yarn](https://classic.yarnpkg.com/lang/en/docs/install) (optional)

## Installation

#### Step 1: _Clone the project_

```sh
git clone https://github.com/juansalinas-xyz/greenplus
```

#### Step 2: _Install all dependencies_

```bash
npm install
# or
yarn install
```

#### Step 3: _Run the docker container to initialize a MongoDB locally_

```bash
cd .tools
docker-compose up
```

#### Step 4: _Run the development server_

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

#### Step 5: _Open [http://localhost:3000](http://localhost:3000) with your browser to see the result_

---


#### There are postman collections to make requests to the api in: postman_collections folder
