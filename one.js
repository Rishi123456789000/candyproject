document.getElementById("loginBtn").addEventListener("click", function() {
    document.getElementById("loginSidebar").classList.toggle("active");
});

// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("loginBtn").addEventListener("click", function() {
//         document.getElementById("loginSidebar").classList.toggle("active");
//     });
// });



let name = document.getElementById("name");
let password = document.getElementById("passw");
let confPass = document.getElementById("confPass");
let mail = document.getElementById("mail");
let number = document.getElementById("num");
let btn = document.getElementById("btn");
let validate = false;

btn.addEventListener("click", function () {
    let name1 = name.value;
    let useName = "";
    validate = false; // 

    for (let i of name1) {
        if (i.match(/[^A-Z]/)) {
            useName += i;
            localStorage.setItem("name", useName);
        } else {
            validate = true;
            alert("User name should only contain lowercase letters.");
            break;
        }
    }

    let password2 = password.value;
    if (
        /[A-Z]/.test(password2[0]) &&
        password2.match(/[1-9]/gi) &&
        password2.match(/[@#$%^&*]/g)
    ) {
        localStorage.setItem("password", password2);
    } else {
        validate = true;
        alert("Password should start with an uppercase letter, contain numbers, and special characters.");
    }

    let conform = confPass.value;
    if (password2 == conform) {
        localStorage.setItem("conformPassword", conform);
    } else {
        validate = true;
        alert("Confirm password does not match.");
    }

    let gmail = mail.value;
    if (gmail.match(/@gmail.com$/gi)) {
        localStorage.setItem("gmail", gmail);
    } else {
        validate = true;
        alert("Please enter a valid Gmail address.");
    }

    let num = number.value;
    if (num.length == 10) {
        if (num.match(/^[6789]/g)) {
            localStorage.setItem("number", num);
        } else {
            validate = true;
            alert("Phone number should start with 6, 7, 8, or 9.");
        }
    } else {
        validate = true;
        alert("Phone number should be exactly 10 digits long.");
    }

    if (validate == false) {
        window.location.assign("./task2.html");
    } else {
        location.reload();
    }
});
  
let signup=document.getElementById("btn2")
signup.addEventListener("click",()=>{
    window.location.assign("./signup.html")
})

let buynow=document.getElementById("btn3")
buynow.addEventListener("click",()=>{
    window.location.assign("./candymenu.html")
})

  



// document.querySelector('.btn-primary').addEventListener('click', function(e) {
//     e.preventDefault();
//     document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
// });
;;;;


// document.addEventListener('DOMContentLoaded', () => {
//     const url = "http://localhost:3000/chocolate_candies";
//     let options={
//         method:"GET",
//         headers:{
//         "content-type":"application/json",
//     }
// }
//     console.log(url)

//     async function fetchData() {
//         try {
//             const response = await fetch(url);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const contentType = response.headers.get('content-type');
//             if (contentType && contentType.includes('application/json')) {
//                 const data = await response.json();
//                 displayData(data);
//             } else {
//                 throw new Error('Expected JSON, but received something else');
//             }

//         } catch (error) {
//             console.error('There has been a problem with your fetch operation:', error);
//         }
//     }
//     function displayData(data) {
//         const dataContainer = document.getElementById('data-container');
//         data.forEach(item => {
//             const itemDiv = document.createElement('div');
//             itemDiv.classList.add('item');
//             itemDiv.innerHTML = `
//                 <h5>${item["name"]}</h5>
//                 <p> <img src=${item["image_url"]}></p>
//                 <p><strong>Price:</strong> ${item.price}</p>
//                <p><strong>flavor:</strong> ${item.flavor}</p>
//             `;
//             dataContainer.appendChild(itemDiv);
//             dataContainer.setAttribute("class","candies")
//             let btn=document.createElement("button")
//             btn.innerText="add to cart"
//         });
//     }
    
//     fetchData();
// });


     
// document.addEventListener('DOMContentLoaded', () => {
//     const url = "http://localhost:3000/gummy_candies";
//     let options={
//         method:"GET",
//         headers:{
//         "content-type":"application/json",
//     }
// }
//     console.log(url)

//     async function fetchData() {
//         try {
//             const response = await fetch(url);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const contentType = response.headers.get('content-type');
//             if (contentType && contentType.includes('application/json')) {
//                 const data = await response.json();
//                 displayData(data);
//             } else {
//                 throw new Error('Expected JSON, but received something else');
//             }

//         } catch (error) {
//             console.error('There has been a problem with your fetch operation:', error);
//         }
//     }
//     function displayData(data) {
//         const dataContainer = document.getElementById('data-container');
//         data.forEach(item => {
//             const itemDiv = document.createElement('div');
//             itemDiv.classList.add('item');
//             itemDiv.innerHTML = `
//                 <h5>${item["name"]}</h5>
//                 <p> <img src=${item["image_url"]}></p>
//                 <p><strong>Price:</strong> ${item.price}</p>
//                <p><strong>flavor:</strong> ${item.flavor}</p>
//             `;
//             dataContainer.appendChild(itemDiv);
//             dataContainer.setAttribute("class","candies")
//             let btn=document.createElement("button")
//             btn.innerText="add to cart"
//         });
//     }
    
//     fetchData();
// });
       
// //     function displayData(data) {
// //         const dataContainer = document.getElementById('data-container');
// //         dataContainer.innerHTML = ''; // Clear previous content

// //         data.forEach(item => {
// //             const itemDiv = document.createElement('div');
// //             itemDiv.classList.add('item');
// //             itemDiv.innerHTML = `
// //                 <h4>${item.name}</h4>
// //                 <p><img src="${item.image_url}" alt="${item.name}"></p>
// //                 <p><strong>Price:</strong> ${item.price}</p>
// //                 <p><strong>Flavor:</strong> ${item.flavor}</p>
// //             `;
// //             dataContainer.appendChild(itemDiv);
// //         });
// //     }

// //     function filterData(searchTerm) {
// //         const filteredData = fetchedData.filter(item => {
// //             return item.name.toLowerCase().includes(searchTerm) ||
// //                    item.flavor.toLowerCase().includes(searchTerm);
// //         });
// //         displayData(filteredData); // Display filtered data
// //     }

// //     // Attach event listener to search input
// //     document.getElementById("search-item").addEventListener('keyup', (e) => {
// //         const searchTerm = e.target.value.toLowerCase();
// //         filterData(searchTerm);
// //     });

// //     fetchData(); // Fetch data when the page loads
// //   });

// document.addEventListener('DOMContentLoaded', () => {
//     const url = "http://localhost:3000/hard_candies";
//     let fetchedData = []; // Declare fetchedData here

//     async function fetchData() {
//         try {
//             const response = await fetch(url);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const contentType = response.headers.get('content-type');
//             if (contentType && contentType.includes('application/json')) {
//                 fetchedData = await response.json(); // Assign data to fetchedData here
//                 displayData(fetchedData); // Use fetchedData to display data initially
//             } else {
//                 throw new Error('Expected JSON, but received something else');
//             }

//         } catch (error) {
//             console.error('There has been a problem with your fetch operation:', error);
//         }
//     }

//     function displayData(data) {
//         const dataContainer = document.getElementById('data-container');
//         dataContainer.innerHTML = ''; // Clear existing content
        
//         data.forEach(item => {
//             const itemDiv = document.createElement('div');
//             itemDiv.classList.add('item');
//             itemDiv.innerHTML = `
//                 <h4 id="h2">${item.name}</h4>
//                 <p><img src="${item.image_url}" alt="${item.name}"></p>
//                 <p><strong>Price:</strong> ${item.price}</p>
//                 <p><strong>Flavor:</strong> ${item.flavor}</p>
//             `;
//             dataContainer.appendChild(itemDiv);
//         });
//     }

//     function filterData(searchTerm) {
//         const filteredData = fetchedData.filter(item => {
//             return item.name.toLowerCase().includes(searchTerm) ||
//                    item.flavor.toLowerCase().includes(searchTerm);
//         });
//         displayData(filteredData); // Update the displayed data with the filtered data
//     }

//     document.getElementById("search-item").addEventListener('keyup', (e) => {
//         const searchTerm = e.target.value.toLowerCase();
//         filterData(searchTerm);
//     });

//     fetchData(); // Call fetchData to load data on page load
// });



