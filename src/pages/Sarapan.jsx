import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Sarapan() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleBackClick = () => {
    navigate("/");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = (e) => {
    if (e.target.closest("#dropdownButton") === null) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>Healthy Life</title>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .dropdown:hover .dropdown-content {
            display: block;
            opacity: 1;
          }
          .dropdown-content a {
            color: #333;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            text-align: left;
          }
          .dropdown-content a:hover {
            background-color: #f1f1f1;
          }
          .card {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 12px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            background-color: white;
            padding: 20px;
            margin-bottom: 20px;
            transition: transform 0.3s ease;
          }
          .card:hover {
            transform: scale(1.05);
          }
          .card img {
            border-radius: 8px;
            width: 120px;
            height: 120px;
            object-fit: cover;
            margin-right: 20px;
          }
          .card-content {
            flex-grow: 1;
          }
          .card-title {
            font-size: 1.25rem;
            font-weight: 700;
            color: #2d6a4f;
            margin-bottom: 10px;
          }
          .card-description {
            font-size: 0.9rem;
            color: #555;
            line-height: 1.5;
          }
          .card button {
            background-color: #2d6a4f;
            color: white;
            padding: 10px 20px;
            border-radius: 6px;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          .card button:hover {
            background-color: #218c49;
          }
          .card i {
            margin-left: 10px;
            font-size: 1.5rem;
            color: #2d6a4f;
            cursor: pointer;
          }
          .card i:hover {
            color: #218c49;
          }
          .cards-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 20px;
          }
        `,
        }}
      />
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-lg font-bold">Healthy Life</div>
          <nav className="flex space-x-6 relative items-center">
            <a className="text-green-600" href="#">
              Home
            </a>
            {/* Dropdown Fitur */}
            <div className="relative dropdown">
              <a
                className="text-black hover:text-green-600 cursor-pointer"
                onClick={toggleDropdown}
                id="dropdownButton"
              >
                Fitur <i className="fas fa-chevron-down" />
              </a>
              <div
                className={`dropdown-content absolute text-gray-800 shadow-lg rounded-lg w-40 mt-2 z-10 ${isDropdownOpen ? 'block' : 'hidden'}`}
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-green-600 hover:text-white"
                >
                  Pelacak Jam Tidur
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-green-600 hover:text-white"
                >
                  Pelacak Langkah
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-green-600 hover:text-white"
                >
                  Resep Makanan
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-green-600 hover:text-white"
                >
                  Catatan Sehat
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-green-600 hover:text-white"
                >
                  Aktivitas Fisik
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-green-600 hover:text-white"
                >
                  Monitor Kesehatan
                </a>
              </div>
            </div>
            <a className="text-gray-700" href="#">
              Artikel
            </a>
            <a className="text-gray-700" href="#">
              Pusat Bantuan
            </a>
          </nav>
          <div className="text-gray-700">
            <i className="fas fa-bars" />
          </div>
        </div>
      </header>
      <main className="container mx-auto mt-8 px-6">
        <div className="flex items-center mb-4">
          <button
            className="text-green-600 text-xl mr-4"
            onClick={handleBackClick}
          >
            <i className="fas fa-arrow-left" />
          </button>
          <h1 className="text-3xl font-bold text-green-700">Rekomendasi Sarapan</h1>
        </div>
        <div className="cards-container">
          {/* Sandwich Telur Keju Card */}
          <div className="card">
            <img
              alt="Sandwich telur keju"
              src="https://storage.googleapis.com/a1aa/image/nEcNjvYSr95JJV8nIyfuxavNgAulXy9Ui9qHf4Pp389W6PyTA.jpg"
            />
            <div className="card-content">
              <h2 className="card-title">Sandwich Telur Keju</h2>
              <p className="card-description">
                4 lembar roti tawar | 2 butir telur | 4 buah tomat (iris tipis) | 1 buah timun | 100 gram selada | 50 ml mayones | 100 ml margarin | 50 gram keju cheddar | 1 sdt garam | 1 sdt lada | 1 sdt gula pasir
              </p>
              <button
                onClick={() => navigate('/sandwichtelur')}
              >
                Klik Disini
              </button>
            </div>
            <i className="fas fa-plus-circle" />
          </div>
          {/* Potato Wedges Card */}
          <div className="card">
            <img
              alt="Potato wedges"
              src="https://storage.googleapis.com/a1aa/image/akm8xVTforVyMaUcfZ5wcrFI6mbTqoF6aEewglsShZ0X8fIPB.jpg"
            />
            <div className="card-content">
              <h2 className="card-title">Potato Wedges</h2>
              <p className="card-description">
                2 buah kentang | 2 sdm minyak | 1 sdt garam | 1 sdt lada | 1 sdt paprika bubuk | 1 sdt bawang putih bubuk | 1 sdt bawang bombay bubuk | 1 sdt oregano | 1 sdt basil | 1 sdt parsley
              </p>
              <button
                onClick={() => navigate('/potatowedges')}
              >
                Klik Disini
              </button>
            </div>
            <i className="fas fa-plus-circle" />
          </div>
          {/* Salad Sayur Card */}
          <div className="card">
            <img
              alt="Salad sayur"
              src="https://storage.googleapis.com/a1aa/image/Kny0txkViQJmMdySZp5bZTzATkE7kV0K1aw5ddUxFecGfPyTA.jpg"
            />
            <div className="card-content">
              <h2 className="card-title">Salad Sayur</h2>
              <p className="card-description">
                1 buah wortel | 2 buah tomat | 2 buah timun | 1 buah paprika | 1 buah bawang bombay | 100 gram selada | 50 ml mayones | 1 sdt garam | 1 sdt lada | 1 sdt gula pasir
              </p>
              <button
                onClick={() => navigate('/saladsayur')}
              >
                Klik Disini
              </button>
            </div>
            <i className="fas fa-plus-circle" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Sarapan;
