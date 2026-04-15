import clsx from 'clsx';

type SectionLabelType = {
    text: string;
    color?: "black" | "white";
    style?: string;
    align?: "left" | "center";
    decorPos?: "top" | "";
    decor?: boolean;
};

export default function SectionLabel ({text, color, style, align, decorPos = "", decor = true}:SectionLabelType) {
    return (
        <div className={clsx("section-label", color == 'white' ? "section-label--white" : "", align == "left" ? "section-label--left" : "", style)}>
            <div>
                {decor && decorPos == "top" && (<div className="text-label-decoration"></div>)}
                <div className="text-label">{text}</div>
                {decor && decorPos == "" && (<div className="text-label-decoration"></div>)}
            </div>
        </div>
    );
}