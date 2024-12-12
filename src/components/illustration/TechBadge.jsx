const TechBadge = ({ tech , color}) => {
    return (
        <>
      <span 
      className={`inline-block text-gray-800 text-xs font-medium rounded mr-2 mb-2 px-1.5 py-0.25 rounded-full ${color}`}
      >
        {tech}
      </span>
      </>
    );
  };
  
  export default TechBadge;
  