const styleClasses = {
  mainSectionContainer: 'grid md:grid-cols-2 lg:gap-12 rounded mb-4 lg:mb-16 bg-white grid-cols-none text-center lg:text-left',
  imageContainer: 'col-span-1',
  eventTypePillbox: 'inline-block mb-4 bg-pink-300 pl-2 pr-2 text-center rounded text-xl font-medium',
  infoTextSection: 'bg-white p-6 border-slate-300 border-solid border rounded mb-6',
}

function ReviewEventMainSection({ evt }) {
  return (
    <div className={styleClasses.mainSectionContainer}>
      <div className={styleClasses.imageContainer}>
        <img src={evt.imageUrl} className="w-full" alt="logo" />
      </div>

      <div className="col-span-1">
        <div className="pt-4">
          <div className={styleClasses.eventTypePillbox}>
            { evt.eventType }
          </div>

          <h1 className="font-bold text-3xl mb-4">
            { evt.eventName }
          </h1>

          <h2 className="mb-2">{ evt.organizationName }</h2>

          <div className="mb-4">
            <span className="mr-2">Twitter</span>
            <span className="mr-2">Facebook</span>
            <span className="mr-2">LinkedIn</span>
          </div>

          <button className="bg-blue-500 text-white p-2 rounded w-1/3">
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReviewEventMainSection;
