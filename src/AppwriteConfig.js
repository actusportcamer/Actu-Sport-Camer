import { Client, Account, Databases} from 'appwrite'

const client = new Client()

client.setProject('683781fe000125082f6d')
export const account = new Account(client)
export const databases = new Databases(client)