import { BbbService } from './bbb.service';
import { CreateBbbDto } from './dto/create-bbb.dto';
import { UpdateBbbDto } from './dto/update-bbb.dto';
export declare class BbbController {
    private configOptions;
    private readonly bbbService;
    constructor(configOptions: Record<string, any>, bbbService: BbbService);
    create(createBbbDto: CreateBbbDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBbbDto: UpdateBbbDto): string;
    remove(id: string): string;
}
