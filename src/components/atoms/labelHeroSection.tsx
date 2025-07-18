

type LabelHeroSectionProps = {
  title: string,
  subtitle: string,
  button: string
}
const LabelHeroSection = ( props: LabelHeroSectionProps ) => {
  return (

    <div className="relative container mx-auto px-4 md:px-6 lg:px-10 pt-12 text-center text-white ">
      {/* Main Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
        {props.title}
      </h1>
      
      {/* Subtitle */}
      <p className="text-gray-200 mb-8 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
        {props.subtitle}
      </p>
      
      {/* Call to Action Button */}
      <a 
        href="#"
        className="inline-block bg-green-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-green-600 transition-colors duration-200 text-sm md:text-base font-medium"
      >
        {props.button}
      </a>
    </div>
  );
};

export default LabelHeroSection;