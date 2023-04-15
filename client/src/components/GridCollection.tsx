import './styles/grid-collection.css'

export default function GridCollection(props: {
  projects: {
    title: string;
    subtitle: string;
    image: string;
    link: string;
  }[];
}) {
  // The project here is to have a grid of differnet coding projects. Grow when hovered, link to the github when clicked, one for each project.
  // The grid should be responsive, and the images should be able to be changed.
  // The grid should be able to be changed to a different layout, like a list, or a grid with a different number of columns.
  // The projects should all have a screenshot as the background image, and the title of the project as the title. and a subtitle
  return (
    <div id="grid-collection-wrapper">
      {props.projects.map((project, index) => {
        return (
          <div key={index} className="grid-project">
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
