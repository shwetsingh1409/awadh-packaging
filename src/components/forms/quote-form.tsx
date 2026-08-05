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
import { products } from "@/lib/products";

const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(8, "Enter a valid phone number"),
  companyName: z.string().min(2, "Enter company name"),
  product: z.string().min(1, "Select a product"),
  quantity: z.string().min(1, "Enter approximate quantity"),
  dimensions: z.string().optional(),
  message: z.string().min(10, "Please describe your requirements"),
});

type QuoteValues = z.infer<typeof quoteSchema>;

export function QuoteForm({ defaultProduct }: { defaultProduct?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      product: defaultProduct || "",
    },
  });

  const onSubmit = async (data: QuoteValues) => {
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
            company: data.companyName,
            product: data.product,
            quantity: data.quantity,
            dimensions: data.dimensions || "N/A",
            message: data.message,
            form_type: "Quote Request",
          },
          publicKey
        );
      } else {
        const subject = encodeURIComponent(`Quote Request — ${data.product}`);
        const body = encodeURIComponent(
          `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nCompany: ${data.companyName}\nProduct: ${data.product}\nQuantity: ${data.quantity}\nDimensions: ${data.dimensions || "N/A"}\n\nRequirements:\n${data.message}`
        );
        window.open(
          `mailto:${company.email}?subject=${subject}&body=${body}`,
          "_self"
        );
      }
      setStatus("success");
      reset({ product: defaultProduct || "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="q-name">Full Name *</Label>
          <Input id="q-name" {...register("name")} />
          {errors.name ? (
            <p className="text-xs text-red-600">{errors.name.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="q-company">Company *</Label>
          <Input id="q-company" {...register("companyName")} />
          {errors.companyName ? (
            <p className="text-xs text-red-600">{errors.companyName.message}</p>
          ) : null}
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="q-email">Email *</Label>
          <Input id="q-email" type="email" {...register("email")} />
          {errors.email ? (
            <p className="text-xs text-red-600">{errors.email.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="q-phone">Phone *</Label>
          <Input id="q-phone" {...register("phone")} />
          {errors.phone ? (
            <p className="text-xs text-red-600">{errors.phone.message}</p>
          ) : null}
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="q-product">Product *</Label>
          <select
            id="q-product"
            className="flex h-11 w-full rounded-sm border border-grey-200 bg-white px-3 text-sm text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            {...register("product")}
          >
            <option value="">Select product</option>
            {products.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
          {errors.product ? (
            <p className="text-xs text-red-600">{errors.product.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="q-qty">Approx. Quantity *</Label>
          <Input id="q-qty" placeholder="e.g. 5,000 pcs / month" {...register("quantity")} />
          {errors.quantity ? (
            <p className="text-xs text-red-600">{errors.quantity.message}</p>
          ) : null}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="q-dims">Dimensions (L × W × H)</Label>
        <Input id="q-dims" placeholder="e.g. 300 × 200 × 150 mm" {...register("dimensions")} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="q-message">Requirements *</Label>
        <Textarea
          id="q-message"
          rows={5}
          placeholder="Ply type, printing, load requirements, delivery location…"
          {...register("message")}
        />
        {errors.message ? (
          <p className="text-xs text-red-600">{errors.message.message}</p>
        ) : null}
      </div>
      <Button type="submit" variant="gold" size="lg" disabled={status === "loading"}>
        {status === "loading" ? "Submitting…" : "Submit Quote Request"}
      </Button>
      {status === "success" ? (
        <p className="text-sm text-green-700" role="status">
          Quote request received. Our team will contact you shortly.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-600" role="alert">
          Unable to send. Please WhatsApp or email {company.email}.
        </p>
      ) : null}
    </form>
  );
}
