import React from "react";
import Switcher from "./Components/Switcher";
  
function App() {
    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <h1 className="text-green text-3xl font-bold">
                    GeeksforGeeks
                </h1>
                <h3 className="text-black dark:text-white text-2xl">
                    Adding Dark Mode in ReactJS using Tailwind CSS
                </h3>
            </div>
            <center>
                <Switcher />
                <div class="w-56 overflow-hidden bg-white
                rounded-lg border border-gray-200 
                shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img
                        class="rounded-t-lg"
                        src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png"
                        alt="gfg"
                    />
                    <div class="p-5">
                        <a href="##">
                            <h5 class="mb-2 text-2xl 
                            font-bold tracking-tight 
                            text-gray-900 dark:text-white">
                                GeeksforGeeks
                            </h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 
                            dark:text-gray-400">
                            Best coding website for
                            developers in the world.
                        </p>
                    </div>
                </div>
            </center>
        </div>
    );
}
  
export default App;