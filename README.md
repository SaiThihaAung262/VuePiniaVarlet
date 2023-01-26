# Mobile Template with Vue

- [Vue (^3.2.41)](https://vuejs.org/)
- [Vite (^3.2.41)](https://vitejs.dev/)
- [Varlet (^4.0.7) Mobile UI framework](https://varlet-varletjs.vercel.app/#/en-US/index)
- [Pinia (^2.0.29) Store](https://pinia.vuejs.org/)
- [Vue-router (^4.1.6)](https://router.vuejs.org/)
- [Typescript (^4.6.4)](https://www.typescriptlang.org/)

### 1 . Clone from git

```
git clone https://github.com/BuuTii262/VueMobileTemplate.git
```

### 2 To connect api

- Go to .env file and change api host
- Change APP name
- Can use them by calling 'import.meta.env.VITE_APP_NAME'

### 3 Install npm and run

```
npm install
npm run dev
```

### 4 To build

##### To build development

```
npm run build
```

### 5 To add production mode

-
    1. create a file ".env.production"
-
    2. go to the "package.json"
-
    3. Change the title or host that you will use in production
-
    4. add this in "scripts"

```
"dev": "cross-env vite --mode development",
"build": "cross-env vite build --mode development",
```

#### To run production mode

```
npm run dev:prod
```

#### To build production mode

```
npm run build:prod
```

### If have something can't import third party component

- 1 Declate modeule in vit-env.d.ts
