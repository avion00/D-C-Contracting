import { useState } from "react";
import { Link } from "react-router-dom";
import projectConcrete from "@/assets/project-concrete.jpg";
import projectBasement1 from "@/assets/project-basement-1.jpg";
import projectBasement2 from "@/assets/project-basement-2.jpg";
import projectBasement3 from "@/assets/project-basement-3.jpg";
import projectBasement4 from "@/assets/project-basement-4.jpg";
import projectBasement5 from "@/assets/project-basement-5.jpg";
import projectKitchen1 from "@/assets/project-kitchen-1.jpg";
import projectKitchen2 from "@/assets/project-kitchen-2.jpg";
import projectKitchenVideo from "@/assets/project-kitchen-video.mp4";
import projectShed1 from "@/assets/project-shed-1.jpg";
import projectShed2 from "@/assets/project-shed-2.jpg";
import projectTileVideo from "@/assets/project-tile-video.mp4";
import projectTilePoster from "@/assets/project-tile-poster.jpg";
import projectBathroom1 from "@/assets/project-bathroom-1.jpg";
import projectBathroom2 from "@/assets/project-bathroom-2.jpg";
import projectBathroom3 from "@/assets/project-bathroom-3.jpg";
import projectBathroom4 from "@/assets/project-bathroom-4.jpg";
import projectFraming1 from "@/assets/project-framing-1.jpg";
import projectFraming2 from "@/assets/project-framing-2.jpg";
import projectFraming3 from "@/assets/project-framing-3.jpg";
import projectFraming4 from "@/assets/project-framing-4.jpg";
import projectFraming5 from "@/assets/project-framing-5.jpg";
import projectExterior1 from "@/assets/project-exterior-1.jpg";
import projectFlooring1 from "@/assets/project-flooring-1.jpg";
import projectFlooring2 from "@/assets/project-flooring-2.jpg";
import projectFlooring3 from "@/assets/project-flooring-3.jpg";

