const btnQuotesPrev = document.querySelector("#btn-quotes-prev");
const btnQuotesNext = document.querySelector("#btn-quotes-next");
const quotes = document.querySelector(".text-quotes");

btnQuotesPrev.addEventListener('click', function() {      
  quotes.innerHTML = "Pahami, taklukkan, dan kuasailah dirimu, karena lawan terberatmu adalah dirimu sendiri.";
});

btnQuotesNext.addEventListener('click', function() {      
  quotes.innerHTML = "Orang bijak adalah orang yang dapat mengambil keputusan terbaik disaat yang tepat.";
});




