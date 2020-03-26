export interface User {
    id: string;
    name: string;
    photos: Array<string>,
    search_history: Array<History>;
    created_on: string;
    request_photos: boolean;
    created_at: Date;
    updated_at: Date;
  }

export interface History {
    place: string;
    option: string;
    result: string;
    created_at: Date;
    updated_at: Date;
}