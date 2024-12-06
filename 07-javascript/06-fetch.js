const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const fetchData = async (url) => {
  try {
    loading.style.display = "block";

    const response = await fetch(url);
    const data = await response.json();

    loading.style.display = "none";

    data.forEach((book) => {
      const bookDiv = document.createElement("div");
      bookDiv.classList.add("mb-3", "text-center");

      const title = document.createElement("p");
      const titleStrong = document.createElement("strong");
      titleStrong.style.fontSize = "1.5rem";
      titleStrong.textContent = book.name;
      title.appendChild(titleStrong);

      const author = document.createElement("p");
      author.textContent = `by  ${book.authors.join(", ")}`;

      const year = document.createElement("p");
      year.textContent = `${book.released.substring(0, 4)}`;

      const pages = document.createElement("p");
      pages.textContent = `${book.numberOfPages} pages`;

      bookDiv.appendChild(title);
      bookDiv.appendChild(author);
      bookDiv.appendChild(year);
      bookDiv.appendChild(pages);

      app.appendChild(bookDiv);
    });
  } catch (error) {
    loading.style.display = "none";
    app.innerHTML =
      '<p class="text-center text-danger">Failed to load books. Please try again later.</p>';
  }
};

fetchData(url);
