import { createConnection } from 'typeorm'

createConnection()
  .then( () => console.log( '🌸 Conectado com sucesso' ) )
  .catch( error => console.error( error ) )
