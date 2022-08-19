<div>
  Step 1: create server.js file in root directory
  <br></br>
  Step 2: npm install --save-dev @babel/core @babel/node @babel/preset-env
  @babel/preset-react nodemon
  <br></br>
  Step 3: Install express
  <br></br>
    4: add a babelrc file in root directory to tell the app what presets to use
    
    5: npx babel-node server.js
    for autosave:
    npx nodemon --exec npx babel-node server.js

    6 npm run build

server routing
const reactApp = renderToString( <StaticRouter location={req.url}> <App /> </StaticRouter> );

    ReactDOM.hydrate(

<React.StrictMode>
{/_ this Browser _/}
<BrowserRouter>
<App />
</BrowserRouter>
</React.StrictMode>,

</div>;
