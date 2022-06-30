import { PartialType } from '@nestjs/mapped-types';
import { CreateListOfWalletDto } from './create-list-of-wallet.dto';

export class UpdateListOfWalletDto extends PartialType(CreateListOfWalletDto) {}
