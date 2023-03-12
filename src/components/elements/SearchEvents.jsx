import React, { useState } from "react";
import SearchResultViewSelector from "components/elements/SearchResultViewSelector";
import EventListView from "components/elements/EventListView";
import EventGridView from "components/elements/EventGridView";
import EventCalendarView from "components/elements/EventCalendarView";
import EventMapView from "components/elements/EventMapView";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";

const styleClasses = {
  searchResultsHeading: `
    font-bold
    text-2xl
    mb-8
    pt-6
    dark:text-slate-50
    md:pt-0
  `,
};

export function SearchView({ events, viewName }) {
  switch (viewName) {
  case "GRID":
    return <EventGridView events={events} />;
  case "LIST":
    return <EventListView events={events} />;
  case "CALENDAR":
    return <EventCalendarView events={events} />;
  case "MAP":
    return <EventMapView events={events} />;
  default:
    return <EventGridView events={events} />;
  }
}

function SearchEvents({ events, eventsMetadata, handlePageChange }) {
  const [searchView, setSearchView] = useState("GRID");
  let [searchParams] = useSearchParams();
  const pageSize = searchParams.get("pageSize") || 20;
  function handleChange(event) {
    handlePageChange(event.selected + 1);
  }

  function updateSearchView(e) {
    setSearchView(e.target.id);
  }

  const totalPagesAvailable = Math.ceil(eventsMetadata.count / pageSize);

  const PaginationComponent = searchView !== "CALENDAR" && (
    <div className="flex justify-center">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        pageRangeDisplayed={4}
        marginPagesDisplayed={0}
        onPageChange={handleChange}
        pageCount={totalPagesAvailable}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        className={"pagination-navigation"}
      />
    </div>
  );

  return (
    <div>
      <SearchResultViewSelector
        onChange={updateSearchView}
        selectedView={searchView}
      />

      <div>
        <h3 className={styleClasses.searchResultsHeading}>
          Search Results ({eventsMetadata.count})
        </h3>
      </div>

      <div>
        <SearchView events={events} viewName={searchView} />
      </div>

      { PaginationComponent }

    </div>
  );
}

export default SearchEvents;
