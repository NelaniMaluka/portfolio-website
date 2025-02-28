import { Carousel } from "primereact/carousel";
import PropTypes from "prop-types";

export default function ImageCarousel({ project }) {
  console.log(project);
  // Check if project and project.imgUrls are defined
  const projectImages = Array.isArray(project?.imgUrls)
    ? project.imgUrls.map((image) => ({ image }))
    : [];

  const responsiveOptions = [{ numVisible: 1, numScroll: 1 }];

  const ImageTemplate = (projectImage) => (
    <div>
      <img
        style={{ width: "100%", height: "auto", minHeight: "200px" }}
        src={projectImage.image}
        alt="Project Image"
      />
    </div>
  );

  return projectImages.length > 0 ? (
    <Carousel
      value={projectImages}
      numVisible={1}
      numScroll={1}
      responsiveOptions={responsiveOptions}
      itemTemplate={ImageTemplate}
    />
  ) : (
    <p>No images available</p>
  );
}

ImageCarousel.propTypes = {
  project: PropTypes.shape({
    imgUrls: PropTypes.arrayOf(PropTypes.string), // No longer required to be an array
  }).isRequired,
};
