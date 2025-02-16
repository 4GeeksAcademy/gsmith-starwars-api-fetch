import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
// import { FaTrash, FaHeart } from "react-icons/fa";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar navbar-light bg-light px-3">
      <Link className="navbar-brand" to="/">Star Wars</Link>

      <div className="dropdown">
        <button 
          className="btn btn-primary dropdown-toggle" 
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Favorites <span className="badge bg-danger">{store.favorites.length}</span>
        </button>

        {showDropdown && (
          <div className="dropdown-menu dropdown-menu-end show" style={{ width: "250px" }}>
            {store.favorites.length === 0 ? (
              <span className="dropdown-item">No favorites added</span>
            ) : (
              <>
                {store.favorites.map((fav, index) => (
                  <div key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                    <span>{fav.properties.name}</span>
                    <button 
                      className="btn btn-sm btn-danger"
                      onClick={() => actions.removeFavorite(fav.uid)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))}

                {/* Clear All Favorites Button */}
                <div className="dropdown-divider"></div>
                <button 
                  className="dropdown-item text-danger text-center"
                  onClick={actions.clearFavorites}
                >
                  Clear All
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
