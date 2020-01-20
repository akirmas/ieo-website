# ieo.il website

## Description

`gh-pages` - production branch. It contains only the build of the react code.
If you want to make some changes, you need to checkout to the `master` branch, do necessary changes and run the following command:

```bash
npm run deploy
```

after this command will be finished, all your changes will be updated and pushed to
the gh-pages branch. It is not applying immediately, you'll need to wait some time.

### Docker configs

`Dockerfile` contains build of the master's branch code and nginx. If you'll want to deploy the Dockerfile, you'll need to run the following command in your server:

```bash
docker build -t ieo-app . && docker container run --publish 80:80 ieo-app
```

Now you can find your app by the following link structure `[your host name or public id]/#/`

When you'll make changes in the master branch, you'll need to connect to your server pull the updates, and run this command again.

## Usefull links

Preview: https://akirmas.github.io/ieo-website

Pulse: https://gobe-marketing.monday.com/boards/171779618/pulses/217853782?171779618=%5Bobject%20Object%5D&advancedFilters=true
