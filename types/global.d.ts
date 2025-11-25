/// <reference types="react" />

declare module '@heroicons/react/24/outline' {
  import React from 'react';
  export const Bars3Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const XMarkIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const EnvelopeIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const MapPinIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const ShoppingCartIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const TrashIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const MinusIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>>;
}

declare module '@heroicons/react/24/solid' {
  import React from 'react';
  export const FireIcon: React.FC<React.SVGProps<SVGSVGElement>>;
}

declare module 'next/link' {
  import React from 'react';
  interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    prefetch?: boolean;
    locale?: string | false;
  }
  const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;
  export default Link;
}

declare module 'next' {
  export interface Metadata {
    title?: string;
    description?: string;
    keywords?: string;
  }
}
