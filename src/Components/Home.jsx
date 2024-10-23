import React from 'react'
import "./home.css";

export default function Home() {
  return (
    <>
    <div className='search-bar'>
        <input type='text' placeholder='Search your tasks...' />
        <button>Search</button>
    </div>
    <div className="home">
        <div className="side-panel">
            <ul>Home</ul>
            <ul>Completed</ul>
            <ul>Personal</ul>
            <ul>Work</ul>
           

        </div>
        <div className="main-panel">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quam culpa necessitatibus non in aperiam placeat sit mollitia consectetur inventore deserunt amet exercitationem itaque modi facilis, laborum excepturi alias consequatur.
            </p>



        </div>

    </div>
    </>




  )
}
