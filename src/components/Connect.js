import React from 'react'

function Connect() {
    return (

        <div className="col-md-6 col-sm-12">
            <h2 className="p-4">Connect </h2>

            <p>
                <img src="assets/images/email.png" alt="Email Icon" width="30px" className="m-2" /> 
            Email: <a href="mailto:liztown@gmail.com"> liztown@gmail.com</a>
            </p>
            <p>
                <img src="assets/images/gh.png" alt="GitHub Icon" width="30px" className="m-2" />  Git Hub: <a
                    href="https://github.com/liztownd" target="_blank" rel="noreferrer"> liztownd</a>
            </p>
            <p>
                <img src="assets/images/li.png" alt="Linked In Icon" width="30px" className="m-2" /> 
            LinkedIn: <a href="https://www.linkedin.com/in/liztownd" target="_blank" rel="noreferrer"> linkedin.com/in/liztownd</a>
            </p>

            <p>
                <img src="assets/images/twitter.png" alt="Twitter Icon" width="30px" className="m-2" /> Twitter: <a
                    href="http://twitter.com/liztownmo" target="_blank" rel="noreferrer"> liztownmo</a>
            </p>

        </div>


    )
};

export default Connect;
