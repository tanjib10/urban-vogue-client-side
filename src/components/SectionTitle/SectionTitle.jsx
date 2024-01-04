/* eslint-disable react/prop-types */
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center">
      <p>{subHeading}</p>
      <h3 className="border-y-4 text-xl lg:text-3xl font-bold py-4 mt-8 mb-10 w-3/12 mx-auto">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
