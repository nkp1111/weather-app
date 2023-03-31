import React, { useEffect } from 'react'
import { HiOutlineChevronRight } from 'react-icons/hi'

import useGlobalContext from '../context'

const SearchOptions = ({ location, setLocation, input }) => {

  const { setShowSearchForm } = useGlobalContext()
  const handleDropLocation = () => {
    // on clicking option change location and filled search form with name
    const locations = document.querySelectorAll(".dropdown-item")
    locations.forEach(location => {
      location.addEventListener("click", (e) => {
        setLocation(e.currentTarget.innerText)
        setShowSearchForm(false)
      })
    })
  }

  useEffect(() => {
    handleDropLocation()
  })

  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle w-100 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        London
        <span className='ms-auto'>
          <HiOutlineChevronRight />
        </span>
      </button>
      <ul className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton1">
        <li><a className="dropdown-item" href="#">London</a></li>
        <li><a className="dropdown-item" href="#">Barcelona</a></li>
        <li><a className="dropdown-item" href="#">Long Beach</a></li>
      </ul>
    </div>
  )
}

export default SearchOptions
