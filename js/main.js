//listen for form submit

const myForm = document.getElementById("my-form");
const body = document.getElementById("body");


myForm.addEventListener("submit", saveBookmark);

function saveBookmark(e) {
    const siteName = document.getElementById("sitename").value;
    const siteUrl = document.getElementById("siteurl").value;

    const bookmark = {
        name: siteName,
        url: siteUrl
    }
    
    //Test if bookmark is null
    if(localStorage.getItem("bookmarks") === null) {
        //initialize array
        let bookmarks = [];
        //Add input bookmark to array above
        bookmarks.push(bookmark);
        //set to local storage
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    } else {
        //if there is something in bookmark
        // first get existing item in bookmarks
        let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
        //Add to array
        bookmarks.push("bookmark");
        //Reset it back to local storage
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }

    

    
    //prevent form from submitting
    e.preventDefault();
}

 //Fetch bookmarks (to show on dom)
 body.addEventListener