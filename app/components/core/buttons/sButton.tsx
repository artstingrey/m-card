import { SButtonType } from "@/app/config/types";
import SButtonBase from "./sButtonBase";


export default function SButton (props: SButtonType) {
    return <SButtonBase {...props} />;
}