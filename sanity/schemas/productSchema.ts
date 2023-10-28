
const productSchema = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Product Name',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'alug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 200
            },
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'price',
            title: 'Product Price',
            type: 'number',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'category' }],
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'discount',
            title: 'Discount',
            type: 'number',
            validation: (Rule: any) => Rule.min(0).max(100).positive()
        },


    ]
}

export default productSchema;