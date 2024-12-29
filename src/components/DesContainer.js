import React from 'react';

const DesContainer = ({ icon, text }) => {
    return (
        <div className="des-container flex items-center justify-start w-[300px] h-[100px] p-4 border-2 border-[#40513B] rounded-lg shadow-md bg-white">
            <div className="icon-container bg-[#40513B] text-white w-[60px] h-[60px] flex items-center justify-center rounded-full">
                {icon && <span className="text-3xl">{icon}</span>} {/* Adjust the text-3xl class to change the icon size */}
            </div>
            <p className="ml-6 font-semibold text-xl">{text}</p>
        </div>
    );
};

export default DesContainer;

// import React from 'react';

// const DesContainer = ({ icon, text }) => {
//     return (
//         <div className="des-container flex items-center justify-start w-[300px] h-[80px] ml-5 mt-5 border-2 border-[#40513B] rounded-lg">
//             <div className="icon-container ml-4 bg-[#40513B] text-white w-[60px] h-[60px] flex items-center justify-center rounded-full">
//                 {icon && <span className="text-3xl">{icon}</span>} {/* Adjust the text-3xl class to change the icon size */}
//             </div>
//             <p className="ml-6 font-semibold">{text}</p>
//         </div>
//     );
// };

// export default DesContainer;

