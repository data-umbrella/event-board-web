const styleClasses = {
  searchInputGroup: `
    block
    container
    mh-60
    mx-auto
    rounded
    mb-10
    bg-violet-200
    border
    border-fuchsia-800
  `,
  inputColumns: `
    container
    gap-6
    grid
    mb-10
    md:grid-cols-4
    mx-auto
    sm:grid-cols-none
  `,
  input: `
    rounded
    border
    border-slate-500
    p-2
    w-full
  `,
}

function SearchInputGroup() {
  return (
    <div className={styleClasses.searchInputGroup}>
      <div className="p-10">
        <div className="container mx-auto mb-4">
          <input type="text" placeholder="Data Science" className={styleClasses.input} />
        </div>

        <div className="container mx-auto mb-4">
          <p>Popular searches: Python Online Rstats Django</p>
        </div>

        <label className="block font-bold mb-4">Filter By:</label>

        <div className={styleClasses.inputColumns}>
          <div>
            <label>Start Date</label>
            <input type="text" className={styleClasses.input} />
          </div>

          <div>
            <label>End Date</label>
            <input type="text" className={styleClasses.input} />
          </div>

          <div>
            <label>Language</label>
            <input type="text" className={styleClasses.input} />
          </div>

          <div>
            <label>Region</label>
            <input type="text" className={styleClasses.input} />
          </div>
        </div>

        <div className={styleClasses.inputColumns}>
          <div>
            <label>Type</label>
            <input type="text" className={styleClasses.input} />
          </div>

          <div>
            <label>Category</label>
            <input type="text" className={styleClasses.input} />
          </div>

          <div>
            <label>Price</label>
            <input type="text" className={styleClasses.input} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchInputGroup;
