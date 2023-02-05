document.addEventListener("DOMContentLoaded", function() {
    // get reference to header element
    const header = document.querySelector("header");
    // get reference to main element
    const main = document.querySelector("main");
  
    // set header text
    header.innerHTML = "19th Wedding Anniversary";
  
    // create new element to show the number of years
    const years = document.createElement("p");
    years.innerHTML = "19 Years";
    main.appendChild(years);
  
    // create new element to show a message
    const message = document.createElement("p");
    message.innerHTML = "of Love and Happiness";
    main.appendChild(message);
  
    // create new element to show a personal message
    const personalMessage = document.createElement("p");
    personalMessage.innerHTML = "Thank you so much for everything you have done for me and Nevaan, I don't know where I would be without you, I love you soo sooo soo much and I wish you both the best and many more years to come!";
    main.appendChild(personalMessage);
  });