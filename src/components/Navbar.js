import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            OR Dashboard
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/case-volume">
                  Case Volume
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/delays">
                  Delays
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/case-duration">
                  Case Duration
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
