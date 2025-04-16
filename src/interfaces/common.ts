/**
 * Logo interface
 */
export interface Logo {
    img: string;
    name: string;
}

/**
 * Menu interface
 */
export interface Menu {
    href: string;
    name: string;
    style?: string;
    click?: (name: string) => void;
}

/**
 * 
 */
export interface Major {
    icon: string;
    title: string; 
    subjects: string;
}


export interface Job {
    img: string;
    alt: string;
    name: string;
    period: string;
}


export interface Code {
    title: string;
    percent: number;
}

export interface Category {
        name: string;
        count: number
    }
    

    export interface Projects {
        img: string;
        alt: string;
        title: string;
        description: string;
    }

    export interface Testimonial {
        img: string;
        alt: string;
        description: string;
        name: string;
        company: string;
    }