```
folder 'srcForNode' is for Node back-end. (finished)
folder 'src' is for python django rest framework bakc-end
```
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

<!-- react-redux -->
npm install @reduxjs/toolkit react-redux


```

# UI framework
```
npm install antd
npm react-app-rewired customize-cra babel-plugin-import

npm install less less-loader

npm install less-loader@7.3.0 --save-dev
```
---------------------------
## Latest Main Layout (Jul/5/2024)
![](./screenShot/echartbar.png)
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

## page add merchandise(cascader load categories data from back-end) (Jun/20/2024)
![](./screenShot/cascaderLoad.png)

## add merchandise -> ajax req -> back-end-> save to DB(Jun/22/2024)

![](./screenShot/merchandiseSubmit.png)
## back-end
![](./screenShot/merchanBackend.png)
## save to DB
![](./screenShot/merchanDb.png)

## merchandise home (get merchandise list from DB )(Jun/23/2024)
![](./screenShot/merchandiseHome.png)

## merchandise detail(Jun/24/2024)
![](./screenShot/merchandetail.png)

## role API and back-end coding (Jun/25/2024)
```
## add user

### reqURL：
    http://localhost:5000/manage/role/create

### method:
    POST

### parameter:
    |parameter |isRequired |type     |memo
    |roleName    |Y       |string   |role name

### response
    {
        "status": 0,
        "data": {
            "menus": [],
            "_id": "id",
            "name": "role name",
            "create_time": time,
            "__v": 0
        }
    }

## get roles
### reqURL：
    http://localhost:5000/manage/role/list

### method:
    GET

### parameter: 
    -

### parameter
    {
        "status": 0,
        "data": [
            {
                "menus": [
                    "/role",
                    "/charts/bar",
                    "/home",
                    "/category"
                ],
                "_id": "id",
                "name": "test",
                "create_time": time,
                "__v": 0,
                "auth_time": time,
                "auth_name": "admin"
            },
            {
                "menus": [
                    "/role",
                    "/charts/bar",
                    "/home",
                    "/category"
                ],
                "_id": "id",
                "name": "test",
                "create_time": time,
                "__v": 0,
                "auth_time": time,
                "auth_name": "admin"
            },


        ]
    }

## update role (authorize)
### reqURL：
    http://localhost:5000/manage/role/update

### method:
    POST

### parmeter:
  
    |parmeter	|isRequired  |type     |memo
    |_id          |Y       |string   |id
    |menus        |Y       |array    |path array
    |auth_time    |Y       |number   |authorize time
    |auth_name    |Y       |string   |authorizer

### response
    {
        "status": 0,
        "data": {
            "menus": [
                "/role",
                "/charts/bar",
                "/home",
                "/category",
                "/user"
            ],
            "_id": "id",
            "name": "test",
            "create_time": time,
            "__v": 0,
            "auth_time": time,
            "auth_name": "admin"
        }
    }
```

## role create(Jun/26/2024)
![](./screenShot/rolecreate.png)
![](./screenShot/rolecreatedb.png)

## dispaly role items (Jun/28/2024)
![](./screenShot/role.png)

## role update(Jun/29/2024)
![](./screenShot/roleupdate.png)
![](./screenShot/roleupdated.png)
## user API (JUL/1/2024)
### back end code
```
// add user
router.post('/manage/user/add', (req, res) => {
  // get the parameter of req
  const {username, password} = req.body
  // check user  existed or not
  UserModel.findOne({username})
    .then(user => {
      // if exist
      if (user) {
        res.send({status: 1, msg: 'user existed'})
        return new Promise(() => {
        })
      } else { // not exist
        // save
        return UserModel.create({...req.body, password: md5(password || 'chan')})
      }
    })
    .then(user => {
      res.send({status: 0, data: user})
    })
    .catch(error => {
      console.error('register err', error)
      res.send({status: 1, msg: 'register err'})
    })
})


// update user
router.post('/manage/user/update', (req, res) => {
  const user = req.body
  UserModel.findOneAndUpdate({_id: user._id}, user)
    .then(oldUser => {
      const data = Object.assign(oldUser, user)
      res.send({status: 0, data})
    })
    .catch(error => {
      console.error('update user err', error)
      res.send({status: 1, msg: 'update user err'})
    })
})

// delete user
router.post('/manage/user/delete', (req, res) => {
  const {userId} = req.body
  UserModel.deleteOne({_id: userId})
    .then(() => {
      res.send({status: 0})
    })
})



// get users
router.get('/manage/user/list', (req, res) => {
  UserModel.find({username: {'$ne': 'admin'}}) // '$ne' : not equals !=
    .then(users => {
      RoleModel.find().then(roles => {
        res.send({status: 0, data: {users, roles}})
      })
    })
    .catch(error => {
      console.error('get users err', error)
      res.send({status: 1, msg: 'get users err'})
    })
})
```

## user layout (Jul/2/2024)
![](./screenShot/usercreate.png)

## user save to back-end and show in front-end  (Jul/3/2024)
![](./screenShot/userlist.png)

## user modify and delete(commit to back-end) finished  (Jul/4/2024)
![](./screenShot/usermodify.png)
## menus manage by role authority  (Jul/4/2024)
![](./screenShot/menusrole.png)
![](./screenShot/menusmanage.png)

## echart dependency (Jul/5/2024)
```
npm i echarts-for-react
npm install @antv/data-set
```

## echart pages (Jul/5/2024)
### echart bar (Jul/5/2024)
![](./screenShot/echartbar.png)
### echart line (Jul/5/2024)
![](./screenShot/echartline.png)
### echart pie (Jul/5/2024)
![](./screenShot/echartpie.png)

## redux manage states(Jul/6/2024)
install
```
npm install @reduxjs/toolkit react-redux
```
### redux codes(store) 
```
import { configureStore } from '@reduxjs/toolkit'

import titleReducer from './reducers/title'
export default configureStore({
    reducer: {
        title: titleReducer,
    },
  })
```
### redux codes(reducer) 
```
import { createSlice } from "@reduxjs/toolkit"

export const titleSlice = createSlice({
    name: 'title',
    initialState: {
        value: 'Home'
    },

    reducers: {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
        setTitle: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setTitle} = titleSlice.actions
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTitle = (state) => state.title.value
export default titleSlice.reducer


```
### redux codes(dispatch) src/component/mian-sider/index.jsx
```
import { useDispatch } from 'react-redux';
import { setTitle } from '../../redux/reducers/title';

   dispatch(setTitle(title)) 
``` 
### redux codes(Use Redux State and Actions in React Components) src/component/main-header/index.jsx
```
import { useSelector } from 'react-redux';
import { selectTitle } from '../../redux/reducers/title';

 const title = useSelector(selectTitle)
```














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
