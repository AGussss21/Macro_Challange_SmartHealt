import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Makansiang() {
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
          <h1 className="text-3xl font-bold text-green-700">Rekomendasi Makan SIang</h1>
        </div>
        <div className="cards-container">
          {/* Tumis brokoli ayam */}
          <div className="card">
            <img
              alt="Sandwich telur keju"
              src="https://storage.googleapis.com/a1aa/image/yMD5mr1Lcu4YIFC4gqPshFsAfuCa1wbuomN0Y30sFFkRtT5JA.jpg"

            />
            <div className="card-content">
              <h2 className="card-title">Tumis brokoli ayam</h2>
              <p className="card-description">
              250 gr daging ayam | 150 gr brokoli | 4 siung bawang merah | 3 siung bawang putih | 3 sdm saus tiram | ½ sdt lada | 1 sdt kaldu ayam | Garam | Gula
              </p>
              <button
                onClick={() => navigate('/tumisbrokoli')}
              >
                Klik Disini
              </button>
            </div>
            <i className="fas fa-plus-circle" />
          </div>
          {/* Ayam Teriyaki Card */}
          <div className="card">
            <img
              alt="Ayam Teriyaki"
              src="https://storage.googleapis.com/a1aa/image/8iI0Ar9OrRbmINWJlILz3GZVHx1QwVmhudgAza1uaK6p2p8E.jpg"
            />
            <div className="card-content">
              <h2 className="card-title">Ayam Teriyaki</h2>
              <p className="card-description">
              200 gram dada ayam potong dadu | 100 gram jamur King Oyster | 100 gram Red Bell Pepper atau Paprika Merah (1 buah) | 1/2 bawang bombay | 3 siung bawang putih | 2 siung bawang merah 
              </p>
              <button
                onClick={() => navigate('/ayamteriyaki')}
              >
                Klik Disini
              </button>
            </div>
            <i className="fas fa-plus-circle" />
          </div>
          {/* Ayam goreng rempah*/}
          <div className="card">
            <img
              alt="Ayam Goreng Rempah"
              src="https://storage.googleapis.com/a1aa/image/KVcWZmiQLuooM1kklj7bIra28yRdghZpegL6IV35CGtQtT5JA.jpg"
            />
            <div className="card-content">
              <h2 className="card-title">Ayam goreng rempah</h2>
              <p className="card-description">
              160 gram paha ayam | 2 batang serai, potong potong | 1 sdt kunyit bubuk | 2 sdt ketumbar | 2 siung bawang merah, 1,2 siung bawang putih | lada secukupnya
              </p>
              <button
                onClick={() => navigate('/ayamgoreng')}
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

export default Makansiang;
