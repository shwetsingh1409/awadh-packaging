"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { company } from "@/lib/company";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(8, "Enter a valid phone number"),
  companyName: z.string().optional(),
  message: z.string().min(10, "Please share a short message"),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactValues) => {
    setStatus("loading");
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: data.name,
            from_email: data.email,
            phone: data.phone,
            company: data.companyName || "N/A",
            message: data.message,
            form_type: "Contact Form",
          },
          publicKey
        );
      } else {
        const subject = encodeURIComponent(`Enquiry from ${data.name}`);
        const body = encodeURIComponent(
          `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nCompany: ${data.companyName || "N/A"}\n\nMessage:\n${data.message}`
        );
        window.open(
          `mailto:${company.email}?subject=${subject}&body=${body}`,
          "_self"
        );
      }
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" autoComplete="name" {...register("name")} />
          {errors.name ? (
            <p className="text-xs text-red-600">{errors.name.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
          />
          {errors.email ? (
            <p className="text-xs text-red-600">{errors.email.message}</p>
          ) : null}
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input id="phone" autoComplete="tel" {...register("phone")} />
          {errors.phone ? (
            <p className="text-xs text-red-600">{errors.phone.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="companyName">Company</Label>
          <Input id="companyName" {...register("companyName")} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea id="message" rows={5} {...register("message")} />
        {errors.message ? (
          <p className="text-xs text-red-600">{errors.message.message}</p>
        ) : null}
      </div>
      <Button type="submit" variant="gold" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send Message"}
      </Button>
      {status === "success" ? (
        <p className="text-sm text-green-700" role="status">
          Thank you. Your enquiry has been submitted.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-600" role="alert">
          Something went wrong. Please email {company.email} or call us.
        </p>
      ) : null}
    </form>
  );
}
