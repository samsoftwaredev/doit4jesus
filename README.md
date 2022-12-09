# Finmily

### Scripts

To run development locally:
`npm run dev`

To run production code:

```
npm run postinstall
npm start
```

To push to production run:
`git push heroku master`
NOTE: Heroku connected to Github, after every push to master in Github, it will trigger a deploy to production in Heroku.

To see production logs:
`heroku logs --tail`

#### Tests

To run all tests:
`npm test`

To run all tests on watch mode:
`npm run localtest`

To run specific tests:
`./node_modules/.bin/jest -t "userController.test.ts"`

### Design

![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
https://www.getpostman.com/collections/e2ec1c9d0796384dbd8e

![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) https://lucid.app/lucidchart/62eae16d-8977-4e67-b821-62cf7fe7b945/edit?view_items=lWgZ9B2Npfj1&invitationId=inv_4ed94a22-8397-43ea-bea0-2f3f506d5158#

### Future Features

TODO:
[] Implement Auth0 for user auth - Aug 1

- Before a user registers it must be added to the finmily database.
-       This will be done on Auth0 with an "action"
-       Needs to pass information to Auth0 like "hostname" (localhost, production)
- User should be able to authenticate
-       enable auth using API
-       enable OAuth

[] Add unit test for Auth 0 - Aug 7
[] Implement Plaid to connecting to users bank accounts - Aug 14
[] Add unit test for Plaid - Aug 21
[] Build Front-End application - TBD
