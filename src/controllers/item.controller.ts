import { searchItem, createNewItem } from "../services/item.services";
import { Body, Get, Post, Route, Path, Controller, SuccessResponse } from "tsoa";
import { ItemCreateDTO, ItemDTO, ItemResponseDTO } from "../dtos/ItemDTO";

@Route('api/items')
export class ItemController extends Controller {
    @Get('{itemName}')
    @SuccessResponse('200', 'Item Read Succesfully')
    public async getItemByName(
        @Path() itemName: string,
    ): Promise<ItemResponseDTO> {
        const read = await searchItem(itemName);
        if(!read) {
            this.setStatus(404);
            return {message: 'Item Not Found', content: null}
        }
        return {
            message: 'Item Read Succesfully',
            content: {
                id: read.id,
                title: read.title,
                color: read.color,
            }
        }   
    }
}