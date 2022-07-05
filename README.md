# ANGULAR-MFE

 This project show how to organize angular project using micro-frontend (MFE) pattern, source code has been splited into 3 folder which are main, child1, and child2, to serve as a MFE it's necessary to using additional plugin which is `ModuleFederationPlugin`, and `custom webpack`.


### Main Application

_Main application is a parent mfe that impport child1 and child2 ._

1. Go to main folder
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run 
   ```sh
   npm start
   ```
4. Open browser
   ```js
   http://localhost:4200
   ```


### Child1 Application

1. Go to main child1
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run 
   ```sh
   npm start
   ```
4. Open browser
   ```js
   http://localhost:4600
   ```


### Child2 Application

1. Go to main child1
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run 
   ```sh
   npm start
   ```
4. Open browser
   ```js
   http://localhost:4700
   ```