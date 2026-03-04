import { FaCircle } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function App() {

  return (
    <>
      <header>
        {/* Navbar */}
        <nav>
          <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
              <a className="btn btn-ghost text-xl font-bold">CS-Ticket System</a>
            </div>
            <div className="navbar-end">
              <div className="dropdown ">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content  bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                  <li><a>Home</a></li>
                  <li><a>FAQ</a></li>
                  <li><a>Changelog</a></li>
                  <li><a>Blog</a></li>
                  <li><a>Download</a></li>
                  <li><a>Contact</a></li>
                </ul>
              </div>
              <div className="hidden lg:block">
                <ul className="menu menu-horizontal px-1">
                  <li><a>Home</a></li>
                  <li><a>FAQ</a></li>
                  <li><a>Changelog</a></li>
                  <li><a>Blog</a></li>
                  <li><a>Download</a></li>
                  <li><a>Contact</a></li>
                </ul>
              </div>
              <a className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] font-medium text-white">+ New ticket</a>
            </div>
          </div>
        </nav>

        {/* Banner Section */}
        <section className="p-4 text-white  bg-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
            <div className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] p-10 rounded-lg text-center">
              <p className="text-white">in-Progress</p>
              <h2 className="text-4xl font-medium">0</h2>
            </div>
            <div className="bg-linear-to-r from-[#54CF68] to-[#00827A] p-10 rounded-lg text-center">
              <p className="text-white">Resolved</p>
              <h2 className="text-4xl font-medium">0</h2>
            </div>
          </div>
        </section>
      </header>

      <main className="max-w-[1440px] p-4 bg-gray-100">
        <div className="flex flex-col-revers lg:flex-row gap-6">
          {/* Tickets Container */}
          <div className=" lg:w-[70%]">
            <h4 className="text-2xl my-2 font-medium">Customer Tickets</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {/* card */}
              <div className=" p-4 bg-white rounded-sm space-y-3 shadow-sm">
                <div className="flex justify-between">
                  <p className="font-medium">Login Issues - Can't Access Account</p>
                  <div class="badge badge-soft badge-success"><FaCircle /> Success</div>
                </div>
                <div>
                  <p className="text-gray-500">Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <p className="text-sm">#1001</p> <h4 className="text-red-400">HIGH PRIORITY</h4>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="text-sm text-gray-500">John Smith</p>
                    <CiCalendar className="text-lg" />
                    <p className="text-sm text-gray-500">1/1/2025</p>
                  </div>
                </div>
              </div>
              <div className=" p-4 bg-white rounded-sm space-y-3">
                <div className="flex justify-between">
                  <p className="font-medium">Login Issues - Can't Access Account</p>
                  <div class="badge badge-soft badge-success"><FaCircle /> Success</div>
                </div>
                <div>
                  <p>Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <p className="text-sm">#1001</p> <h4 className="text-red-400">HIGH PRIORITY</h4>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="text-sm text-gray-500">John Smith</p>
                    <CiCalendar className="text-lg" />
                    <p className="text-sm text-gray-500">1/1/2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Task Container */}
          <div className=" lg:w-[30%] space-y-10">
            {/* Task Status */}
            <div>
              <h4 className="text-2xl my-2 font-medium">Task Status</h4>
              <div>
                <div className="p-4 rounded-sm bg-white space-y-4 shadow-sm">
                  <h4 className="font-medium">Payment Failed- card Declined</h4>
                  <button className="btn bg-[#02A53B] text-white font-medium w-full">Complete</button>
                </div>
                <p className="text-[#627382] text-sm">Select a ticket to add to Task Status</p>
              </div>
            </div>
            {/* Resolved Task */}
            <div>
              <h4 className="text-2xl my-2 font-medium">Resolved Task</h4>
              <div>
                <div className="px-4 py-5 rounded-sm space-y-4 shadow-sm bg-[#E0E7FF]">
                  <p className="font-medium">Incorrect Billing Address</p>
                </div>
                <p className="text-[#627382] text-sm">No resolved tasks yet.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <footer className="footer sm:footer-horizontal bg-black  p-10 text-[#A1A1AA]">
          <aside className="max-w-[350px]">
            <p className="text-2xl font-bold text-white">
              CS — Ticket System
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sint, obcaecati fugiat cumque autem consequatur veniam. Dignissimos amet reprehenderit nihil quaerat, eaque, neque aut earum dolore est repellat commodi modi. Lorem ipsum dolor s!</p>
          </aside>
          <nav>
            <h6 className="text-xl font-medium text-white">Company</h6>
            <a className="link link-hover ">About Us</a>
            <a className="link link-hover">Contact Saled</a>
            <a className="link link-hover">Our Mission</a>
          </nav>
          <nav>
            <h6 className="text-xl font-medium text-white">Services</h6>
            <a className="link link-hover">Customer Stories</a>
            <a className="link link-hover">Products & Services</a>
            <a className="link link-hover">Download Apps</a>
          </nav>
          <nav>
            <h6 className="text-xl font-medium text-white">Information</h6>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Terms & Conditions</a>
            <a className="link link-hover">Join Us</a>
          </nav>
          <nav>
            <h6 className="text-xl font-medium text-white">Social Links</h6>
            <a className="link link-hover flex items-center gap-1"><FaXTwitter />@CS — Ticket System</a>
            <a className="link link-hover flex items-center gap-1"><FaLinkedin />@CS — Ticket System</a>
            <a className="link link-hover flex items-center gap-1"><FaFacebook />@CS — Ticket System</a>
            <a className="link link-hover flex items-center gap-1"> <IoIosMail />support@cst.com</a>
          </nav>
        </footer>
      </footer>
    </>
  )
}

export default App
