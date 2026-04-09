import { ScrambleText } from "../scrambleText/ScrambleText";
import { ArrowTopRight } from "./buttonIcons";

type SbuttonInnerProps = {
  text: string;
  isHovered?: boolean,
  icon?: boolean
};

export default function SButtonInner ({text = "", isHovered = false, icon = false}: SbuttonInnerProps) {
    return (
        <>
        <ScrambleText text={text} active={isHovered} />
        {icon && <span className="svg icon">
            <ArrowTopRight />
        </span>}
        </>
    );
}