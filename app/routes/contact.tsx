import type { MetaFunction } from "@remix-run/node";
import { MdAdd, MdAlternateEmail, MdEmail, MdPerson } from "react-icons/md";
import { PiEnvelopeDuotone, PiPhoneCallDuotone } from "react-icons/pi";
import { PageInfo } from "~/components/layout";
import TextField from "~/components/text_field";
import TextareaField from "~/components/textarea_field";

export const meta: MetaFunction = () => {
  return [{ title: "Kontak" }];
};

export const loader = async () => {
  return {
    pageInfo: {
      pageTitle: "Kontak",
    } as PageInfo,
  };
};

export default function Contact() {
  return (
    <div className="relative block lg:flex justify-start items-start space-y-16 lg:space-y-0 space-x-0 lg:space-x-16">
      <div className="w-full lg:w-2/5">
        <h1 className="head-decor !font-black !text-xl">Informasi Kontak</h1>
        <div className="flex flex-col justify-start space-y-5 mt-8">
          <div className="bg-white dark:bg-slate-800 rounded flex-1 flex justify-start items-center p-5 space-x-5">
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-950 flex-shrink-0 text-4xl text-blue-600 dark:text-blue-300">
              <PiEnvelopeDuotone />
            </div>
            <div className="flex-1">
              <h2 className="font-ubuntu uppercase tracking-widest text-sm">
                E-mail
              </h2>
              <div className="text-gray-800 dark:text-white text-lg font-bold">
                halo@akbaraditama.com
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded flex-1 flex justify-start items-center p-5 space-x-5">
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-950 flex-shrink-0 text-4xl text-blue-600 dark:text-blue-300">
              <PiPhoneCallDuotone />
            </div>
            <div className="flex-1">
              <h2 className="font-ubuntu uppercase tracking-widest text-sm">
                No. HP / Whatsapp
              </h2>
              <div className="text-gray-800 dark:text-white text-lg font-bold">
                +62812-7176-2774
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h2 className="head-decor !font-black !text-xl">Hubungi Saya</h2>
        <div className="mt-8 bg-white dark:bg-slate-800 p-8 rounded">
          <TextField
            type="text"
            placeholder="Nama"
            icon={MdPerson}
            className="mb-5"
          />
          <TextField
            type="email"
            placeholder="Email"
            icon={MdAlternateEmail}
            className="mb-5"
          />
          <TextareaField
            placeholder="Tulis pesan..."
            icon={MdEmail}
            className="mb-8"
            rows={5}
          />
          <button
            type="submit"
            className="py-3 px-8 uppercase font-medium font-ubuntu tracking-widest text-sm bg-blue-500 rounded text-white"
          >
            Kirim Pesan
          </button>
        </div>
      </div>
    </div>
  );
}
