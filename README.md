# wc-from-vue3

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Builds a library that can be imported in other projects
```
vue-cli-service build --target lib --inline-vue --name myLib [application or component entry-point]
```
eg
```
vue-cli-service build --target lib --inline-vue --name lib-counter ./src/components/myCounter.js
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
