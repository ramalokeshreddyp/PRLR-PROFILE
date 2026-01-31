import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Terminal } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import CodeHeader from "./CodeHeader";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const subject = encodeURIComponent(data.subject || "Contact from Portfolio");
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    const mailtoLink = `mailto:rlpreddy565@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening Email Client 📧",
      description: "Your default email app should open with the message pre-filled.",
    });
    
    reset();
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "email",
      value: "rlpreddy565@gmail.com",
      href: "mailto:rlpreddy565@gmail.com",
    },
    {
      icon: Phone,
      label: "phone",
      value: "+91 6305958669",
      href: "tel:+916305958669",
    },
    {
      icon: MapPin,
      label: "location",
      value: "India 🇮🇳",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <CodeHeader
            fileName="Contact.tsx"
            title="Get In Touch"
            highlightedWord="Touch"
            subtitle="await sendMessage(recruiter);"
            isInView={isInView}
          />

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Contact Info - Terminal Style */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-4"
            >
              {/* Terminal info card */}
              <div className="rounded-xl overflow-hidden border border-white/10 bg-[hsl(222,47%,8%)]">
                <div className="flex items-center justify-between px-4 py-2 bg-[hsl(222,47%,11%)] border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">contact.sh</span>
                </div>
                <div className="p-4 font-mono text-xs sm:text-sm space-y-3">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                    >
                      <div className="text-muted-foreground/60 mb-1">
                        {"// "}{info.label}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-cyber-purple">const</span>
                        <span className="text-foreground">{info.label}</span>
                        <span className="text-muted-foreground">=</span>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-neon-green hover:underline break-all"
                          >
                            "{info.value}"
                          </a>
                        ) : (
                          <span className="text-neon-green">"{info.value}"</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                  <div className="pt-2 border-t border-white/5">
                    <span className="text-neon-green">→</span>
                    <span className="text-muted-foreground ml-2">Ready to connect!</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form - Terminal Style */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="rounded-xl overflow-hidden border border-white/10 bg-[hsl(222,47%,8%)]">
                <div className="flex items-center justify-between px-4 py-2 bg-[hsl(222,47%,11%)] border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-primary" />
                    <span className="font-mono text-xs text-muted-foreground">send-message.tsx</span>
                  </div>
                  <span className="font-mono text-xs text-neon-green">● unsaved</span>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)} className="p-4 sm:p-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-xs text-muted-foreground/60 mb-1 block">{"// your_name"}</label>
                      <Input
                        {...register("name", { required: "Name is required" })}
                        placeholder="John Doe"
                        className="bg-muted/30 border-white/10 font-mono text-sm focus:border-primary/50"
                      />
                      {errors.name && (
                        <p className="text-destructive text-xs mt-1 font-mono">{"// "}{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="font-mono text-xs text-muted-foreground/60 mb-1 block">{"// your_email"}</label>
                      <Input
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        type="email"
                        placeholder="john@example.com"
                        className="bg-muted/30 border-white/10 font-mono text-sm focus:border-primary/50"
                      />
                      {errors.email && (
                        <p className="text-destructive text-xs mt-1 font-mono">{"// "}{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-xs text-muted-foreground/60 mb-1 block">{"// subject (optional)"}</label>
                    <Input
                      {...register("subject")}
                      placeholder="Let's collaborate!"
                      className="bg-muted/30 border-white/10 font-mono text-sm focus:border-primary/50"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-xs text-muted-foreground/60 mb-1 block">{"// message"}</label>
                    <Textarea
                      {...register("message", { required: "Message is required" })}
                      placeholder="Your message here..."
                      rows={5}
                      className="bg-muted/30 border-white/10 font-mono text-sm resize-none focus:border-primary/50"
                    />
                    {errors.message && (
                      <p className="text-destructive text-xs mt-1 font-mono">{"// "}{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 hover:scale-[1.02] transition-all duration-300 font-mono"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    git push --message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
