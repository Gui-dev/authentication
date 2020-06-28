import { Entity, PrimaryGeneratedColumn, Column,
  BeforeInsert, BeforeUpdate, AfterInsert
} from 'typeorm'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

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

  @AfterInsert()
  public async comparePassword( password: string ) {
    return await bcrypt.compare( password, this.password )
  }

  @AfterInsert()
  public generateToken( id: string ) {
    return jwt.sign( { id }, 'authsecret', {
      expiresIn: '7d'
    } )
  }

}

export default User
