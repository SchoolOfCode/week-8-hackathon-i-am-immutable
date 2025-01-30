function SearchBar() {
  // eslint-disable-next-line no-undef
  const api_key = process.env.API_KEY;

  async function getData() {
    const response = await fetch(
      "https://www.reed.co.uk/api/1.0/search?keywords=developer&locationName=London&distanceFromLocation=10&permanent=true&fullTime=true&minimumSalary=30000&maximumSalary=60000",
      {
        headers: { authorization: `Basic ${btoa(api_key + ":")}` },
      }
    );
    const data = await response.json();
    console.log("Hi");
    return data;
  }
  getData();

  return (
    <>
      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>
    </>
  );
}

export default SearchBar;
