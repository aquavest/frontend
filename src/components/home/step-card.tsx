import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface StepCardProps {
  number: number;
  title: string;
  icon: JSX.Element;
}

export function StepCard({ number, title, icon }: StepCardProps) {
  return (
    <article>
      <Card className="w-64 text-center">
        <CardHeader>
          <div className="mx-auto bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mb-4">
            {number}
          </div>
        </CardHeader>
        <CardContent className="flex items-center justify-center space-x-3">
          {icon}
          <h3 className="font-bold text-xl">{title}</h3>
        </CardContent>
      </Card>
    </article>
  );
}
