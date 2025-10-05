import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const DialogCarousel = ({ isOpen, setIsOpen, images }: { isOpen: boolean | number; setIsOpen: (open: boolean | number) => void; images: string[] }) => {
  const start = typeof isOpen === "number" ? isOpen : 0;

  return (
    <Dialog
      open={typeof isOpen === "number" || isOpen}
      onOpenChange={(open) => {
        if (!open) setIsOpen(false);
      }}
    >
      <DialogContent
        className={cn(
          "!max-w-[90vw] md:!max-w-[70vw]",
          "p-0 md:p-8 flex flex-col items-center border-0 shadow-none",
          "focus-visible:outline-none",
          "bg-transparent"
        )}
        closeButtonClassName="-translate-y-8"
      >
        <DialogTitle className="hidden">Gallery</DialogTitle>
        <Carousel className="w-[90%] max-h-full mt-4" opts={{ align: "start", duration: 10, startIndex: start }}>
          <CarouselContent className="h-full">
            {images.map((img, i) => (
              <CarouselItem key={i} className="w-full flex items-center justify-center max-h-full">
                <img src={img} alt={`carousel-${i}`} className="w-full h-auto object-contain" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="opacity-0 md:opacity-100 disabled:opacity-0 md:disabled:opacity-50" />
          <CarouselNext className="opacity-0 md:opacity-100 disabled:opacity-0 md:opacity-50" />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
};

export default DialogCarousel;
