import React, { JSX } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const typography = cva("text-foreground", {
    variants: {
        variant: {
            h1: "text-[38px] md:text-[42px] font-bold tracking-tight",
            h2: "text-[32px] md:text-[36px] leading-[38px] font-semibold tracking-tight",
            h3: "text-[28px] md:text-[32px] font-semibold",
            h4: "text-[26px] md:text-[28px] font-semibold",
            h5: "text-[22px] md:text-[24px] font-semibold",
            h6: "text-[22px] font-semibold",
            h7: "text-[20px] font-semibold",
            h8: "text-[18px] font-semibold",
            p: "text-[16px] leading-relaxed",
            muted: "text-sm text-muted-foreground leading-relaxed",
            span: "text-[12px]",
            label: "text-sm font-medium",
            small: "text-[14px] text-muted-foreground",
            display: "text-6xl font-extrabold tracking-tight lg:text-7xl",
        },
        align: {
            left: "text-left",
            center: "text-center",
            right: "text-right",
            justify: "text-justify",
        },

        casing: {
            uppercase: "uppercase",
            lowercase: "lowercase",
            capitalize: "capitalize",
        },
        color: {
            default: "text-foreground",
            muted: "text-muted-foreground",
            white: "text-white",
            primary: "text-primary",
            secondary: "text-secondary",
            destructive: "text-destructive",
            accent:"text-gray-400"
        },
    },
    defaultVariants: {
        variant: "p",
        align: "left",
        color: "default",
    },
});

export type TypographyProps = VariantProps<typeof typography>;

type Props = React.HTMLAttributes<HTMLElement> & TypographyProps;

const variantTagMap: Record<
    NonNullable<TypographyProps["variant"]>,
    keyof JSX.IntrinsicElements
> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    p: "p",
    muted: "p",     // mapped to valid HTML tag
    span: "span",
    label: "label",
    small: "small",
    display: "h1",   // or "p" if you prefer
};

export function Typography({
    variant = "p",
    align,
    casing,
    color,
    className,
    children,
    ...props
}: Props) {
    const Component = variantTagMap[variant] || "p";

    return (
        <Component
            className={cn(typography({ variant, align, casing, color }), className)}
            {...props}
        >
            {children}
        </Component>
    );
}
