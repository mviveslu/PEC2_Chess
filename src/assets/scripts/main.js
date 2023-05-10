/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */
import * as bootstrap from 'bootstrap'
import "@fortawesome/fontawesome-free/css/all.css";



+( function() {
  const url = window.location.href;
  const href = url.substring(url.lastIndexOf('/') + 1);
  const membersLink = document.getElementById("membersLink");
  const articleLink = document.getElementById("articleLink");
  const contactLink = document.getElementById("contactLink");
  console.log(href);
  if(href === "teamPage.html" || href ==="teamPage"){
    membersLink.classList.add("active");
    articleLink.classList.remove("active");
    contactLink.classList.remove("active");
  }
  else if(href ==="contactPage.html" || href ==="contactPage"){
    membersLink.classList.remove("active");
    articleLink.classList.remove("active");
    contactLink.classList.add("active");
  }
  else if(href ==="third.html" || href ==="third"){
    membersLink.classList.remove("active");
    articleLink.classList.add("active");
    contactLink.classList.remove("active");
  }
  else{
    articleLink.classList.remove("active");
    contactLink.classList.remove("active");
    membersLink.classList.remove("active");
  }
} )();


