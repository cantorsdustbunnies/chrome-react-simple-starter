# chrome-react-simple-starter
Webpack + Chrome + React = &lt;3 

#What's this? 

Here's a modest starter-project that sets up react to run on the options-page of a chrome extension. 

#Getting started 
 simply clone the repo, cd, and `npm install` 
 
 from there `npm run build` and add the build directory to chrome through chrome://extensions - make sure you have developer mode enabled, 
 and click 'load unpacked' 
 
 for development, `npm run start:dev` will launch a live server of the react application. 
 
 #Notes and Gotchas: 
 
 this project simply copies over the manifest json file into the build directory, along with the file structure of src and uses webpack / babel 
 to do the magic of getting react working. If you need to access to chrome extension API's during development you can add 
 
 ```javascript 
 /* global chrome */ 
 ```
 to make react a little less fussy, and then add some existance conditions for the necessary objects inside the react app e.g.: 
 
 ```javascript 
  componentDidMount(){
    if(chrome.storage){
      // do stuff related to chrome API
    } else { 
      //use some spoofed data
    }
```

If there's a better way, I'd love to hear about it and will update the project accordingly. 

Enjoy! 
 
