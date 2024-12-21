import type { CollectionConfig } from 'payload';
import slugify from 'slugify';
export const Posts: CollectionConfig = {
    slug: 'posts', // Tên collection
    admin: {
        useAsTitle: 'title', // Field to display as the title in the admin panel
    },
    access: {
        read: () => true
    },
    labels: {
        singular: 'Bài đăng',
        plural: 'Bài đăng',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            label: 'Tiêu đề',
        },
        {
            name: 'slug',
            type: 'text',
            label: 'Slug',
        },
        {
            name: 'author',
            type: 'relationship',
            relationTo: 'users',
            label: 'Tác giả',
        },
        {
            name: 'content',
            type: 'richText',
            required: true,
            label: 'Nội dung',
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media', // Yêu cầu tạo collection 'media' để upload ảnh
            required: true,
            label: 'Hình Ảnh',
        },
    ],
    hooks: {
        beforeChange: [
            async ({ data }) => {
                if (data.title) {
                    // Sử dụng slugify để chuyển đổi tiêu đề thành slug
                    data.slug = slugify(data.title, {
                        lower: true, // Chuyển thành chữ thường
                        locale: 'vi', // Hỗ trợ tiếng Việt
                        remove: /[*+~.()'"!:@]/g, // Loại bỏ ký tự đặc biệt
                    });
                }
            },
        ],
    },
};
