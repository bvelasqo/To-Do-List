import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import client from "../shared/db/postgres";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date
}

@Entity()
export class UserModel implements User{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  createdAt: Date;
}

export const userRepository = client.getRepository(UserModel);