//User type
export type User = {
    name?: string;
    token: string;
    age: number;
};

//User state store
export type UserState = {
    user: User;
};

export type ResponseData = {
    err_code: number;
    err_msg: string;
    data: any;
};

export type ArticleInfo = {
    content: string;
    id: number;
    sort: number;
    title: string;
    created_at: string;
    updated_at: string;
};

export type ArticleData = {
    list: ArticleInfo[];
    total: number;
};

export type HomeData = {
    articleData: ArticleData[];
};

export type UserInfo = {
    access_token: string;
};


export type LoginData = {
    address_type: string
    wallet_address: string;
}