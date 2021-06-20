export interface Comment {
    user_id: number;
    post_id: number;
    firstname: string;
    lastname: string;
    profile_image_src: string;
    content: string;
    image_src: string;
    created_at: string;
}

export interface Publication {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    profile_image_src: string;
    content: string;
    img_src: string;
    referenced_post_id: number;
    post_type: string;
    like_counter: number;
    created_at: string;
    liked_by_user: number;
    referenced_post: Publication;
}