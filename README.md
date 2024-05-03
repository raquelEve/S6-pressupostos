# Pressupost Project

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png" height="40px">
<img src="https://imgs.search.brave.com/1uSbVQcXzqfrmBBQl2IoV_LtkH2xXY-A7Kgn7SNY934/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1Yvdml0ZS1s/b2dvLUJGRDQyODM5/OTEtc2Vla2xvZ28u/Y29tLnBuZw" height="40px">
<img src="https://imgs.search.brave.com/EKsk4xtJu-qcCLu6v_GJEiJbWXakB9PzJp_snmXg4ak/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy90YWlsd2luZC1j/c3MtMi5zdmc.svg" height="30px">
<img src="https://img.daisyui.com/images/daisyui-logo/daisyui-logomark.svg" height="40px">


## Geting Started
```
$ npm create vite@latest my-proyect
select framework:    react
select variant:      javascript + SWC
$ cd my-project
$ npm install
$ npm run dev

```
## Install Tailwind
```
$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p
```
&#128459; talilwind.config.js
```
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
```
&#128459; index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## Install DaisyUI
```
$ npm i daisyui
```
&#128459; talilwind.config.js
```
import daisyui from 'daisyui';

  plugins: [
    daisyui,
  ],

```
## React Router
```
$ npm install react-router-dom
```

# Webgrafia

+ How to install Tailwind & DaisyUI

    * React, Vite, Tailwind CSS, and DaisyUI<br />
    https://youtu.be/XHin0fKGl6w?si=BUOgIAg--_x7qh-g

+ Routing
    * Routes best practices: <br />
    https://webtips.dev/react-router-best-practices
    * Aprende React Routing: <br />
    https://youtu.be/JNhhdkCuyog?si=mifkOyy9RSiwSTGI

+ NavLinks
    * Active NavLink Classes with React Router:<br />
    https://ultimatecourses.com/blog/active-navlink-classes-with-react-router