import './home.styles.scss';

const Home = () => {
    return (
        <>
            <header className='home-header'>
                <h1>Welcome to TT Escrow</h1>
                <p>Worry free transactions for all consumers.</p>
            </header>
            <main>
                <section>
                    <article className="home-article">
                        <div className="">
                            <h2 className="">Our Vision</h2>
                            <p className="">
                                We see a future where all consumers
                                are able to conduct business securely,
                                and with peace of mind.
                            </p>
                        </div>
                        <div>
                            <h2 className="">Our Mission</h2>
                            <p className="">
                                To facilitate quick and easy transactions throughout the Caribbean.
                            </p>
                        </div>
                    </article>
                </section>
            </main>
        </>
    );
};

export default Home;