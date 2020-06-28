import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm'
import bcrypt from 'bcryptjs'

@Entity( 'users' )
class User {

  @PrimaryGeneratedColumn( 'uuid' )
  public id: string
  @Column()
  public name: string
  @Column()
  public email: string
  @Column()
  public password: string

  @BeforeInsert()
  @BeforeUpdate()
  public async hashPassword() {
    this.password = await bcrypt.hash( this.password, 8 )
  }

}

export default User
