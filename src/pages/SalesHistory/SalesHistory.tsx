const SalesHistory = () => {
  return (
    <div className="">
      <div className="">
        <select
          onChange={(e) => setBrand(e.target?.value)}
          name=""
          id=""
          className="border border-[#0874c4]  py-4 md:py-0.5 my-3 p-2 bg-slate-300 rounded-md focus:outline-none focus:border-blue-500  md:ml-3"
        >
          <option defaultChecked> Filter By Brand</option>
          <option value="Google">Google</option>
          <option value="Apple">Apple</option>
          <option value="Realme">Realme</option>
          <option value="Samsung"> Samsung </option>
          <option value="OnePlus"> OnePlus </option>
        </select>
      </div>
      <div>
        <select
          // onChange={(e) => setFilter(e.target?.value)}
          name=""
          id=""
          className="border border-[#0874c4]  py-4 md:py-0.5 my-3 p-2 bg-slate-300 rounded-md focus:outline-none focus:border-blue-500  md:ml-3"
        >
          <option defaultChecked> Filter By Category</option>
          <option value="minPrice">Simple</option>
          <option value="maxPrice">Primium</option>
        </select>
      </div>
      <div>
        <select
          // onChange={(e) => setFilter(e.target?.value)}
          name=""
          id=""
          className="border border-[#0874c4]  py-4 md:py-0.5 my-3 p-2 bg-slate-300 rounded-md focus:outline-none focus:border-blue-500  md:ml-3"
        >
          <option defaultChecked> Filter by Operating System</option>
          <option value="minPrice">Android</option>
          <option value="maxPrice">IOS</option>
        </select>
      </div>
      <div>
        <select
          // onChange={(e) => setFilter(e.target?.value)}
          name=""
          id=""
          className="border border-[#0874c4]  py-4 md:py-0.5 my-3 p-2 bg-slate-300 rounded-md focus:outline-none focus:border-blue-500  md:ml-3"
        >
          <option defaultChecked> Filter By Storage Capacity</option>
          <option value="minPrice">32</option>
          <option value="maxPrice">64</option>
          <option value="maxPrice">128</option>
          <option value="maxPrice">256</option>
        </select>
      </div>
      <div>
        <select
          // onChange={(e) => setFilter(e.target?.value)}
          name=""
          id=""
          className="border border-[#0874c4]  py-4 md:py-0.5 my-3 p-2 bg-slate-300 rounded-md focus:outline-none focus:border-blue-500  md:ml-3"
        >
          <option defaultChecked> Filter By</option>
          <option value="minPrice">Min Price</option>
          <option value="maxPrice">Max Price</option>
        </select>
      </div>
    </div>
  );
};

export default SalesHistory;
