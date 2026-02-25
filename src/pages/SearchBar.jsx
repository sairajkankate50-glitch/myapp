
function SearchBar({searchproduct }) {
  return (
    <input
      type="text"
      placeholder="Search product"
      onChange={(e) => searchproduct(e.target.value)}
    />
  );
}

export default SearchBar;
