import React, { useEffect } from 'react'

const SearchOptions = ({ location, setLocation, input }) => {

  const handleDropLocation = () => {
    // on clicking option change location and filled search form with name
    const locations = document.querySelectorAll(".dropdown-item")
    locations.forEach(location => {
      location.addEventListener("click", (e) => {
        setLocation(e.currentTarget.innerText)
        input.current.value = e.currentTarget.innerText
      })
    })
  }

  useEffect(() => {
    handleDropLocation()
  })

  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        London
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a className="dropdown-item" href="#">London</a></li>
        <li><a className="dropdown-item" href="#">Barcelona</a></li>
        <li><a className="dropdown-item" href="#">Long Beach</a></li>
      </ul>
    </div>
  )
}

export default SearchOptions
