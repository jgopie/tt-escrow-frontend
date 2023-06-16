const Home = () => {
    return (
        <>
            <header>
                <h1 className="text-8xl font-bold">Welcome to TT Escrow</h1>
                <p className="text-6xl">Your safe guard for worry free transactions.</p>
            </header>
            <main>
                <section>
                    <article className="grid grid-cols-1">
                        <div className="my-20">
                            <h2 className="text-4xl font-bold">Our Vision</h2>
                            <p className="text-2xl">
                                We see a future where all consumers
                                are able to conduct business securely,
                                and with peace of mind.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold">Our Mission</h2>
                            <p className="text-2xl">
                                To facilitate
                            </p>
                        </div>
                    </article>
                </section>
            </main>
        </>
    );
};

export default Home;