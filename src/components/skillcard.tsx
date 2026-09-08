

function SkillCard({ skill}: { skill: string; }) {
    return (
        <div className="w-33 h-40 md:h-50 md:w-40 rounded-lg p-3 md:p-4 flex flex-col justify-center items-center hover:animate-bouncing cursor-pointer border border-(--div-background-color) transition-all duration-300">
            <h2 className="text-lg md:text-xl font-bold mb-2 text-center wrap-break-word w-full ">{skill}</h2>
            <img src={`icon/${skill === 'C#' ? 'Csharp' : skill}.svg`} alt={`logo ${skill}`} className="h-16 w-16 md:h-10 md:w-20" />
        </div>
    );
}

export default SkillCard;
