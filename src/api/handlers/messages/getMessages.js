import { db } from "../../../../knex";

export const getMessagesFromDb = (appointmentId) => {
  return db("messages")
    .select("*")
    .where("appointmentId", appointmentId);
}

export const getMessages = (req, res) => {
  const { appointmentId } = req.params;

  return getMessagesFromDb(appointmentId)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(500).send(err));
};
