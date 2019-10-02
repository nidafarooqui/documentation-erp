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
│ │ ├── ERP.jsx
│ │ ├── Menu.jsx
│ │ └── Sider.jsx
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
└── README.md
├── server.js
└── webpack.config.js

```

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

### util.js

Some utility functions that have been used a number of times in a lot of places.

## File paths for links that may change

- `src\Auth\auth0-variables.js` (Callback link for authentication\*\*)
- `src\routes.js` (Link to the Store)
- `src\components\processes\endpoints.js` (Links to all services and processes)
- `public\index.html` (The src path which is currently `src="/bundle.js"` will change according to the folder it is kept inside, in the webapps folder in Tomcat. See ccrl-accounting as an example.)

\*\*This app uses the [Auth0](https://auth0.com/) api for authentication. You will need to change the urls in the Auth0 Admin Panel before changing the link for the callback here.

| foo | bar |
| --- | --- |
| baz | bim |

**Bold** _italic_ `code` [Links](#url)

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

- Hey
- Ho
- Let's Go
