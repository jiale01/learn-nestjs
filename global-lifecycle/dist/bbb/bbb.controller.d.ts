import { BbbService } from './bbb.service';
import { CreateBbbDto } from './dto/create-bbb.dto';
import { UpdateBbbDto } from './dto/update-bbb.dto';
import { AaaService } from 'src/aaa/aaa.service';
export declare class BbbController {
    private readonly bbbService;
    private readonly aaaService;
    constructor(bbbService: BbbService, aaaService: AaaService);
    create(createBbbDto: CreateBbbDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBbbDto: UpdateBbbDto): string;
    remove(id: string): string;
}
