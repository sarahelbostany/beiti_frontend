const Search = () =>(
    <form action="/" method="get">
    <label htmlFor="header-search">
        <span className="visually-hidden"></span>
    </label>
    <input
        type="text"
        id="header-search"
        placeholder="Search Some Inspo!"
        name="s"
    />
    <button type="submit">Search</button>
</form>
);



export default Search;
