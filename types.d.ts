type MetaBlog = {
    id: string, 
    title: string,
    date: string,
    tags: string[],
}

type BlogPost = {
    meta: MetaBlog,
    content: ReactElement<any, string | JSXElementConstructor<any>>
}