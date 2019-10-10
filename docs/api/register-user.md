---
id: register-user
title: Register User
---

# `registerUserResponse: (url: any, xml: any, headers: any, handleSetState: any) => Promise<any>`

Sends a post request to the server to register a user and saves the `response`, to the state.

#### Arguments

1. `url` _(any)_: The path of the `registerUser` service as a string.

2. `xml` _(any)_: The SOAP request string.

3. `headers` _(any)_: The https headers object.

4. `hide` _(Function)_: Called after the response, to end the loading notification.

5. `handleSetState` _(Function)_: Callback function that calls the setState method defined in the component to set the `response`.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

#### Tips

Log the response first to see the structure before parsing it, it can change based on the request.

# `registerUser: (email: any, handleSetState: any) => Promise<void>`

Creates a soap request and calls the function to run the `registerUser` service.

#### Arguments

1. `email` _(any)_: The email address of the user.

2. `handleSetState` _(Function)_: Callback function that calls the setState method defined in the component to set the `response`.

#### Returns

`Promise` _(any)_: A promise object that resolves or rejects after calling the service.

#### Example

See [this guide](../guides/adding-processes) on how to create a request
