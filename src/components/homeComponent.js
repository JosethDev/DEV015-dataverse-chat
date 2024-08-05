export const homeComponent = () => {
  const infoHome = `
  <header>
    <div class="logo">
      <img src="path/to/logo.png" alt="Marvel Logo">
    </div>
    <div class="search-bar">
      <input type="text" placeholder="Find your favorite movie">
    </div>
    <div class="api-key-button">
      <button>API Key</button>
    </div>
    <h1>The Wonderful World of Marvel</h1>
    <h2>Your guide to the incredible Marvel Cinematic Universe, here you'll find detailed information about each movie</h2>
    <ul class="stats">
      <li class="stat-item">
        <div id="average-rating">0.0</div>
        <div>Average rating</div>
      </li>
      <li class="stat-item">
        <div id="awards-received">0</div>
        <div>Awards received</div>
      </li>
      <li class="stat-item">
        <div id="total-audience">0</div>
       <div>Total audience</div>
      </li>
     </ul>
</header>
<main>
  <section>
    <p>Feature movie</p>
  </section>
  <section>
    <button class="filter-menu-toggle">
      <img class="img-menu" src="assets/menu.svg">
    </button>
    <div class="filter-menu">
      <label for="filter-year">Year</label>
      <select id="filter-year" data-testid="filter-year" name="filter-year">
        <option value="all">All</option>
        <option value="2005-2010">2005-2010</option>
        <option value="2010-2015">2010-2015</option>
        <option value="2015-2020">2015-2020</option>
        <option value="2020-2023">2020-2023</option>
      </select>
      <label for="filter-rating">Rating</label>
      <select id="filter-rating" data-testid="filter-rating" name="filter-rating">
        <option value="all">All</option>
        <option value="1-4">1-4</option>
        <option value="4-7">4-7</option>
        <option value="7-10">7-10</option>
      </select>
      <label for="sort">Sort by</label>
      <select id="sort" data-testid="select-sort" name="orderOptions">
        <option value="desc">Latest</option>
        <option value="asc">Oldest</option>
      </select>
      <button data-test id="button-clear">Clean filters</button>
    </div>
  </section>
</main>

<section id="home"></section>
  `;
  return infoHome;
}
