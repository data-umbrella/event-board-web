export const navStyleClasses = {
  navLink: `
    inline-block
    mr-12
    mt-6
    hover:underline
    hover:text-du-purple-500
    dark:text-slate-50
    dark:hover:text-du-lightAqua
  `,
  navContainer: `
    grid
    grid-cols-12
    mb-4
  `,
  navEventSelect: `
    inline-flex
    w-full
    rounded-md
    shadow-sm px-4
    py-2
    bg-white
    font-medium
    text-gray-700
    hover:text-du-purple-500
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    focus:ring-offset-gray-100
    focus:ring-indigo-500
  `,
  navSelectButton: `
    dropdown-toggle
    px-6
    py-2.5
    leading-tight
    rounded
    transition
    duration-150
    ease-in-out
    flex
    items-center
    whitespace-nowrap
    dark:text-slate-50
    dark:hover:text-lightAqua
    hover:underline
  `,
  navSelectMenu: `
    dropdown-menu
    min-w-max
    absolute
    hidden
    bg-white
    text-base
    z-50
    float-left
    py-2
    list-none
    text-left
    rounded-lg
    shadow-lg
    mt-1
    hidden
    m-0
    bg-clip-padding
    border-none
    dark:bg-slate-700
  `,
  navDropdownItem: `
    dropdown-item
    text-sm
    py-2
    px-4
    font-normal
    block
    w-full
    whitespace-nowrap
    bg-transparent
    text-gray-700
    hover:bg-du-purple-500
    hover:text-white
    dark:text-slate-50
  `,
  modeImage: `
    mt-6
    object-scale-down: h-5
  `,
}
