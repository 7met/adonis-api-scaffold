# Adonis API Scaffold Project

## Prerequisites
AdonisJS requires Node.js >= 12.0.0, along with npm >= 6.0.0. You can check the version of Node.js and npm by running the following commands.

```
node -v
# v12.14.1

npm -v
# 6.13.7
```

## Start
Clone repository \
Remove .git directory \
Run ```npm -i```

## Packages already installed
```
npm i @adonisjs/lucid@alpha
npm i @adonisjs/auth@alpha
npm i @adonisjs/shield@alpha
npm i phc-bcrypt
npm i adonis-bumblebee-ts
npm i @knuckleswtf/scribe-adonis
```
more info on bumblebee at the <a href="https://github.com/kmorpex/adonis-bublebee-ts#readme">github repository</a> \
more info on scribe at the <a href="https://scribe-js.readthedocs.io/en/latest/">readthedocs repository</a>

## Invoke packages
```
node ace invoke @adonisjs/lucid
node ace invoke @adonisjs/auth
node ace invoke @adonisjs/shield
node ace invoke adonis-bumblebee-ts
```

add to .env file
```
HASH_DRIVER=bcrypt
```

## Things I'd still like to add
- [ ] Forgot password links and workflow 

