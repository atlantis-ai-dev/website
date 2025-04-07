import React from 'react';

const Testimonials = () => {
    return (
        <div className="bg-white py-8 pb-16">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-sky-600 uppercase font-bold">Testimonials</h2>
                    <div className="flex justify-center">
                        <div className="w-24 border-b-4 border-sky-600 mb-8"></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-sky-600">What our clients say about us.</h2>
                </div>

                <div className="px-8 lg:px-20 mt-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Testimonial 1 */}
                    <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
                        <p className="text-lg text-gray-700 italic">"Atlantis AI delivered beyond our expectations. Their software helped us automate our workflow and saved us countless hours each week."</p>
                        <div className="mt-4 font-semibold text-sky-600">— Sarah L., Operations Manager</div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
                        <p className="text-lg text-gray-700 italic">"The team was professional, responsive, and truly understood our needs. I highly recommend them to anyone looking for custom software solutions."</p>
                        <div className="mt-4 font-semibold text-sky-600">— David K., CEO of TechNova</div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
                        <p className="text-lg text-gray-700 italic">"Their platform transformed our business analytics. The dashboards are intuitive, and the real-time insights are game changers."</p>
                        <div className="mt-4 font-semibold text-sky-600">— Maya R., BI Analyst</div>
                    </div>

                    {/* Testimonial 4 */}
                    <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
                        <p className="text-lg text-gray-700 italic">"The developers at Atlantis AI were extremely collaborative. Their turnaround time was fast, and their quality was top-notch."</p>
                        <div className="mt-4 font-semibold text-sky-600">— Justin F., CTO at BrightCorp</div>
                    </div>

                    {/* Testimonial 5 */}
                    <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
                        <p className="text-lg text-gray-700 italic">"We’ve worked with several tech companies, but Atlantis AI stands out for their commitment to quality and support after delivery."</p>
                        <div className="mt-4 font-semibold text-sky-600">— Fatima N., Project Lead</div>
                    </div>

                    {/* Testimonial 6 */}
                    <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
                        <p className="text-lg text-gray-700 italic">"They built a custom solution for our nonprofit that fits perfectly with our mission. We couldn’t be happier with the results."</p>
                        <div className="mt-4 font-semibold text-sky-600">— Omar E., Director of Outreach</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
