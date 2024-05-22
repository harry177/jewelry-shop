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
import { register } from "@/app/lib/actions";

const formSchema = z
  .object({
    username: z
      .string({ required_error: "This field is required." })
      .min(1, {
        message: "This field is required.",
      })
      .min(4, {
        message: "Username must be at least 4 characters.",
      }),
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
      .min(4, {
        message: "Password must be at least 4 characters.",
      }),
    confirmPassword: z.string().min(1, {
      message: "This field is required.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const SignUpForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    register(values);
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
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm password</FormLabel>
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
