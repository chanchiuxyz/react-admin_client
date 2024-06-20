# start (Jun/1/2024)

```
create react-admin_client
npm start


npm install -g serve
npm run build
serve build 
<!-- it works -->

npm install react-router-dom
 npm install axios

```

# UI framework
```
npm install antd
npm react-app-rewired customize-cra babel-plugin-import

npm install less less-loader

npm install less-loader@7.3.0 --save-dev
```

create config-overrides.js
<!-- package only the imported components -->
```
const {override, fixBabelImports} = require('customize-cra');

module.exports = override(
    fixBabelImports('import',{
        librayName: 'antd',
        libraryDirectory: 'es',
        style: 'css'
    }),
);
```

package.json
delete
```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```
update
```
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },

```

# back-end API (Jun/3/2024)
```
    node.js-express + MangoDB 
```
## front-end proxy from port:3000 to port:5000(back-end)
```json
    "proxy":"http://localhost:5000"
```

# coding

## pages 
    create pages/admin/admin.jsx
           pages/login/login.jsx

## reset css
```
https://github.com/jgthms/minireset.css/blob/master/minireset.css
```

## login page (Jun/5/2024)
![](./screenShot/login.png) 
## send login request and get the response from server (Jun/6/2024)
![](./screenShot/loginResponse.png)
## Main Layout (Jun/7/2024)
![](./screenShot/main.png)
## Icon and Routes components (Jun/8/2024)
![](./screenShot/icon.png)
## Header (Jun/9/2024)
![](./screenShot/header.png)
## Homepage (Jun/10/2024)
![](./screenShot/homepage.png)
## Category (Jun/10/2024)
![](./screenShot/category.png)
## addCategory(Jun/11/2024)
![](./screenShot/addCategory.png)
![](./screenShot/addedCategory.png)
## finished the function of add category to MongoDB (Jun/11/2024)

## back-end and API coding async (Jun/11/2024)
```
https://github.com/chanchiuxyz/react-admin-server

```
## subCategories(Jun/13/2024)
![](./screenShot/subCategories.png)
## modifyCategory(Jun/14/2024)
![](./screenShot/modifyCategory.png)

## merchandise routes (Jun/17/2024)
### nest routes deep in the tree (V5 , it not works in react-route-dom v6)
```
// somewhere up the tree
<Switch>
  <Route path="/merchandise" component={Merchandise} />
</Switch>;

// and now deeper in the tree
function Users() {
  return (
    <div>
      <Switch>
        <Route path="/merchandise/detail" component={MerchandiseDetail} />
      </Switch>
    </div>
  );
}
```
### nest routes deep in the tree(react-route-dom v6)
```
// somewhere up the tree
<Routes>
  <Route path="/merchandise/*" element={<Merchandise />} />
</Routes>;

// and now deeper in the tree
function Users() {
  return (
    <div>
      <Routes>
        <Route path="/detail" element={<MerchandiseDetail />} />
      </Routes>
    </div>
  );
}

```
## page add merchandise(Jun/18/2024)
![](./screenShot/addMerchandise.png)

## ## page add merchandise(cascader load categories data from back-end) (Jun/20/2024)
![](./screenShot/cascaderLoad.png)






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
