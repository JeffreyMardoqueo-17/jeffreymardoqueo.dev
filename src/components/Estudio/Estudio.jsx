import React from 'react';

const Estudio = () => {
    return (
        <div>

            <ol class="relative border-s border-hoverBG">
                <li class="mb-10 ms-4">
                    <div class="absolute w-3 h-3 bg-rojoClaro rounded-full mt-1.5 -start-1.5 border border-hoverBG "></div>
                    <time class="mb-1 text-xl font-normal leading-none text-rojoClaro">February 2022</time>
                    <h3 class="text-2xl font-semibold text-darkPurple dark:text-lightPurple">Application UI code in Tailwind CSS</h3>
                    <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                </li>
            </ol>
        </div>
    );
}

export default Estudio;