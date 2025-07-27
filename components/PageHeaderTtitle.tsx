import React from 'react';
import { Badge } from './ui/badge';
import { Typography } from './ui/Typography';
import { cn } from '@/lib/utils';

const PageHeaderTitle = ({title,description,badge,classDescription,classTitle}:any) => {
    return (
        <div className="space-y-[4px]">
            {badge && <Badge variant="linear">
               {badge}
            </Badge>}
            <Typography variant="h1" className={cn(" mt-[0px] text-[32px] md:text-[44px] text-center  dark:text-black animate-fade-up",classTitle)}>{title}</Typography>
            <Typography variant={"h8"} color="muted" className={cn("text-center max-w-[900px] font-[400] ",classDescription)}>
                {description}
            </Typography>
        </div>
    );
}

export default PageHeaderTitle;
