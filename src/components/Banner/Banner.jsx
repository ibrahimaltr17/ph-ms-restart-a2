import React from 'react';

const Banner = ({ inProgressCount, resolvedCount }) => {
    return (
        <section className="p-4 text-white bg-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">

                {/* In Progress */}
                <div className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] p-10 rounded-lg text-center">
                    <p className="text-white">In Progress</p>
                    <h2 className="text-4xl font-medium">{inProgressCount}</h2>
                </div>

                {/* Resolved */}
                <div className="bg-linear-to-r from-[#54CF68] to-[#00827A] p-10 rounded-lg text-center">
                    <p className="text-white">Resolved</p>
                    <h2 className="text-4xl font-medium">{resolvedCount}</h2>
                </div>

            </div>
        </section>
    );
};

export default Banner;