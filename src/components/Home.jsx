import React from 'react';
import {Link} from "react-router-dom";
import {Button, Hero, Navbar} from "react-daisyui";

const Home = () => {
    return (
        <>
            <div className="flex w-full component-preview p-4 bg-primary items-center justify-center gap-2 font-sans">
                <Navbar>
                    <Button className="text-xl normal-case" color="ghost">
                        D-study
                    </Button>
                </Navbar>
            </div>


            <Hero>
                <Hero.Content>
                    <img
                        src="https://api.lorem.space/image/movie?w=260&h=400"
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                            a id nisi.
                        </p>
                        <Link to={'/frontend'}>
                            <Button color="primary" className={'mr-2'}>Front-End</Button>
                        </Link>
                        <Link to={'/backend'}>
                            <Button color="primary">Back-End</Button>
                        </Link>
                    </div>
                </Hero.Content>
            </Hero>
        </>
    );
};

export default Home;