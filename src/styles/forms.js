const formStyleClasses = {
  input: `
    block
    border
    border-black
    w-full
    rounded
    h-8
    p-2
  `,
  select: `
    block
    border
    border-black
    w-full
    rounded
    h-8
  `,
  inputContainer: 'py-2',
  button: `
    bg-gray-400
    text-center
    text-white
    w-full
    rounded
    p-1
    font-medium
  `,
  textarea: `
    block
    border
    border-black
    w-full
    h-40
    rounded
    p-2
  `,
  reviewButton: `
    bg-du-purple-50
    text-white
    p-1
    rounded
    text-lg
    font-normal
  `,
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
  searchInputColumns: `
    container
    gap-6
    grid
    mb-6
    md:grid-cols-4
    mx-auto
    sm:grid-cols-none
  `,
}

export default formStyleClasses;
