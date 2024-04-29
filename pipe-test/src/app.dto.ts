import {
  Contains,
  IsDate,
  IsEmail,
  IsFQDN,
  IsInt,
  Length,
  Max,
  Min,
} from 'class-validator';

export class Ooo {
  name: string;
  @IsInt()
  age: number;
  sex: boolean;
  hobbies: string[];
}

export class Ppp {
  @Length(10, 20, {
    message(arg) {
      console.log('arg', arg);
      return 'xxx';
    },
  })
  title: string;

  @Contains('hello')
  text: string;

  @IsInt()
  @Min(0)
  @Max(10)
  rating: number;

  @IsEmail()
  email: string;

  @IsFQDN()
  site: string;
}
