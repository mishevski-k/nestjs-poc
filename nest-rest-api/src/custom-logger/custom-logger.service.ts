import { ConsoleLogger, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import path from 'path';

@Injectable()
export class CustomLoggerService extends ConsoleLogger{

    async logToFile(entry){
        const formattedEntry = `${Intl.DateTimeFormat('en-US', {
            dateStyle: 'short',
            timeStyle: 'short',
            timeZone: 'Skopje/Macedonia',
        }).format(new Date())}\t${entry}`;

        try{
            if (!fs.existsSync(path.join(__dirname, '..', '..', 'logs'))){
                await fs.promises.mkdir(path.join(__dirname, '..', '..', 'logs', 'rest.log'), formattedEntry);
            }
            await fs.promises.appendFile(path.join(__dirname, '..', '..', 'logs', 'rest.log'), formattedEntry);
        }catch(e){
            if (e instanceof Error) console.error(e.message);
        }
    }

    log(message: any, context?: string){
        const entry = `${context}\t${message}`;

        super.log(message, context);
    }

    error(message: any, stackOrContext?: string){
        const entry = `${stackOrContext}\t${message}`;

        super.error(message, stackOrContext);
    }
}
