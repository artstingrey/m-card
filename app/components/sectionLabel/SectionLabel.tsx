import clsx from 'clsx';

type SectionLabelType = {
    color: "black" | "white"
};

export default function SectionLabel () {
    return (
        <div className={clsx("section-label")}>
            <div>
                <span className="text-label text-label--black">Как это работает</span>
            </div>
        </div>
    );
}