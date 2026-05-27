import { Link } from "react-router-dom";
import projectKitchen from "@/assets/project-kitchen-1.jpg";
import projectBathroom from "@/assets/project-bathroom-1.jpg";
import projectFlooring from "@/assets/project-flooring-1.jpg";
import projectConcrete from "@/assets/project-concrete.jpg";
import projectTile from "@/assets/project-tile-poster.jpg";
import projectFraming from "@/assets/project-framing-1.jpg";
import projectBasement from "@/assets/project-basement-1.jpg";
import projectExterior from "@/assets/project-exterior-1.jpg";

const Portfolio = () => {
  const projects = [
    { image: projectKitchen, title: "KITCHEN", description: "Full remodels & custom finishes" },
    { image: projectBathroom, title: "BATHROOM", description: "Modern remodels and tub installs" },
    { image: projectTile, title: "TILE", description: "Precision tile work for any space" },
    { image: projectFlooring, title: "FLOORING", description: "Hardwood, plank, and laminate installs" },
    { image: projectConcrete, title: "CONCRETE", description: "Driveways with clean broom finishes" },
    { image: projectFraming, title: "FRAMING", description: "Interior framing & rough-in" },
    { image: projectBasement, title: "BASEMENT", description: "Refresh and full basement remodels" },
    { image: projectExterior, title: "EXTERIOR", description: "Door installs, trim & curb appeal" },
  ];

  return (
    <section id="work" className="py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">SELECTED WORK</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural">
                Recent Projects
              </h3>
            </div>
            <Link
              to="/work"
              className="text-minimal border-b border-architectural pb-1 hover:opacity-60 transition-opacity self-start md:self-auto"
            >
              VIEW ALL PROJECTS →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <Link
                to="/work"
                key={index}
                className="group block"
              >
                <div className="relative overflow-hidden aspect-[4/5] bg-background">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h4 className="text-white text-lg font-medium text-architectural mb-1">
                      {project.title}
                    </h4>
                    <p className="text-white/80 text-sm leading-snug">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
