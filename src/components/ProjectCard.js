import React from 'react'

function ProjectCard({ title, description, image, gitUrl, deployUrl }) {
    return (
        <div className="col-md-4 col-sm-12 mb-4">
        <div className="card h-100 port-card float-left" >
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-body">
                {deployUrl ? <a href={deployUrl} target="_blank" className="card-link" rel="noreferrer">Deployed Application</a>
                    :
                    <span className="p-0 text-muted card-link disabled">(Not currently deployed)</span>}
                {gitUrl ?
                <a href={gitUrl} target="_blank" className="card-link" rel="noreferrer">GitHub Repo</a>
                : 
                  <span className="p-0 text-muted card-link disabled">(No Repo)</span> }

            </div>
        </div>
        </div>

    )
}

export default ProjectCard
