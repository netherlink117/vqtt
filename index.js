export const mqtt = {
    install(_app, _opts) {
      if (_opts === undefined || _opts === null) {
        throw "MQTT options not defined.";
      }
      let _mqtt = require("mqtt");
      let _client = _mqtt.connect(_opts.host);
      _app.config.globalProperties.$mqtt = _client;
    }
  };
  
  export const createClient = _options => {
    if (_options === undefined || _options === null) {
      throw "MQTT options not defined.";
    }
    return {
      install(_app) {
        let _mqtt = require("mqtt");
        let _client = _mqtt.connect(_options.host);
        _app.config.globalProperties.$mqtt = _client;
      }
    };
  };
  
  export default {
    install(_app, _opts) {
      if (_opts === undefined || _opts === null) {
        throw "MQTT options not defined.";
      }
      let _mqtt = require("mqtt");
      let _client = _mqtt.connect(_opts.host);
      _app.config.globalProperties.$mqtt = _client;
    }
  };
  