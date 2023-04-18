import '../styles/grid-collection.css';

export default function GridCollection(props: {
  projects: {
    title: string;
    subtitle: string;
    image: string;
    link: string;
  }[];
}) {
  return (
    <div id="grid-collection-global">
      <h3>
        Aaaand there's more
      </h3>
      <div id="grid-collection-wrapper">
        {props.projects.map((project, index) => {
          return (
            <div
              key={index}
              className="grid-project"
              onClick={() => {
                if (project.link) {
                  window.open(project.link, '_blank');
                }
              }}
            >
              <div className="grid-project-overlay"></div>
              <div className="grid-project-background">
                <img src={project.image} alt="" />
              </div>
              <div className="grid-project-text">
                <h4 className="grid-project-title">{project.title}</h4>
                <span className="grid-project-subtitle">
                  {project.subtitle}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
