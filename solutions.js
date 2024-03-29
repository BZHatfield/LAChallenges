// Exercise 1): Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.
document.getElementsByTagName('nav')[0];

// Exercise 2): Find the sidebar on the left by using its id and set it equal to the variable sideBar.
let sideBar = document.getElementById('sidebar-left')


// Exercise 3): Find the 'Pages' and 'Groups' sections of the sidebar by using their class.
document.getElementsByClassName('pages')[0];

document.getElementsByClassName('groups')[0];

// Exercise 4): Set the text of the 'Favorites' `h5` to say "Least Favs".
sideBar.getElementsByClassName('favorites')[0].innerHTML = `<h5> Least Favs </h5>`;

// Exercise 5): Find the first of the ads in the sidebar and hide it.
document.getElementById('sidebar-right').getElementsByClassName('ad-slot')[0].style.visibility = 'hidden';

// Exercise 6): Set the visibility on the ad that you hid in the previous exercise to make it visible again.
document.getElementById('sidebar-right').getElementsByClassName('ad-slot')[0].style.visibility = 'visible';

// Exercise 7): Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.
document.getElementById('sidebar-right').getElementsByClassName('ad-slot')[0].getElementsByTagName('img')[0].src = "http://placebear.com/200/300"

// Exercise 8): Find Sam's post and change its text to something incredible.
document.getElementsByClassName('posts')[0].getElementsByTagName('li')[12].getElementsByClassName('media-body')[0].getElementsByTagName('p')[0].innerText = "Digging my way down to this text line was INCREDIBLY difficult LOL Exercise 8 was tough."

// Exercise 9): Find the first post and add the `.post-liked` class to it, and watch it turn blue.
let postLiked = document.getElementsByClassName('posts')[0].getElementsByTagName('li')[0]

postLiked.className = postLiked.className + ' post-liked'


// Exercise 10: Find the second post and add the `.post-shared` class to the `li` containing the text Shared to watch it turn red.
let postShared = document.getElementsByClassName('posts')[0].getElementsByTagName('li')[7]

postShared.className = postShared.className + ' post-shared'
