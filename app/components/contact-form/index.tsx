/* eslint-disable no-empty-pattern */
/* eslint-disable prettier/prettier */
"use client";
import { useForm } from "react-hook-form";
import React from "react";
import SectionTitle from "../section-title";
import { HiArrowNarrowRight } from "react-icons/hi";
import Button from "../button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "@/app/lib/animation";

const ContactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(100),
});

type ContactFormData = z.infer<typeof ContactFormSchema>;

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post("/api/contact", data);
      reset();
      toast.success("mensagem enviada com sucesso!");
    } catch (err) {
      alert(err);
      toast.error("Houve um erro ao enviar a mensagem!");
    }
  };
  return (
    <section
      id="contact"
      className="py-16 px-6 md:py-34 flex items-center justify-center bg-gray-950 "
    >
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em contato."
          className="items-center text-center "
        />
        <motion.form
          {...fadeUpAnimation}
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 w-full flex flex-col gap-4"
        >
          <input
            {...register("name")}
            type="text"
            placeholder="Nome"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
          />
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
          />

          <textarea
            {...register("message")}
            placeholder="Mensagem"
            className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
            maxLength={500}
          />
          <Button
            disabled={isSubmitting}
            className="mt-6  w-max mx-auto shadow-button"
          >
            Enviar Mensagem <HiArrowNarrowRight />
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
