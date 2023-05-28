import { Injectable } from '@nestjs/common';
import { Item } from "./schemas/item.schema";
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';
import { createItemDto } from './create-item.dto';



@Injectable()
export class ItemsService {
       constructor(@InjectModel("Item") private ItemModel: Model<Item>) {}
     
      async findAll():Promise<Item[]>{
            return await this.ItemModel.find()
      }
      async findOne(id) {
            return  await this.ItemModel.findById(id)
      }
      async deleteOne(id) {
            return await this.ItemModel.findByIdAndDelete(id)
      }
      async createOne(createItemDto:createItemDto) {
            return await this.ItemModel.create(createItemDto)
      }

      async updateOne(createItemDto: createItemDto, id: String) {
            return await this.ItemModel.findByIdAndUpdate(id,{...createItemDto},{new:true})
            
      }
}
