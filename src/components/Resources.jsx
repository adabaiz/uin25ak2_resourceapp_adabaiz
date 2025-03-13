import { resources } from '../assets/ressurser'; 

const Resources = ({ category }) => {
    const filteredResources = resources.filter(resource => resource.category === category);

    console.log(filteredResources); 
  
    return (
      <section>
        <h2>Resources for {category}</h2>
        <ul>
          {filteredResources.map((resource, index) => (
            <li key={index}>
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                {resource.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  export default Resources;