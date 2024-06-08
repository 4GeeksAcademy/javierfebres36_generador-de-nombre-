/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our", "an", "some", "any"];
  let adj = ["great", "big", "awesome", "cool", "funny"];
  let noun = ["jogger", "racoon", "webside", "appside", "blog"];
  let tlds = [".org", ".com", ".net", ".space", ".de", ".cat", ".dog"];

  for (let pronoun of pronoun) {
    for (let adj of adj) {
      for (let noun of noun) {
        for (let tlds of tlds) {
          console.log(`${pronoun}${adj}${noun}${tlds}`);
        }
      }
    }
  }
};
