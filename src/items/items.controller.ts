import { Controller, Get, Post, Put, Delete,Body,Req,Res,Param } from '@nestjs/common';
import { createItemDto } from './create-item.dto';
import { Request, Response } from 'express';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
      constructor(private readonly itemService:ItemsService){}
      // @Get()
      // findAll(@Req() req :Request,@Res() res :Response): Response {
      //       return res.send("hello world");
      // }
        @Get()
      async findAll() {
            return  await this.itemService.findAll();
      }
      @Post()
      create(@Body() createItemDto:createItemDto) {
            return this.itemService.createOne(createItemDto);
      }

      @Get(':id')
      async findOne(@Param("id") id) {
            return  await this.itemService.findOne(id)
            
      }

      @Delete(":id")
      deleteOne(@Param("id") id) {
            return this.itemService.deleteOne(id)

            
      }
      @Put(':id')
      updateOne(@Param("id") id, @Body() updateItemDto: createItemDto) {
            return this.itemService.updateOne(updateItemDto,id)
            
            
      }



}
