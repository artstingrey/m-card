import clsx from "clsx";
import { ExternalClassNameProps } from "@/app/config/types";

type Props = ExternalClassNameProps & {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function SButtonClose ({className = "", onClick}:Props) {

    return (
        <button className={clsx("s-button-close", className)} onClick={onClick}>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                <path d="M2.12109 14.1211L14.1211 2.12109" stroke="white" strokeWidth="3" strokeLinecap="square" strokeLinejoin="round"/>
                <path d="M14.1211 14.1211L2.12109 2.12109" stroke="white" strokeWidth="3" strokeLinecap="square" strokeLinejoin="round"/>
                </g>
            </svg>
        </button>
    );
}