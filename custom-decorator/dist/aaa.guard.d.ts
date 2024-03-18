import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class AaaGuard implements CanActivate {
    private reflector;
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
