import { CreateBbbDto } from './dto/create-bbb.dto';
import { UpdateBbbDto } from './dto/update-bbb.dto';
import { AaaService } from 'src/aaa/aaa.service';
export declare class BbbService {
    private readonly aaaService;
    constructor(aaaService: AaaService);
    create(createBbbDto: CreateBbbDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBbbDto: UpdateBbbDto): string;
    remove(id: number): string;
}
