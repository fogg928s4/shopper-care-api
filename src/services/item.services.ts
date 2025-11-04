import { ItemCreateDTO, ItemDTO, ItemResponseDTO } from "../dtos/ItemDTO";
import { prisma } from '../config/db.config';

export const searchItem = async( itemName: string ) => {
    return await prisma.item.findFirst({ where: {title: itemName}});
};

export const createNewItem = async( itemInfo: ItemCreateDTO ): Promise<ItemDTO> => {
    const newItem = await prisma.item.create( {data: {
        title: itemInfo.newTitle,
        image: itemInfo.newImage,
        color: itemInfo.newColor,
    }});
    return {
        id: newItem.id,
        title: newItem.title,
        image: newItem.image,
        color: newItem.color,
    };
};
