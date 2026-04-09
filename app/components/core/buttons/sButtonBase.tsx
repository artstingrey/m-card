'use client';

import clsx from "clsx";
import { useState } from "react";
import Link from "next/link";
import SButtonInner from "./sButtonInner";
import { SButtonType } from "@/app/config/types"


type BaseProps = SButtonType & {
  sizeClass?: string;
};

export default function SButtonBase ({text = '', url = '', icon = false, sizeClass = '', className = '', type = 'button', typeLink = 'normal', onClick, disabled = false}:BaseProps) {
    
    const [isHovered, setIsHovered] = useState(false);
    
    const classes = clsx(
        's-button',
        sizeClass,
        className,
        icon && 's-button--icon'
    );

    const commonProps = {
        className: classes,
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
    };

    const buttonProps = {onClick, ...commonProps};

    if (url && typeLink === 'normal') {
        return (
            <a href={url} {...commonProps} target="_blank" rel="noopener noreferrer">
                <SButtonInner text={text} icon={icon} isHovered={isHovered} />
            </a>
        );
    } 

    if (url && typeLink === 'link') {
        return (
            <Link href={url} {...commonProps}>
                <SButtonInner text={text} icon={icon} isHovered={isHovered} />
            </Link>
        );
    }

    return (
        <button type={type} disabled={disabled} aria-disabled={disabled ? true : undefined} {...buttonProps}>
            <SButtonInner text={text} icon={icon} isHovered={isHovered} />
        </button>
    );
}