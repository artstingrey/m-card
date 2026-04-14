import clsx from 'clsx';

type SectionLabelType = {
    text: string;
    color?: "black" | "white";
    style?: string;
    align?: "left" | "center";
    decorPos?: "top" | "";
};

export default function SectionLabel ({text, color, style, align, decorPos = ""}:SectionLabelType) {
    return (
        <div className={clsx("section-label", color == 'white' ? "section-label--white" : "", align == "left" ? "section-label--left" : "", style)}>
            <div>
                {decorPos == "top" && (<div className="text-label-decoration"></div>)}
                <div className="text-label">{text}</div>
                {decorPos == "" && (<div className="text-label-decoration"></div>)}
            </div>
        </div>
    );
}