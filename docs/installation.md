---
id: installation
title: Installation
sidebar_label: Installation
---

## Prerequisites

1. Ensure you have the latest version of [Node](https://nodejs.org/en/download/) installed. We also recommend you install [Yarn](https://yarnpkg.com/en/docs/install) as well.

   > You have to be on Node >= 8.x and Yarn >= 1.5.

1. Create a project, if none exists, and change your directory to this project's root.

   ```bash
   cd erp
   ```

   Note: This documentation uses `yarn` commands, but `npm` will also work. You can compare `yarn` and `npm` commands in the [yarn docs, here](https://yarnpkg.com/en/docs/migrating-from-npm#toc-cli-commands-comparison).

1. Install all the dependencies using yarn.

   ```bash
   yarn
   ```

> You have to be on Node >= 8.x and Yarn >= 1.5.

## Running the erp application

After installing nodejs and yarn, as
described in the [Prerequisites](#prerequisites) section:

1.  From within the `erp` directory, run the local web server using
    `yarn dev`.
1.  The server will start running at http://localhost:4000 if it did not already open
    automatically.
1.  Make sure the war files of the services are inside the `webapps` folder.
1.  Make sure the deployment folders of the BPEL processes are in `ode/WEB-INF/processes/`

### FOR DEVELOPMENT:

You can run both services and processes in Tomcat. You will however need to install this [plugin](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi) to avoid CORS errors.

### FOR PRODUCTION:

Simply run `yarn run build` and paste the public folder that is generated inside the webapps folder in Tomcat along with the services and processes. You will also need to paste the logo and favicons images not showing up to the `ROOT` folder.

## Building the erp application

To build the application:

1.  From within the `erp` directory, build the app using
    `yarn build`.
1.  A `public` folder will be generated which you can then copy and paste onto your server.
