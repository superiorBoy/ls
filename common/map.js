
export function loadBMap(funcName) {
  var script = document.createElement("script");
  script.src = "http://api.map.baidu.com/api?v=2.0&ak=PlhFWpA02aoURjAOpnWcRGqw7AI8EEyO&callback=" + funcName;
  document.body.appendChild(script);
}
