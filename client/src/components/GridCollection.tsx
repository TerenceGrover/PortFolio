import './styles/grid-collection.css';

export default function GridCollection(props: {
  projects: {
    title: string;
    subtitle: string;
    image: string;
    link: string;
  }[];
}) {
  return (
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
              <h1 className="grid-project-title">{project.title}</h1>
              <h2 className="grid-project-subtitle">{project.subtitle}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}
