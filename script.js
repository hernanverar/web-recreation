window.onload = function() {

const h1Element =document.querySelector("h1"); 
h1Element.remove("h1");

const bodyElement = document.querySelector("body");
const h1 = document.createElement("h1");
const h2Element = document.createElement ("h2");
const pElement = document.createElement ("p");
const img = document.createElement("img");
const aElement = document.createElement("a");

img.src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900"
img.alt="This is an image of a Multicolored Tanager bird from birdsoftheworld.org"
img.style = "width:50%"

aElement.href = "https://en.wikipedia.org/wiki/Multicoloured_tanager"


h1.append("this is a new header!!");
pElement.append("this is a <p> tag");
h2Element.append("this is a <h2> tag");
bodyElement.append (h1);
bodyElement.append (h2Element);
bodyElement.append (pElement);
bodyElement.append (img);
aElement.append("link")
bodyElement.prepend (aElement);

};