type Project = {
  image: string;
  video?: string;
  title: string;
  location: string;
  category: string;
  description: string;
  area: string;
  year: string;
};

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const projects: Project[] = [
    {
      image: projectConcrete,
      title: "CONCRETE DRIVEWAY POUR",
      location: "Buffalo, NY",
      category: "CONCRETE",
      description: "Full driveway concrete pour with a clean broom finish — built for durability and curb appeal through every Western New York season.",
      area: "Residential",
      year: "2024"
    },
    {
      image: projectKitchen2,
      video: projectKitchenVideo,
      title: "KITCHEN REMODEL",
      location: "Buffalo, NY",
      category: "KITCHEN",
      description: "Full kitchen renovation featuring custom white cabinetry, quartz countertops, and modern pendant lighting for a bright, timeless space.",
      area: "Residential",
      year: "2024"
    },
    {
      image: projectKitchen1,
      title: "KITCHEN TEAR-DOWN & REBUILD",
      location: "Buffalo, NY",
      category: "KITCHEN",
      description: "Mid-project kitchen rebuild — cabinets stripped to the frame and prepped for a complete refinish and modernized layout.",
      area: "Residential",
      year: "2024"
    },
    {
      image: projectBasement1,
      title: "BASEMENT REFRESH",
      location: "Buffalo, NY",
      category: "BASEMENT",
      description: "Updated basement featuring crisp white wainscoting and deep charcoal walls for a modern, finished feel.",
      area: "Residential",
      year: "2024"
    },
    {
      image: projectBasement2,
      title: "OPEN-CEILING BASEMENT",
      location: "Buffalo, NY",
      category: "BASEMENT",
      description: "Modern open-ceiling basement design with recessed lighting and a clean two-tone wall treatment.",
      area: "Residential",
      year: "2024"
    },
    {
      image: projectBasement3,
      title: "BASEMENT REMODEL — FRAMING",
      location: "Buffalo, NY",
      category: "RENOVATION",
      description: "Full basement remodel in progress — framing, drywall prep, and structural work delivering a transformed living space.",
      area: "Residential",
      year: "2024"
    },
    {
      image: projectBasement4,
      title: "BASEMENT LIVING SPACE",
      location: "Buffalo, NY",
      category: "BASEMENT",
      description: "Completed basement living area featuring tile flooring, recessed lighting, and a sleek modern finish.",
      area: "Residential",
      year: "2024"
    },
    {
      image: projectBasement5,
      title: "BASEMENT BUILD-OUT",
      location: "Buffalo, NY",
      category: "RENOVATION",
      description: "Mid-project basement build-out with new framing and prep work for a fully finished lower level.",
      area: "Residential",
      year: "2024"
    }
    ,
    {
      image: projectShed2,
      title: "BACKYARD SHED BUILD",
      location: "Buffalo, NY",
      category: "SHED",
      description: "Custom backyard shed build — sleek black exterior with white trim, fully assembled and ready for storage or a workshop space.",
      area: "Residential",
      year: "2024"
    },
    {
      image: projectShed1,
      title: "SHED ASSEMBLY IN PROGRESS",
      location: "Buffalo, NY",
      category: "SHED",
      description: "Mid-build shed assembly featuring durable steel panels, reinforced framing, and a clean modern profile. Need help putting up a shed? Give us a call.",
      area: "Residential",
      year: "2024"
    },
    {
      image: projectTilePoster,
      video: projectTileVideo,
      title: "CUSTOM TILE WORK",
      location: "Buffalo, NY",
      category: "TILE",
      description: "Precision tile installation with clean lines and a flawless finish — perfect for bathrooms, kitchens, and floors. Call today for a free estimate.",
      area: "Residential",
      year: "2024"
    },
    {
      image: projectBathroom4,
      title: "BATHROOM REMODEL — MARBLE TILE SHOWER",
      location: "Niagara Falls, NY",
      category: "BATHROOM",
      description: "Full bathroom remodel finished with a floor-to-ceiling marble-look tile shower surround and modern fixtures. Need your bathroom brought up-to-date? Contact us for a free quote.",
      area: "Residential",
      year: "2024"
    },
    {
      image: projectBathroom3,
      title: "BATHROOM TUB & TILE INSTALL",
      location: "Niagara Falls, NY",
      category: "BATHROOM",
      description: "Fresh tub install with marble-style tile surround and new subfloor prep — ready for the final finish.",
      area: "Residential",
      year: "2024"
    },
    {
      image: projectBathroom2,
      title: "BATHROOM BACKER BOARD PREP",
      location: "Niagara Falls, NY",
      category: "BATHROOM",
      description: "Waterproof backer board installation around a new tub — the prep work that makes a tile shower last for decades.",
      area: "Residential",
      year: "2024"
    },
    {
      image: projectBathroom1,
      title: "BATHROOM GUT & DEMO",
      location: "Niagara Falls, NY",
      category: "BATHROOM",
      description: "Full bathroom tear-out and demo — clearing the way for a complete modern rebuild from the studs up.",
      area: "Residential",
      year: "2024"
    },
    {
      image: projectFraming1,
      title: "BATHROOM FRAMING",
      location: "Niagara Falls, NY",
      category: "FRAMING",
      description: "Fresh stud framing and insulation for a bathroom rebuild — solid structural work prepped for plumbing, drywall, and tile. Framing services needed? Reach out for a free quote.",
      area: "Residential",
      year: "2024"
    },
    {
      image: projectFraming2,
      title: "INTERIOR WALL FRAMING",
      location: "Niagara Falls, NY",
      category: "FRAMING",
      description: "Full interior stud framing with rough plumbing and electrical boxes set — clean, square, and ready for inspection.",
      area: "Residential",
      year: "2024"
    },
    {
      image: projectFraming5,
      title: "ROOM FRAMING & ELECTRICAL ROUGH-IN",
      location: "Niagara Falls, NY",
      category: "FRAMING",
      description: "Stud-wall framing with electrical boxes and wire pulls in place — built to code and ready for insulation and drywall.",
      area: "Residential",
      year: "2024"
    },
    {
      image: projectFraming3,
      title: "FRAMING WITH ROUGH PLUMBING",
      location: "Niagara Falls, NY",
      category: "FRAMING",
      description: "Wall framing with rough plumbing stack and insulation prep — every detail squared away before drywall goes up.",
      area: "Residential",
      year: "2024"
    },
    {
      image: projectFraming4,
      title: "WHOLE-ROOM REFRAME",
      location: "Niagara Falls, NY",
      category: "FRAMING",
      description: "Complete reframe of a gutted room — new studs, headers, and openings ready for the next phase of the rebuild.",
      area: "Residential",
      year: "2024"
    },
    {
      image: projectFlooring1,
      title: "HARDWOOD FLOORING INSTALL",
      location: "Niagara Falls, NY",
      category: "FLOORING",
      description: "Pergo XP hardwood-look plank flooring installed across an open living space — clean, durable, and built to last.",
      area: "Residential",
      year: "2024"
    },
    {
      image: projectFlooring3,
      title: "LIGHT OAK PLANK FLOORING",
      location: "Niagara Falls, NY",
      category: "FLOORING",
      description: "Bright light-oak plank flooring installation brightening up a freshly drywalled room — looking for flooring replacement? Contact us for a free quote.",
      area: "Residential",
      year: "2024"
    },
    {
      image: projectFlooring2,
      title: "WARM WOOD PLANK FLOORING",
      location: "Niagara Falls, NY",
      category: "FLOORING",
      description: "Warm-tone wood plank flooring delivering a cozy, finished look to a freshly remodeled room.",
      area: "Residential",
      year: "2024"
    },
    {
      image: projectExterior1,
      title: "FRONT DOOR ROUGH-IN & TRIM",
      location: "Niagara Falls, NY",
      category: "EXTERIOR",
      description: "Fresh exterior opening framed with clean white trim, prepped for a stylish new front door install. Enhance your home's curb appeal — contact D&C Contracting today.",
      area: "Residential",
      year: "2024"
    }
  ];

  const categories = ["ALL", "CONCRETE", "KITCHEN", "BATHROOM", "BASEMENT", "FLOORING", "FRAMING", "EXTERIOR", "SHED", "TILE", "RENOVATION"];

  const filteredProjects = activeCategory === "ALL" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h1 className="text-6xl md:text-8xl font-light text-architectural mb-8">
                OUR WORK
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                A selection of D&amp;C Contracting projects showcasing quality concrete work
                and basement remodels across Western New York.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-8 justify-center md:justify-start">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-minimal transition-colors duration-300 relative group ${
                    activeCategory === category 
                      ? "text-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                  <span className={`absolute bottom-0 left-0 w-full h-px bg-foreground transition-transform duration-300 origin-left ${
                    activeCategory === category 
                      ? "scale-x-100" 
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
              {filteredProjects.map((project, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden mb-8">
                    {project.video ? (
                      <video
                        src={project.video}
                        poster={project.image}
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full h-[60vh] object-cover bg-black"
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[60vh] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Project Category Badge */}
                    <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm px-4 py-2">
                      <span className="text-minimal text-foreground">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-light text-architectural mb-2 group-hover:text-muted-foreground transition-colors duration-500">
                        {project.title}
                      </h3>
                      <p className="text-minimal text-muted-foreground">
                        {project.location}
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex gap-8 pt-4 border-t border-border">
                      <div>
                        <p className="text-minimal text-muted-foreground mb-1">TYPE</p>
                        <p className="text-foreground">{project.area}</p>
                      </div>
                      <div>
                        <p className="text-minimal text-muted-foreground mb-1">YEAR</p>
                        <p className="text-foreground">{project.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-light text-architectural mb-8">
              Ready to Start
              <br />
              Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Call D&amp;C Contracting today at 716-863-4913 for a free quote on your concrete or basement project.
            </p>
            <Link
              to="/contact"
              className="inline-block text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300 relative group"
            >
              GET A FREE QUOTE
              <span className="absolute bottom-0 left-0 w-full h-px bg-foreground group-hover:bg-muted-foreground transition-colors duration-300"></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
