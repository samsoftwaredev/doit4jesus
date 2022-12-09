import express, { Request, Response } from 'express';
// import cors from 'cors';
import ffmpeg from 'fluent-ffmpeg';
import { promises as fsPromises } from 'fs';
import { basename, join } from 'path';

const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffprobePath = require('@ffprobe-installer/ffprobe').path;

const FOLDERS = {
  input: './src/assets/input',
  output: './src/assets/output',
  temp: './src/assets/temp',
};

ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);

const mergeAudioFiles = async (prePath: string, inputPath: string) => {
  return new Promise<void>((resolve, reject) => {
    const inputName = basename(inputPath);

    ffmpeg(prePath)
      .input(inputPath)
      .on('error', function (err) {
        console.log('Starting merge for: ' + inputName);
        console.log('An error occurred: ' + err.message);
        reject();
      })
      .on('end', function () {
        console.log(inputName, ' Merging finished !');
        resolve();
      })
      .mergeToFile(join(FOLDERS.output, inputName), <any>FOLDERS.temp);
  });
};

const mergeAll = async () => {
  try {
    const inputFiles = await fsPromises.readdir(FOLDERS.input);
    if (!Array.isArray(inputFiles) || inputFiles.length === 0) {
      throw new Error('No files in the INPUT folder');
    }
    for (const i of inputFiles) {
      const iPath = join(FOLDERS.input, i);
      const stat = await fsPromises.stat(iPath);
      if (!stat.isDirectory()) {
        return await mergeAudioFiles(iPath, iPath);
      }
    }
  } catch (e) {
    console.error(e);
  }
};

class Server {
  private server: any;
  private app = express.application;

  constructor() {
    this.app = express();

    this.preMiddleware();
    this.routes();
    this.postMiddleware();
  }

  getApp = () => this.app;

  routes = () => {
    // this.app.use(
    //   '/api/household/',
    //   requiresAuth(),
    //   this.householdController.router,
    // );
    this.app.get('/rosary', async (req: Request, res: Response) => {
      // send rosary to the front-end
    });

    this.app.get('/', async (req: Request, res: Response) => {
      await mergeAll();
      res.send('ok');
    });
  };

  preMiddleware = () => {
    this.app.use(express.json());
    // this.app.use(cors());
  };

  postMiddleware = () => {
    // NOTE: errorHandlerMiddleware must execute after the routes method
  };

  stop = () => {
    this.server.close();
  };

  start = async (port?: number) => {
    const PORT = port || process.env.APP_PORT || process.env.PORT;
    this.server = this.app.listen(PORT, () => {
      console.log('Server listening at port: ' + PORT);
    });
  };
}

export default Server;
