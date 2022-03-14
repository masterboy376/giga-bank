import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId:'57wz3yh8',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skTBg44gpvnDZQg8E1ls5ERCe9Jdblwdesd2tBIqsd6YDSOxrNrliHDfinNGt5Ucbmpv2rRr2cnBHZZCk3WUTiPt8wEuPfoG8rgOF52lYC5PCwCIrMY9zkdqYvPpmjr3PIdNwAXiPuCpRmCu0jkwJrLXNoM4xl7Rq38P8siR4YTL6gg0jHZ4',
    useCdn: false,
})