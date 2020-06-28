import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

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

}

export default User
