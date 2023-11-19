
export interface Links {
    title: string;
    href: string
}

export interface ProductBreadCrumb {
    links: Links[],
    hideSorting?: boolean,
    handleSorting: () => void;
}