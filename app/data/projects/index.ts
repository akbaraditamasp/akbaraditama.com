import cy_bengkel from "./cy_bengkel";
import guwa from "./guwa";
import laman_js from "./laman_js";
import ngelatalk from "./ngelatalk";
import njin_attend from "./njin_attend";
import njin_convo from "./njin_convo";
import sik from "./sik";

export type ProjectInformation = {
  title: string;
  imgs: string[];
  description: string;
  link: string;
};

export default {
  ngelatalk,
  laman_js,
  njin_attend,
  guwa,
  sik,
  njin_convo,
  cy_bengkel,
} as Record<string, ProjectInformation>;
