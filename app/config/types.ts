
export type MenuItem = { 
  href: string | { pathname: string; hash?: string }; 
  labelKey: `${string}`; 
  key: string; 
  external?: false; 
};

export type PictureSource = {
    srcSet: string; 
    media?: string;      
    type?: string;       
};

export type BaseImage = {
  src: string;        
  width: number;
  height: number;
  alt: string;
};

export type SButtonType = {
  text: string;
  url?: string;
  icon?: boolean;
  className?: string;
  type?: 'button' | 'submit';
  typeLink?: 'normal' | 'link';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export type ExternalClassNameProps = {
  className?: string;
};