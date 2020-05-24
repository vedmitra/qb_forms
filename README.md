# qb_forms

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

The application is configured keeping white labelling in mind. Several parameters can be passed to the build command

THEME_NAME and HOST_LOCATION can be configured to set the required theme and HOST specific settings to the build.
Currently, webpack is configured for 2 themes. 
1. light
2. dark

To set the theme command can be constructed as follows
Example: THEME_NAME='light' webpack

Similarly, HOST_LOCATION (deploy location) has the following values
currently, only apiUrl is configured per HOST. If there are specific properties which differ between hosts, those can be added to these settings
1. development - settings for dev env
2. uat - settings specific to uat
3. prod - Prod settings
4. client1 - If any client requests for dedicated deployment into their hosts, settings related to the client can be configured here

Example: `HOST_LOCATION='client1' webpack` will build the assests specific to client1

### Technical Notes
1. In the interest of time, no code is in place for unit tests and no code coverage is done. 
2. To save the data, mock server is set up and configured to the start command in package.json. Upon running the start command, a mock db file is generated and all the subsequent claim submissions are stored to this file
    THis file is deleted upon stopping the server
    
### Assumptions
1. As the ask is only to build the forms, there is no header and footer, logo is added. 
2. State management tools are not used as the current application functionality is limited to just one form and the current functionality is simple enough for the react state to handle.
   Tools like Redux/flux can be added as the application complexity increases. Current app is developed keeping this in mind aof the possibility of incorporating state management tools in mind.
3. For saving the claim submission, data is stored wiothout any normalization. As it is assumed to be out of scope for this assignment
4. Currently, the above themes are just placeholdwers and no theme related styles are developed and it is assumed to be out of scope
5. No internationalization is applied to the labels and content and it is assumed to be not in scope


