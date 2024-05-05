import { FC } from 'react';

interface IRoadmapProps {
    steps: string[];
}

const Roadmap: FC<IRoadmapProps> = ({ steps }) => {
    return (
        <ol className="relative border-s list-none">
            {steps.map((step) => (
                <li key={step} className="mb-10 ms-4 relative">
                    <div className="absolute -left-[22px] top-[6px] min-w-2.5 min-h-2.5 bg-white rounded-full border-2 border-sky-500"></div>
                    <p className="text-black/opacity-90 text-sm font-normal leading-snug">{step}</p>
                </li>
            ))}
        </ol>
    );
};

export default Roadmap;
