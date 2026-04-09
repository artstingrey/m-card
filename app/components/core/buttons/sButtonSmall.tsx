import { SButtonType } from "@/app/config/types";
import SButtonBase from "./sButtonBase";

export default function SButtonSmall (props: SButtonType) {
    return <SButtonBase {...props} sizeClass="s-button--small" />;
}