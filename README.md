# LogiNext-case-study

The case study is about to fetch the list of users from the open API endpoint and do the following operations with each user.

1. Like/Unlike the user.
2. Update the user details.
3. delete the user.

# Production URL

Please follow the below URL to see the live application

```
https://loginext-case-study.netlify.app/
```

# Features
 - Application is responsive in nature.
 - Build the reusable components.
 - Eslint and styleLint configuration is in place in order to achieve the code quality.
 - Custom webpack configuration for both dev and production builds.
 - The loading indictor will be display while loading the user's list.
 - Validation is place for the empty fields and email field when user try to update the user.
 - Confirmation popup will be rendered when user try to delete the record.
 - Loading indicators will be render when user try to update / delete the user.

 # Installation
 Please follow the below steps to run the application on local

 ```
 git clone https://github.com/santosh2686/loginext-case-study.git
 ```

Once the repository is cloned follow the below step in order the run the application in local.

```
npm install
```

for local development

```
npm run dev
```

Hit the below URL in the browser

```
http://localhost:8080
```

To the build the app

```
npm run build
```