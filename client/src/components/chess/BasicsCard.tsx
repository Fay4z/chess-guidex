import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ArrowRight, Shapes } from "lucide-react";
import type React from "react";
import { NavLink } from "react-router-dom";

type BaseCardProps = {
  cardHeader: string;
  cardContent: string;
  cardLink: string;
  cardLinkText: string;
};

const BasicsCard: React.FC<BaseCardProps> = ({cardHeader, cardContent, cardLink, cardLinkText}) => {
  return (
    <div>
            <Card className="max-w-xs shadow-none gap-0 pt-0">
        <CardHeader className="py-4 px-5 flex flex-row items-center gap-3 font-semibold">
            <div className="h-8 w-8 flex items-center justify-center bg-primary text-primary-foreground rounded-full">
            <Shapes className="h-5 w-5" />
            </div>
            {cardHeader}
        </CardHeader>

        <CardContent className="mt-1 text-[15px] text-muted-foreground px-5">
            <p>
            {cardContent}
            </p>
            <div className="mt-5 w-full aspect-video bg-muted rounded-xl" />
        </CardContent>

        <CardFooter className="mt-6">
            <Button className="/blocks">
            <NavLink to={cardLink}>{cardLinkText}</NavLink>  <ArrowRight />
            </Button>
        </CardFooter>
        </Card>

        
    </div>
  );
};

export default BasicsCard;
