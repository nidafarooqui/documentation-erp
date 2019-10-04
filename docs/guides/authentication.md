---
id: authentication
title: Setting up and Configuring the Authentication
---

Head over to the [auth0 dashboard](https://manage.auth0.com/dashboard/eu/ccrl/applications) and take a look at the applications page.

## Applications

There are separate settings for each of the local and online version of the store and the erp dashboard. Use any of them as a guide to make your own. There is also a quick start guide available to teach you how to set up basic authentication.

## Connections

### Database

We use the auth0 database to store the email address and password.
Any changes to way the sign in and registration page is shown can be made here.

## Users & Roles

This section is used to set the user and their respective roles. Use the [auth0 documentation](https://auth0.com/docs) for more information.

### Users

Users that signs up and is added to the database show up here.

### Roles

There are currently 2 roles defined: `Admin` and `Customer` but they have not been implemented fully in the erp application.

## Rules

We have multiple applications deployed at multiple locations: locally, at a virtual machine and on the server and we needed to add the registered users to the database using a custom service.

Therefore, some rules needed to be defined to redirect the user to from the auth0 path to our own path where the service would run, before being redirected back to the home page at its url location.

## Logs

If something ever goes wrong, view the logs to see what went wrong.
