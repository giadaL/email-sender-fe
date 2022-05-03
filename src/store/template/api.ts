import { BASE_URL } from "~/constants";
import { TTemplates } from "./index_d";

const load =
  (client) =>
  async (): Promise<TTemplates[]> => {
    // const res = client.GET(`${BASE_URL}/templates`);
    const res = null;
    return res || [{
      id:"uuid",
      subject:"template subject",
      attachments:[],
      filename:"TEmplate1.html"
    }];
  };

export default {load};
