export interface ItemDTO {
    id: Number;
    title: string;
    image?: string;
    color: string;
}

export interface ItemResponseDTO {
    message: string;
    content: ItemDTO | null;
}

export interface ItemCreateDTO {
    newTitle: string;
    newImage: string;
    newColor: string;
}