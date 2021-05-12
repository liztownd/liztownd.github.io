import React from 'react'
import Connect from '../components/Connect';
import Resume from '../components/Resume';

function Contact() {
    return (
        <main className="container-sm bg-light mx-auto my-5 overflow-auto text-center contactDiv">
            <div className="row">
                <Connect />
                <Resume />
            </div>

        </main>
        )
};

export default Contact;
