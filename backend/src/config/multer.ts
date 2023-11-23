import crypto from 'crypto'
import multer from 'multer'
import { extname, resolve } from 'path'
//dizer quais são os caminhos, como váriaveis de ambiente = destination

export default{
    upload(folder: string){//sem precisar de interface, estou definindo direto o comportamento do valor sendo ele folder no caso.
        return{  //o storage vem da biblioteca do multer
            storage: multer.diskStorage({//o diskStorage retorna uma área local, um caminho local, implementação no sistema de arquivos
                destination: resolve(__dirname, '..', '..', folder),//
                filename: (request, file, callback) => {
                    const fileHash = crypto.randomBytes(16).toString('hex')
                    const fileName = `${fileHash}-${file.originalname}`//quantidade X de caractéres, sendo o código embaralhado = fileHash
                    //file possui um valor que é o nome.
                    return callback(null, fileName)//null é porque não retorna erro! fileName está chamando a constante criada no filename = FileName
                }
            })
        }
    }
}