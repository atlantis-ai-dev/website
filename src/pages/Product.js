import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useDocTitle } from '../components/CustomHook';

const Product = () => {
    useDocTitle('Atlantis AI - Product Overview');

    return (
        <>
            <NavBar />

            <div className="mt-28 bg-white py-16 px-4 sm:px-6 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold text-sky-600 mb-12 text-center">Explore Our Product Suite</h1>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Business Management System */}
                        <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-bold text-sky-600 mb-2">Business Management System</h2>
                            <p className="text-gray-700 mb-4">Streamline operations, increase efficiency, and drive profitability with our scalable solution.</p>
                            <ul className="mb-2 list-disc list-inside text-gray-600">
                                <li>Employee & Finance Management</li>
                                <li>Cloud-based Access</li>
                                <li>Customizable Modules</li>
                            </ul>
                            <p className="text-sm text-gray-600 mb-2 font-semibold">Benefits:</p>
                            <ul className="mb-2 list-disc list-inside text-gray-600">
                                <li>Accessible from any device/location</li>
                                <li>Reduces administrative burden</li>
                                <li>Boosts team collaboration</li>
                            </ul>
                            <p className="text-sm text-gray-600 mb-2 font-semibold">Pricing:</p>
                            <ul className="mb-4 list-disc list-inside text-gray-600">
                                <li>Starter - $29/month</li>
                                <li>Professional - $59/month</li>
                                <li>Enterprise - Custom Quote</li>
                            </ul>
                            <Link to="/get-demo" className="inline-block bg-sky-600 hover:bg-sky-500 text-white font-semibold px-6 py-3 rounded-lg shadow">
                                Schedule Demo
                            </Link>
                        </div>

                        {/* School Management Portal */}
                        <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-bold text-sky-600 mb-2">School Management Portal</h2>
                            <p className="text-gray-700 mb-4">A complete portal for automating and managing school operations efficiently.</p>
                            <ul className="mb-2 list-disc list-inside text-gray-600">
                                <li>Enrollment & Attendance Management</li>
                                <li>Gradebook, Scheduling, Messaging</li>
                                <li>Parent & Teacher Portals</li>
                            </ul>
                            <p className="text-sm text-gray-600 mb-2 font-semibold">Benefits:</p>
                            <ul className="mb-2 list-disc list-inside text-gray-600">
                                <li>Improves student engagement</li>
                                <li>Enhances communication</li>
                                <li>Streamlines administrative tasks</li>
                            </ul>
                            <p className="text-sm text-gray-600 mb-2 font-semibold">Pricing:</p>
                            <ul className="mb-4 list-disc list-inside text-gray-600">
                                <li>Basic - $19/month</li>
                                <li>Pro - $49/month</li>
                                <li>Institution - Custom Quote</li>
                            </ul>
                            <Link to="/get-demo" className="inline-block bg-sky-600 hover:bg-sky-500 text-white font-semibold px-6 py-3 rounded-lg shadow">
                                Schedule Demo
                            </Link>
                        </div>

                        {/* Payroll Management System */}
                        <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-bold text-sky-600 mb-2">Payroll Management System</h2>
                            <p className="text-gray-700 mb-4">Automate and streamline your payroll with integration-ready features.</p>
                            <ul className="mb-2 list-disc list-inside text-gray-600">
                                <li>Accurate Salary Calculations</li>
                                <li>API Integrations</li>
                                <li>Tax & Compliance Tools</li>
                            </ul>
                            <p className="text-sm text-gray-600 mb-2 font-semibold">Benefits:</p>
                            <ul className="mb-2 list-disc list-inside text-gray-600">
                                <li>Reduces manual error</li>
                                <li>Ensures timely payments</li>
                                <li>Integrates into existing HR tools</li>
                            </ul>
                            <p className="text-sm text-gray-600 mb-2 font-semibold">Pricing:</p>
                            <ul className="mb-4 list-disc list-inside text-gray-600">
                                <li>Starter - $15/month</li>
                                <li>Business - $39/month</li>
                                <li>Custom - Contact Us</li>
                            </ul>
                            <Link to="/get-demo" className="inline-block bg-sky-600 hover:bg-sky-500 text-white font-semibold px-6 py-3 rounded-lg shadow">
                                Schedule Demo
                            </Link>
                        </div>

                        {/* Event Management System */}
                        <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-bold text-sky-600 mb-2">Event Management System</h2>
                            <p className="text-gray-700 mb-4">Plan, customize, and run stress-free events from start to finish.</p>
                            <ul className="mb-2 list-disc list-inside text-gray-600">
                                <li>Guest & RSVP Tracking</li>
                                <li>Menu Customization</li>
                                <li>Analytics Dashboard</li>
                            </ul>
                            <p className="text-sm text-gray-600 mb-2 font-semibold">Benefits:</p>
                            <ul className="mb-2 list-disc list-inside text-gray-600">
                                <li>Better guest experience</li>
                                <li>Quick setup for event types</li>
                                <li>Scalable for small or large events</li>
                            </ul>
                            <p className="text-sm text-gray-600 mb-2 font-semibold">Pricing:</p>
                            <ul className="mb-4 list-disc list-inside text-gray-600">
                                <li>Basic - $25/event</li>
                                <li>Premium - $75/month</li>
                                <li>Enterprise - Contact Us</li>
                            </ul>
                            <Link to="/get-demo" className="inline-block bg-sky-600 hover:bg-sky-500 text-white font-semibold px-6 py-3 rounded-lg shadow">
                                Schedule Demo
                            </Link>
                        </div>
                    </div>

                    {/* Case Studies */}
                    <div className="mt-24">
                        <h2 className="text-3xl font-bold text-sky-600 mb-6">In-Depth Case Studies</h2>

                        <div className="bg-white border border-gray-200 rounded-xl shadow p-8 mb-12">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Transforming Operations at Apex Enterprises</h3>
                            <p className="text-gray-700 mb-4">Apex Enterprises implemented our Business Management System across 5 departments and reduced overhead by 23% in under 6 months. Custom dashboards allowed team leads to monitor employee KPIs and track financial health in real time.</p>
                            <p className="text-gray-700">As a result, collaboration improved significantly, with department heads reporting a 40% increase in on-time project completion and a 50% decrease in internal email threads due to built-in communication tools.</p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl shadow p-8 mb-12">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Empowering Educators with SMP</h3>
                            <p className="text-gray-700 mb-4">Green Valley School adopted our School Management Portal and digitized their entire enrollment and grading system. Teachers reported saving 6+ hours per week with automated attendance and performance tracking tools.</p>
                            <p className="text-gray-700">The portal's parent messaging system led to a 35% rise in parent-teacher interactions, enhancing student support and engagement across the school.</p>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
};

export default Product;
