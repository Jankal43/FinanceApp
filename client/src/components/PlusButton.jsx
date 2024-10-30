import React from "react";

function PlusButton() {
    return (
        <div>
            <button>
                <div
                    className="h-12 w-12 bg-yellow-300 hover:bg-yellow-400 dark:bg-gray-600 dark:hover:bg-gray-500 text-2xl rounded-full flex items-center justify-center">
                    +
                </div>
            </button>
        </div>
    );
}

export default PlusButton;
