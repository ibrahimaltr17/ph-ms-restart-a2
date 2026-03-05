import React, { use, useState } from "react";
import { FaCircle } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { toast } from "react-toastify";

const MainContainer = ({ taskPromise, setInProgressCount, setResolvedCount }) => {

    const taskData = use(taskPromise);

    const [tickets, setTickets] = useState(taskData);
    const [inProgress, setInProgress] = useState([]);
    const [resolved, setResolved] = useState([]);

    // Click Ticket Card
    const handleAddToProgress = (task) => {
        const alreadyExists = inProgress.find(t => t.id === task.id);
        if (alreadyExists) return;
        const updatedTickets = tickets.map(t =>
            t.id === task.id ? { ...t, status: "in-progress" } : t
            
        );

        setTickets(updatedTickets);
        setInProgress([...inProgress, { ...task, status: "in-progress" }]);
        toast.info(`${task.title} added to In Progress`)
        setInProgressCount(prev => prev + 1);
    };

    // Complete Task
    const handleComplete = (task) => {

        const remaining = inProgress.filter(t => t.id !== task.id);
        setInProgress(remaining);
        setResolved([...resolved, task]);

        const updatedTickets = tickets.map(t =>
            t.id === task.id ? { ...t, status: "resolved" } : t
        );

        setTickets(updatedTickets);
        toast.success(`${task.title} marked as Resolved`);
        setInProgressCount(prev => prev - 1);
        setResolvedCount(prev => prev + 1);
    };

    return (
        <div className="flex flex-col-reverse lg:flex-row gap-6">

            {/* Tickets Container */}
            <div className="lg:w-[70%]">

                <h4 className="text-2xl my-2 font-medium">Customer Tickets</h4>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">

                    {
                        tickets.map(task => (

                            <div
                                key={task.id}
                                onClick={() => handleAddToProgress(task)}
                                className="p-4 bg-white rounded-sm space-y-3 shadow-sm cursor-pointer hover:shadow-md transition"
                            >

                                <div className="flex justify-between">

                                    <p className="font-medium">{task.title}</p>

                                    <div
                                        className={`badge badge-soft flex items-center gap-1
                                            ${task.status === "open"
                                                ? "badge-success"
                                                : task.status === "in-progress"
                                                    ? "badge-warning"
                                                    : "badge-info"}`}
                                    >
                                        <FaCircle className="text-xs" />
                                        {task.status}
                                    </div>
                                </div>
                                badge-warning
                                badge-info

                                <div>
                                    <p className="text-gray-500">{task.description}</p>
                                </div>

                                <div className="flex justify-between">

                                    <div className="flex items-center gap-2">
                                        <p className="text-sm">#{task.id}</p>
                                        <h4
                                            className={`${task.priority === "High"
                                                ? "text-red-500"
                                                : task.priority === "Medium"
                                                    ? "text-yellow-500"
                                                    : "text-green-500"
                                                }`}
                                        >
                                            {task.priority} Priority
                                        </h4>
                                    </div>

                                    <div className="flex items-center space-x-1">
                                        <p className="text-sm text-gray-500">{task.customer}</p>
                                        <CiCalendar className="text-lg" />
                                        <p className="text-sm text-gray-500">{task.createdAt}</p>
                                    </div>

                                </div>

                            </div>
                        ))
                    }

                </div>
            </div>


            {/* Right Side Container */}
            <div className="lg:w-[30%] space-y-10">

                {/* Task Status */}
                <div>

                    <h4 className="text-2xl my-2 font-medium">Task Status</h4>

                    <div className="space-y-3">

                        {
                            inProgress.length === 0 &&
                            <p className="text-[#627382] text-sm">
                                Select a ticket to add to Task Status
                            </p>
                        }

                        {
                            inProgress.map(task => (

                                <div
                                    key={task.id}
                                    className="p-4 rounded-sm bg-white space-y-4 shadow-sm"
                                >

                                    <h4 className="font-medium">{task.title}</h4>

                                    <button
                                        onClick={() => handleComplete(task)}
                                        className="btn bg-[#02A53B] text-white font-medium w-full"
                                    >
                                        Complete
                                    </button>

                                </div>

                            ))
                        }

                    </div>

                </div>


                {/* Resolved Task */}
                <div>

                    <h4 className="text-2xl my-2 font-medium">Resolved Task</h4>

                    <div className="space-y-3">

                        {
                            resolved.length === 0 &&
                            <p className="text-[#627382] text-sm">
                                No resolved tasks yet.
                            </p>
                        }

                        {
                            resolved.map(task => (

                                <div
                                    key={task.id}
                                    className="px-4 py-5 rounded-sm space-y-4 shadow-sm bg-[#E0E7FF]"
                                >
                                    <p className="font-medium">{task.title}</p>
                                </div>

                            ))
                        }

                    </div>

                </div>

            </div>

        </div>
    );
};

export default MainContainer;