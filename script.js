const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const btnEl = document.getElementById("btn");

btnEl.addEventListener("click", async () => {
  try {
    btnEl.innerHTML = "Loading...";
    btnEl.disabled = true;

    let response = await fetch("https://qapi.vercel.app/api/random");
    let data = await response.json();

    quoteEl.innerText = data.quote;
    authorEl.innerText = `~ ${data.author}`;

    btnEl.innerHTML = "Get a Quote";
    btnEl.disabled = false;
  } catch (error) {
    console.log(error);
    quoteEl.innerHTML = "An error occured. Please try again later.";
    authorEl.innerText = "";

    btnEl.innerHTML = "error";
    btnEl.disabled = false;
  }
});
