export default function Footer() {
    return (
      <div className="flex justify-between items-center h-16 bg-pink-300 text-black bottom-0 w-full p-5 z-50">
      <div>
        <p className="text-center text-sm">
        © Creado por{" "}
        <img
          onClick={() =>
          window.open(
            "https://github.com/nicoucabrera",
            "_blank",
            "noopener,noreferrer"
          )
          }
          src="https://img.icons8.com/ios-filled/50/000000/github.png"
          alt="GitHub"
          className="w-6 h-6 cursor-pointer inline"
        />
        </p>
      </div>
      <div className="flex space-x-4 ml-4 items-end-safe">
        <p className="flex items-center">
        Sigueme en:{" "}
        <img
          onClick={() =>
          window.open(
            "https://www.instagram.com/abogada_belen_/",
            "_blank",
            "noopener,noreferrer"
          )
          }
          src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png"
          alt="Instagram"
          className="w-6 h-6 cursor-pointer inline ml-2"
        />
        </p>
      </div>
      </div>
    );
  }
  
