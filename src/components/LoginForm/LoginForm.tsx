"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { GeneralButton } from "@/components/UI/GeneralButton";
import { Card, CardTitle, CardContent } from "@/components/UI/GeneralCard";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/UI/GeneralForm";
import { Input } from "@/components/UI/GeneralInput";
import { login } from "@/app/lib/login";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "This field is required.",
    })
    .email({ message: "It should be valid email." }),
  password: z
    .string()
    .min(1, {
      message: "This field is required.",
    })
});

export const LoginForm = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    const result = login(values);
    console.log(result);
  };

  return (
    <Card size="authForm">
      <CardTitle>Sign up form</CardTitle>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col items-center space-y-1 text-black"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <GeneralButton type="submit">Submit</GeneralButton>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
