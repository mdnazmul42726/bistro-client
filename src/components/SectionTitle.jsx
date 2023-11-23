
const SectionTitle = ({ heading, subheading }) => {
    return (
        <div className="w-full md:w-4/12 mx-auto text-center mt-10 md:mt-20 lg:mt-36 mb-4">
            <p className="text-xl hidden text-center text-orange-500 font-mono">-- {subheading} --</p>
            <h2 className="text-3xl uppercase border-y-4 p-3 mt-3">{heading}</h2>
        </div>
    );
};

export default SectionTitle;