import { Request, Response } from "express";

export default class RecordingController {

  async take(req: Request, res: Response) {

    /*const { name, age, city } = req.body;

    if (!name || !age || !city) {
      res.status(400).send({
        message: "Missing data",
      });
      return;
    }

    try {
      const person:Person = req.body;
      const { publicKey, privateKey } = await CryptoHelper.getKeyPair();
      runService.save(person, publicKey);
      res.status(201).json({privateKey});
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred in create runner: ${err}`,
      });
    }*/
  }
  
  async getTakeStatus(req: Request, res: Response) {

    /*const takeId = req.params.takeId;

    try {
      const runScore:RunScore = JSON.parse(RunController.base64_decode(data).toString());
      signature = RunController.base64_decode(signature);
      const runner = await RunController.fetchValidatedRunner(runScore.name, data, signature);
      if (runner) {
          const affectedRows = await runService.update(runner.id, runScore.distance);
          if (affectedRows == 1) {
            return res.status(200).json({totalDistanceRun: (runner.total_distance_run + runScore.distance)});
          }
      }
      console.log( 'Signature verification failed');
      return res.status(200).json({totalDistanceRun: -1});

    } catch (err) {
      res.status(500).send({
        message: `Error updating runner score ${err}`,
      });
    }*/
  }

  async createRecording(req: Request, res: Response) {

    const { name, age, city } = req.body;
  }

  async updateRecording(req: Request, res: Response) {

    const { name, age, city } = req.body;
  }

  async getRecording(req: Request, res: Response) {

    const recordingId = req.params.recordingId;
  }
}
