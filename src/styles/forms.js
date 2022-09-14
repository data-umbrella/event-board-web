const formStyleClasses = {
  input: `
    block
    border
    border-black
    dark:border-teal-400
    dark:bg-transparent
    w-full
    rounded-md
    h-14
    p-2
    text-xl
    text-[#545454]
  `,
  select: `
    block
    w-full
    rounded-md
    h-14
    border
    border-black
    dark:border-teal-400
    dark:bg-transparent
    p-2
    text-xl
    text-[#545454]
  `,
  inputContainer: `
    pr-4
    mb-6
  `,
  button: `
    bg-gray-400
    text-center
    text-white
    w-full
    rounded
    py-1
    font-medium
  `,
  textarea: `
    block
    border
    border-zinc-300
    dark:border-teal-400
    dark:bg-transparent
    w-full
    h-40
    rounded
    p-2
  `,
  reviewButton: `
    bg-du-purple-500
    text-white
    py-2
    px-8
    rounded
    text-lg
    font-normal
  `,
  searchInputGroup: `
    block
    container
    mh-60
    mx-auto
    rounded-xl
    mb-10
    pt-7
    py-5
    bg-gradient-to-b
    from-[#4273D64D]
    to-[#6B26FF4D]
    dark:from-[#000B4A]
    dark:to-[#5256BA]
    border
    border-du-purple-500
    border-4
    text-xl
    
  `,
  searchInputColumnsOne: `
    container
    gap-6
    grid
    mb-6
    md:grid-cols-4
    mx-auto
    sm:grid-cols-none
  `,
  searchInputColumnsTwo: `
    container
    gap-6
    grid
    mb-6
    md:grid-cols-3
    mx-auto
    sm:grid-cols-none
    pr-56
  `,
  hyperlinks:`
    text-blue-500
    hover:text-blue-700
    underline
  `,
  sendButton: `
    bg-du-purple-500
    text-white
    w-20
    mb-3
    p-2
    rounded
    text-lg
    font-normal
    float-right
  `,
  loginButton: `
    container
    bg-du-purple-500
    text-white
    mb-3
    p-1
    rounded-lg
    text-lg
    font-normal
  `,
};

export default formStyleClasses;
