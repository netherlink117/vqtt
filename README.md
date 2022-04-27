# Vqtt
A Vue plugin to work with MQTT.js within the Vue instance. It is a wrapper for the mqtt package found in npmjs.
## Install
I'm so lazy to make a public package, so just clone this into the project folder (commonly node_modules but there must not be already any vqtt folder) and there you are.
### Start
This is how you import vue-mqtt when you clone it into the node_modules folder. Options is the parameter for the createClient function, and is an object with the same possible settings as the mqtt package from npmjs.
```javascript
...
import { createClient } from "vqtt";
const options = {
    ...
};
let mqtt = createClient(options);
createApp(App)
  .use(mqtt)
  .mount("#app");
...
```
### Usage
You can use the vue-mqtt inside any component like any other plugin
```javascript
...
this.$mqtt.on(...);
this.$mqtt.publish(...);
this.$mqtt.subscribe(...);
...
```
For more examples on the mqtt instance (and functions), please check the documentation for the current mqtt package at npmjs.
## License
The code shared on this repository is shared under [MIT](https://opensource.org/licenses/MIT) license.
