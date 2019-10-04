---
id: site-structure
title: The Application Structure
---

The erp application will have a structure similiar to this.

```bash
root-directory
├── ecom
├── public
├── src
│ ├── Auth
│ │ ├── Auth.js
│ │ └── auth0-variables.js
│ ├── Callback
│ │ ├── Callback.js
│ │ └── loading.svg
│ ├── components
│ │ ├── processes
│ │ │  ├── AddProduct
│ │ │  ├── AddSupplier
│ │ │  ├── ...
│ │ │  ├── endpoints.js
│ │ │  ├── fetchSuppliers.js
│ │ │  └── util.js
│ │ ├── constants.js
│ │ ├── ERP.jsx
│ │ ├── ....jsx
│ │ └── TabContent.jsx
│ ├── Profile
│ ├── styles
│ ├── history.js
│ ├── ...
│ ├── index.jsx
│ └── routes.js
├── .babelrc
├── .eslintrc
├── .prettierrc
├── ...
├── package.json
├── README.md
├── server.js
└── webpack.config.js

```

## Explanations

Some of the files you need to know about and could use as you expand the application are explained below.

### auth0-variables.js

Since this app uses auth0 for authentication. All the settings for `clientID`, `redirectUri` and `domain` go here.

### routes.js

Lies inside the components folder. You can view the current routes of this application.

### index.jsx

The root file of the application.

### Login.js

The main page that is viewable at the root level of the url. (http://localhost:4000/ or http://localhost:4000/erp)

You can log in to the dashboard from here or go to the web store.

### endpoints.js

All the endpoint paths for services or processes lie here.

### constants.js

All constant values related to the erp database are stored here.

### util.js

Some utility functions that have been used a number of times in a lot of places.

## File paths for links that may change

- `src\Auth\Auth.js`
- `src\Auth\auth0-variables.js` (Callback link for authentication\*\*)
- `src\routes.js`
- `src\components\processes\endpoints.js` (Links to all services and processes)
- `public\index.html` (The src path which is currently `src="/bundle.js"` will change in when you place the files in Tomcat because you don't keep files at the root level there. So change the path relative to the folder you keept it inside. As of now, it has been changed to `/erp/bundle.js`)

> This app uses the [Auth0](https://auth0.com/) api for authentication. You will need to change the urls in the Auth0 Admin Panel before changing the link for the callback here.
