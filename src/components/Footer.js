import React from 'react';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-white border-t border-b py-30">

                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">

                    {/* 1st block */}
                    <div className="col-span-12 lg:col-span-4">
                        <div className="box-border border-b-4 border-sky-500 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                            <h3 className="font-bold text-4xl mb-4">Atlantis AI</h3>
                            <div className='text-md font-medium text-gray-600'>
                                <h5>Atlantis AI</h5>
                                <p>Toronto</p>
                                <p>Ontario</p>
                                <p>Canada</p>
                            </div>
                        </div>
                    </div>

                    {/* 2nd block */}
                    <div className="col-span-12 lg:col-span-4 mx-auto">
                    {/* Centered header spanning both lists */}
                    <h6 className="text-sky-500 text-xl font-bold mb-6 text-left">
                        LINKS
                    </h6>

                    {/* Two columns of links */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {/* left column */}
                        <ul className="space-y-2">
                        <li>
                            <HashLink to="/" className="text-sky-500 hover:text-gray-900">
                            Home
                            </HashLink>
                        </li>
                        <li>
                            <HashLink to="/product" className="text-sky-500 hover:text-gray-900">
                            Products
                            </HashLink>
                        </li>
                        <li>
                            <HashLink to="/blog" className="text-sky-500 hover:text-gray-900">
                            Blog
                            </HashLink>
                        </li>
                        <li>
                            <HashLink to="/contact" className="text-sky-500 hover:text-gray-900">
                            Contact
                            </HashLink>
                        </li>
                        <li>
                            <HashLink to="/download" className="text-sky-500 hover:text-gray-900">
                            Download
                            </HashLink>
                        </li>
                        </ul>

                        {/* right column */}
                        <ul className="space-y-2">
                        <li>
                            <Link to="/login" className="text-sky-500 hover:text-gray-900">
                            Login
                            </Link>
                        </li>
                        <li>
                            <Link to="/tutorial" className="text-sky-500 hover:text-gray-900">
                            Tutorial
                            </Link>
                        </li>
                        <li>
                            <Link to="/download" className="text-sky-500 hover:text-gray-900">
                            Download
                            </Link>
                        </li>
                        <li>
                            <Link to="/help" className="text-sky-500 hover:text-gray-900">
                            Help
                            </Link>
                        </li>
                        <li>
                            <Link to="/qna" className="text-sky-500 hover:text-gray-900">
                            Questions & Answers
                            </Link>
                        </li>
                        </ul>
                    </div>
                    </div>

                    {/* 4th block */}
                    <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-sky-500">
                        <div className="text-xl mb-6">
                            Social Media Links.
                        </div>

                                <div className="text-md font-medium mb-6">
                                    Follow us on social media.
                                </div>
                        <div className="mx-auto text-center mt-2">
                                <ul className="flex justify-center mb-4 md:mb-0">
                                    <li>
                                        <a
                                        href="https://www.linkedin.com/company/atlantis-ai/" target="_blank" rel="noopener noreferrer"
                                        className="flex justify-center items-center bg-sky-500 hover:bg-gray-700 text-white rounded-full shadow transition duration-150 ease-in-out"
                                        aria-label="LinkedIn"
                                        >
                                        <svg
                                            className="w-10 h-10 fill-current"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                                        </svg>
                                        </a>
                                    </li>
                                    <li className="ml-4">
                                        <a
                                        href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                                        className="flex justify-center items-center bg-sky-500 hover:bg-gray-700 text-white rounded-full shadow transition duration-150 ease-in-out"
                                        aria-label="Instagram"
                                        >
                                        <svg
                                            className="w-10 h-10 fill-current"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"/>
                                        </svg>
                                        </a>
                                    </li>
                                    <li className="ml-4">
                                        <a
                                        href="https://github.com/atlantis-ai-dev" target="_blank" rel="noopener noreferrer"
                                        className="flex justify-center items-center bg-sky-500 hover:bg-gray-700 text-white rounded-full shadow transition duration-150 ease-in-out"
                                        aria-label="Github"
                                        >
                                        <svg className="w-10 h-10 fill-current"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z"/></svg>
                          
                                        </a>
                                    </li>


                                  </ul>
                            </div>
                    </div>          

                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                    <div className="text-sm text-gray-400 font-semibold py-1">
                    Copyright &copy; {new Date().getFullYear()}{"  "}
                    <HashLink
                        to="#"
                        className=" hover:text-gray-900"
                    >
                        Atlantis AI
                    </HashLink>. All rights reserved.
                    </div>
                </div>
                </div>

                </div>
                
            </footer>
        </>
    )
}
export default Footer;
