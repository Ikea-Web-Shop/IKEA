export default function Breadcrumbs() {
  return (
    <>
      <nav className="flex " >
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a href="#" className="inline-flex items-center ml-1 mt-2 text-xs md:ml-4 font-normal  font-sans">
              About IKEA
            </a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2 mt-2 -rotate-45">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
</svg>

          </li>
          <li>
            <div className="flex items-center">
            
              <a href="#" className=" mt-2 text-xs font-normal text-gray-darker opacity-80   font-sans ">Newsroom</a>
            </div>
          </li>
        </ol>
      </nav>
     
    </>)
}
