import { db } from "../../config";

const fireApi = {
  getServices: async () => {
    const snapshot = await db.collection("services").get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },
  getServiceById: async (id) => {
    const serviceRef = await db.collection("services").doc(id).get();
    return serviceRef.data()
      ? { id: id, ...serviceRef.data() }
      : { error: "Ups! Something went wrong! :(" };
  },
};

export default fireApi;
