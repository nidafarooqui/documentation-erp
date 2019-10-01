---
id: installation
title: Installation
sidebar_label: Installation
custom_edit_url: https://github.com/nidafarooqui/documentation-erp/edit/master/docs/doc1.md
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

After installing nodejs and yarn, `docusaurus-init` as
described in the [Installation](#installing-docusaurus) section, you will have a
runnable, example website to use as your site's base. To run:

1.  From within the `erp` directory, run the local web server using
    `yarn dev`.
1.  The server will start running at http://localhost:4000 if it did not already open
    automatically.
