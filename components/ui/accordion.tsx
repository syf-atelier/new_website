import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";
import Flecha_abajo from "@/assets/Flecha_abajo.svg";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("relative", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 lg:pr-10 flex flex-1 items-start justify-between gap-4 rounded-md py-4 lg:py-1 text-left text-sm lg:text-lg font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <img
          src={Flecha_abajo}
          alt="Flecha abajo"
          className="pointer-events-none sm:mb-[px] h-[10px] w-[20px] sm:relative shrink-0 lg:right-2 sm: lg:absolute lg:right-2 lg:h-6 lg:w-14 translate-y-0.5 lg:mt-2 transition-transform duration-200"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down border border-[#00FFF9] absolute left-0 top-full z-10 bg-[#220530] shadow-lg rounded-md w-full min-w-[200px] lg:min-w-[300px] overflow-visible text-sm lg:text-lg",
        className
      )}
      {...props}
    >
      <div className="p-4 lg:p-6">{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
