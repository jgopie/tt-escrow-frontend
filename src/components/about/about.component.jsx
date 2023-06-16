const About = () => {
    return (
        <>
            <main>
                <article className="grid grid-cols-1 h-5/6 w-screen items-center px-60 py-10">
                    <div>
                        <h1 className="text-7xl mt-10">What is 'escrow?'</h1>
                        <p className="text-2xl mt-3">
                            To put it as simply as possible, escrow is a legal arrangement
                            where a third party temporarily holds money or property until
                            an agreed upon condition has been met.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-7xl mt-10">Not clear enough?</h2>
                        <p className="text-2xl mt-3">
                            Understandable. Escrow services are widespread throughout
                            the real estate market, but escrow can be used for virtually any
                            exchange of goods or services!
                        </p>
                    </div>
                    <div>
                        <h2 className="text-7xl mt-10">Let's walk through an example!</h2>
                        <p className="text-2xl mt-3">
                            Assume that you're looking to get some small
                            renovations done on your home. You go online or ask
                            a friend and get recommended a contractor who you've never
                            worked with before. You come to an agreement about
                            exactly what you want done, and the price, but here's the problem.
                            The contractor wants at least part of the money paid up front, but
                            you're not comfortable making payment until some service has been rendered.
                            This is where escrow comes in!
                            <br />
                            Both you and the contractor would enter into an agreement with a trusted
                            third party, in this case TT-Escrow, who would take custody of the funds
                            and relinquish it to the contractor once services have been rendered.
                        </p>
                    </div>
                </article>
            </main>
        </>
    );
};

export default About;