export default function SavedRecipeDetails({ open, onClose, modalDetails }) {
    return (
        // backdrop
        <div
            onClick={onClose}
            className={`
          fixed inset-0 flex justify-center items-center transition-colors
          ${open ? "visible bg-black/75" : "invisible"}
        `}
        >
            {/* modal */}
            <div
                onClick={(e) => e.stopPropagation()}
                className={`flex flex-col gap-5 bg-customGreen md:gap-10 lg:gap-11 md:flex-row rounded-xl shadow max-w-screen-md lg:max-w-screen-lg p-6 md:p-8 lg:p-16 transition-all
            ${
                open ? "scale-100 opacity-100" : "scale-125 opacity-0"
            } bg-gray-100 shadow-sky-500 rounded-md
          `}
            >
                <div className="w-3/10 p-4 shadow-md shadow-primary rounded-md bg-white">
                    <h1 className="p-2 text-center text-primary mb-2 font-bold text-lg">
                        <i className="fa-solid fa-utensils mr-2 bg-brandDark rounded p-1.5 text-white"></i>
                        {modalDetails.label}
                    </h1>
                    <img
                        src={modalDetails.image}
                        alt=""
                        className="w-full rounded-md shadow"
                    />
                </div>
                <div className="w-7/10 p-4 shadow-md shadow-primary rounded-md bg-white">
                    <h2 className="p-2 mb-2 font-bold text-lg text-brandDark">
                        Meal Type:{" "}
                        <span className="text-secondary text-md">
                            <i className="fa-solid fa-clock mr-2 text-white bg-primary p-1 rounded"></i>
                            {modalDetails.label}
                        </span>
                    </h2>
                    <h2 className="p-2  mb-2 font-bold text-lg text-brandDark">
                        Calories:{" "}
                        <span className="text-secondary text-md">
                            <i className="fa-solid fa-list-ol mr-2 text-white bg-primary p-1 rounded"></i>
                            {modalDetails?.calories};
                        </span>
                    </h2>
                    <p className="p-2  mb-2 font-bold text-lg text-brandDark">
                        Ingredients:
                    </p>
                    <div className="p-2 text-center mt-5">
                        <a
                            href={modalDetails.instructions_url}
                            target="_blank"
                            className="py-2 px-4 bg-primary rounded-md text-white font-bold hover:bg-brandDark duration-200"
                        >
                            Instructions
                        </a>
                    </div>
                </div>

                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 py-1 px-3 rounded-lg text-white bg-red-500 hover:bg-red-700"
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>
    );
}
