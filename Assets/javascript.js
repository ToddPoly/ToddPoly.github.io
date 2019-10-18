const tableMain = document.getElementById('table');

fetch('data/cars.json')
.then(res => {
    return res.json();
})
.then(data => {
    let table = '';
    table += "<table>"
    data.forEach(element => {
        table += "<tr>"
        table += `<td><img src="${element["Image"]}"></td>`
        table += `<td>${element["Name"]}`
        table += `<td>${element["Summary"]}`
        table += `<td>${element["Price"]}`
        table += `<td><form class="rating" id="product1">
        <button type="submit" class="star" data-star="1">
            &#9733;
            <span class="screen-reader">1 Star</span>
        </button>
    
        <button type="submit" class="star" data-star="2">
            &#9733;
            <span class="screen-reader">2 Stars</span>
        </button>
    
        <button type="submit" class="star" data-star="3">
            &#9733;
            <span class="screen-reader">3 Stars</span>
        </button>
    
        <button type="submit" class="star" data-star="4">
            &#9733;
            <span class="screen-reader">4 Stars</span>
        </button>
    
        <button type="submit" class="star" data-star="5">
            &#9733;
            <span class="screen-reader">5 Stars</span>
        </button>
    </form></td>`
    })
    table += "</table>"
    tableMain.innerHTML = table;
});

const tableBike = document.getElementById('bike');

fetch('data/bikes.json')
.then(res => {
    return res.json();
})
.then(data => {
    let table = '';
    table += "<table>"
    data.forEach(element => {
        table += "<tr>"
        table += `<td><img src="${element["Image"]}"></td>`
        table += `<td>${element["Name"]}`
        table += `<td>${element["Summary"]}`
        table += `<td>${element["Price"]}`
        table += `<td><form class="rating" id="product1">
        <button type="submit" class="star" data-star="1">
            &#9733;
            <span class="screen-reader">1 Star</span>
        </button>
    
        <button type="submit" class="star" data-star="2">
            &#9733;
            <span class="screen-reader">2 Stars</span>
        </button>
    
        <button type="submit" class="star" data-star="3">
            &#9733;
            <span class="screen-reader">3 Stars</span>
        </button>
    
        <button type="submit" class="star" data-star="4">
            &#9733;
            <span class="screen-reader">4 Stars</span>
        </button>
    
        <button type="submit" class="star" data-star="5">
            &#9733;
            <span class="screen-reader">5 Stars</span>
        </button>
    </form></td>`
    })
    table += "</table>"
    tableBike.innerHTML = table;
});

//Gets date/time
var d = new Date();
var Date = d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate();

//Appends the comment, name and date/time together and displays on page
function getcomment() {
    var node = document.createElement("p");
    node.innerHTML = document.getElementById("comment").value + ("<div>") +
         ("Posted by: ") + document.getElementById("name").value + ("<div>") +
         ("Posted at: ") + d;
    document.getElementById('para').appendChild(node);
}

function sendMessage() {
    window.alert("Thank you for your message " + document.getElementById("name").value);
}

// Listen for form submissions
document.addEventListener('submit', function (event) {

    // Only run our code on .rating forms
    if (!event.target.matches('.rating')) return;

    // Prevent form from submitting
    event.preventDefault();

    // Get the selected star
    var selected = document.activeElement;
    if (!selected) return;
    var selectedIndex = parseInt(selected.getAttribute('data-star'), 10);

    // Get all stars in this form (only search in the form, not the whole document)
    // Convert them from a node list to an array
    // https://gomakethings.com/converting-a-nodelist-to-an-array-with-vanilla-javascript/
    var stars = Array.from(event.target.querySelectorAll('.star'));

    // Loop through each star, and add or remove the .selected class to toggle highlighting
    stars.forEach(function (star, index) {
        if (index < selectedIndex) {
            // Selected star or before it
            // Add highlighting
            star.classList.add('selected');
        } else {
            // After selected star
            // Remove highlight
            star.classList.remove('selected');
        }
    });

}, false);