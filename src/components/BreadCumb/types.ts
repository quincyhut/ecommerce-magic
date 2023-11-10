
export interface Links {
    title: string;
    href: string
}

export interface ProductBreadCrumb {
    links: Links[],
    handleSorting: () => void;
}