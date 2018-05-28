import { getAllWords, getWordById } from "./controllers/words.controller";

function router(app) {
  app.route("/words").get(getAllWords);

  app.route("/words/:id").get(getWordById);
}

export default router;
