import { GlobalConfig } from 'payload';

export const PostRecommend: GlobalConfig = {
    slug: 'post-recommend',
    label: 'Giới thiệu bài đăng',
    access: {
        read: () => true
    },
    fields: [
        {
            name: 'post_1',
            type: 'relationship',
            relationTo: 'posts',
            label: 'Bài đăng 1'
        },
        {
            name: 'except_1',
            type: 'text',
            label: 'Trích văn 1'
        },
        {
            name: 'post_2',
            type: 'relationship',
            relationTo: 'posts',
            label: 'Bài đăng 2'
        },
        {
            name: 'except_2',
            type: 'text',
            label: 'Trích văn 2'
        },
        {
            name: 'post_3',
            type: 'relationship',
            relationTo: 'posts',
            label: 'Bài đăng 3'
        },
        {
            name: 'except_3',
            type: 'text',
            label: 'Trích văn 2'
        },
    ],
};

export default PostRecommend;
