import React, { useState } from 'react'
import ProjectCard from './ProjectCard';

function Projects() {
    const [projects, setProjects] = useState([
        {
            title: 'My Bookshelf',
            image: 'assets/images/bookshelf-details.png',
            description: 'A personal bookshelf powered by Google Books API. A user can create an account, save books to their private shelf, mark them as read or unread, filter, and rate their favorite books! User preferences and books are saved in a postgres database through the Ruby on Rails API backend.',
            gitUrl: 'https://github.com/liztownd/mybookshelf',
            deployUrl: 'https://liztownd.github.io/mybookshelf',
        },
        {
            title: 'devlr v2',
            image: 'assets/images/devlr2.png',
            description: 'devlr v2: devlr 1.0 Reactified: a social networking site for devs. MERN stack utilizing Context API and Reducer to manage state with brand new features: like & comment on posts, followers/following network, editable profiles, and more!',
            gitUrl: 'https://github.com/brandyquinlan/devlr',
            deployUrl: false,
        },
        {
            title: 'devlr BETA',
            image: 'assets/images/devlr.png',
            description: 'devlr v1: Twitter + GitHub = devlr, a social networking site for devs. Express server used to deliver data from an SQL database and the GitHub API using jQuery, handlebars, and CSS variables to update content dynamically.',
            gitUrl: 'https://github.com/liztownd/devlr',
            deployUrl: false,
        },
        {
            title: 'fanPagR',
            image: 'assets/images/fanPagR.png',
            description: 'A custom fan page generator utilizing jQuery to populate dynamic content from multiple third-party APIs and various CSS theme files.',
            gitUrl: 'https://github.com/cmoss703/fanPagR',
            deployUrl: 'https://cmoss703.github.io/fanPagR/',
        },
        {
            title: 'Tradeshow Website',
            image: 'assets/images/ipms.png',
            description: 'Website for a yearly tradeshow: International Paper Money Show.',
            gitUrl: 'https://github.com/liztownd/kc-ipms',
            deployUrl: 'http://www.ipmskansascity.com',
        },
        {
            title: 'Alcott Arts Center Website',
            image: 'assets/images/alcott.png',
            description: 'Website for a non-profit arts organization.',
            gitUrl: false,
            deployUrl: 'https://www.alcottartscenter.org/',
        },
    ]);

    const allProj = [
        {
            title: 'My Bookshelf',
            image: 'assets/images/bookshelf-details.png',
            description: 'A personal bookshelf powered by Google Books API. A user can create an account, save books to their private shelf, mark them as read or unread, filter, and rate their favorite books! User preferences and books are saved in a postgres database through the Ruby on Rails API backend.',
            gitUrl: 'https://github.com/liztownd/mybookshelf',
            deployUrl: 'https://liztownd.github.io/mybookshelf',
        },
        {
            title: 'React Employee Directory',
            image: 'assets/images/sort.png',
            description: 'A React Employee Directory, populated with data from the randomuser.me API using hooks for sort and filter functionality.',
            gitUrl: 'https://github.com/liztownd/employee-directory',
            deployUrl: 'https://liztownd.github.io/employee-directory/',
        },
        {
            title: 'Alcott Arts Center Website',
            image: 'assets/images/alcott.png',
            description: 'Website for a non-profit arts organization.',
            gitUrl: false,
            deployUrl: 'https://www.alcottartscenter.org/',
        },
        {
            title: 'devlr v2',
            image: 'assets/images/devlr2.png',
            description: 'devlr v2: devlr 1.0 Reactified: a social networking site for devs. MERN stack utilizing Context API and Reducer to manage state with brand new features: like & comment on posts, followers/following network, editable profiles, and more!',
            gitUrl: 'https://github.com/brandyquinlan/devlr',
            deployUrl: false,
        },
        {
            title: 'devlr BETA',
            image: 'assets/images/devlr.png',
            description: 'devlr v1: Twitter + GitHub = devlr, a social networking site for devs. Express server used to deliver data from an SQL database and the GitHub API using jQuery, handlebars, and CSS variables to update content dynamically.',
            gitUrl: 'https://github.com/liztownd/devlr',
            deployUrl: false,
        },
        {
            title: 'Eat That Burger! App',
            image: 'assets/images/burger.png',
            description: 'A simple burger tracker built with an Express.js server, with express-handlebars-based html, accessing an SQL database using ORM and MVC architecture, deployed to Heroku.',
            gitUrl: 'https://github.com/liztownd/burger',
            deployUrl: 'https://mighty-citadel-87170.herokuapp.com/',
        },
        {
            title: 'fanPagR',
            image: 'assets/images/fanPagR.png',
            description: 'A custom fan page generator utilizing jQuery to populate dynamic content from multiple third-party APIs and various CSS theme files.',
            gitUrl: 'https://github.com/cmoss703/fanPagR',
            deployUrl: 'https://cmoss703.github.io/fanPagR/',
        },
        {
            title: 'Weather Dashboard',
            image: 'assets/images/weather-dashboard.png',
            description: 'A JavaScript based weather dashboard accessing the Open Weather API utilizing Bootstrap for styling and JavaScript and jQuery to serve dynamic content.',
            gitUrl: 'https://github.com/liztownd/weather-app',
            deployUrl: 'https://liztownd.github.io/weather-app/',
        },
        {
            title: 'Tradeshow Website',
            image: 'assets/images/ipms.png',
            description: 'Website for a yearly tradeshow: International Paper Money Show.',
            gitUrl: false,
            deployUrl: 'http://www.ipmskansascity.com',
        },
        // {
        //     title: 'Graphic Design Portfolio',
        //     image: 'assets/images/tom-1.jpg',
        //     description: 'Liz has been a graphic designer since 2001.',
        //     gitUrl: false,
        //     deployUrl: 'http://www.liztowndesign.com',
        // },
        {
            title: 'Code Quiz',
            image: 'assets/images/question.png',
            description: 'JavaScript based quiz on coding terminology.',
            gitUrl: 'https://github.com/liztownd/code-quiz',
            deployUrl: 'https://liztownd.github.io/code-quiz/',
        },
        {
            title: 'Day Planner',
            image: 'assets/images/colorBlocks.png',
            description: 'A JavaScript based day planner.',
            gitUrl: 'https://github.com/liztownd/day-planner',
            deployUrl: 'https://liztownd.github.io/day-planner/',
        },
    ]



    function handleOnClick(e) {
        e.preventDefault();
        console.log('click');
        setProjects(shuffleProj().slice(0, 6))
    };

    function shuffleProj() {

        let shuffledProj = [...allProj]

        let counter = shuffledProj.length;

        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);

            // Decrease counter by 1
            counter--;

            // And swap the last element with it
            let temp = shuffledProj[counter];
            shuffledProj[counter] = shuffledProj[index];
            shuffledProj[index] = temp;
        }

        return shuffledProj;

    }

    return (
        <main className="container-lg mx-auto mt-1 mb-5">
            <div className="container mx-auto p-3 my-3">
                <div className="d-flex justify-content-between m-4">
                    <h2 className="text-light ">Portfolio</h2>
                    <button className="btn btn-sm btn-light" onClick={handleOnClick}>Shuffle Projects</button>
                </div>
                <div className="row mx-auto">
                    {projects.map((p) =>
                        <ProjectCard
                            key={p.title}
                            title={p.title}
                            description={p.description}
                            image={p.image}
                            gitUrl={p.gitUrl}
                            deployUrl={p.deployUrl}
                        />

                    )}
                </div>
            </div>
        </main>
    )
}

export default Projects
