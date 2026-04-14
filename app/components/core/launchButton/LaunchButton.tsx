import clsx from "clsx";

type LaunchButtonType = {
    text: string;
    styles?: string;
    typeButton?: "full" | "";
};

export default function LaunchButton ({text, styles, typeButton = ""}:LaunchButtonType) {
    return (
        <div className={clsx(styles, "s-button-launch-wrapper")}>
            <a href="#" className={clsx("s-button", typeButton == "full" ? "s-button--full" : "")}>{text}</a>
            <button className="qr-button">
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_263_49" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="35">
                    <rect width="35" height="35" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_263_49)">
                    <path d="M5.10352 16.0416V5.10413H16.041V16.0416H5.10352ZM7.29102 13.8541H13.8535V7.29163H7.29102V13.8541ZM5.10352 29.8958V18.9583H16.041V29.8958H5.10352ZM7.29102 27.7083H13.8535V21.1458H7.29102V27.7083ZM18.9577 16.0416V5.10413H29.8952V16.0416H18.9577ZM21.1452 13.8541H27.7077V7.29163H21.1452V13.8541ZM27.1608 29.8958V27.1614H29.8952V29.8958H27.1608ZM18.9577 21.6927V18.9583H21.6921V21.6927H18.9577ZM21.6921 24.427V21.6927H24.4264V24.427H21.6921ZM18.9577 27.1614V24.427H21.6921V27.1614H18.9577ZM21.6921 29.8958V27.1614H24.4264V29.8958H21.6921ZM24.4264 27.1614V24.427H27.1608V27.1614H24.4264ZM24.4264 21.6927V18.9583H27.1608V21.6927H24.4264ZM27.1608 24.427V21.6927H29.8952V24.427H27.1608Z" fill="black"/>
                    </g>
                </svg>
            </button>
        </div>
    );
}