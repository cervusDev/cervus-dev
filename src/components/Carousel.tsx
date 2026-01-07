import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface IProps {
  pictures: string[];
}

export function CarouselSection({ pictures }: IProps) {
  const length = pictures.length;

  if (length === 0) {
    return null;
  }

  const getBasisClass = () => {
    if (length === 0) return "basis-full";
    if (length <= 3) return `basis-1/${length}`;
    return "basis-1/3";
  };
  return (
    <Carousel className="w-full py-4">
      <CarouselContent className="justify-center-safe">
        {pictures.map((url, index) => (
          <CarouselItem className={getBasisClass()} key={index}>
            <div className="p-1">
              <Card className="border-0 shadow-none">
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <img
                    src={url}
                    alt={`Imagem ${index + 1}`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
