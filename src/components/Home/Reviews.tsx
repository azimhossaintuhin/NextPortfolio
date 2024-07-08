import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Reviews: React.FC = (): JSX.Element => {
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="reviews" className="w-full lg:px-28 py-20 md:py-24 px-4 flex lg:flex-row flex-col justify-center lg:justify-normal items-center gap-14 bg-slate-900 mt-20">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center ">
        {/* content */}
        <div className='text-center lg:text-left'>
          <h1 className='text-white text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3'>Reviews</h1>
          <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quos.</p>
        </div>
        {/* reviews */}
        <div className="w-1/2">
          <Carousel>
            <CarouselContent className='lg:1/2'>
              {testimonials.map((data, index) => (
                <CarouselItem key={index}>
                  <Card className='w-full gap-3 px-6 py-6 bg-gray-800 rounded-lg shadow-lg'>
                    <CardContent className='px-5 py-4'>
                      <p className="text-white text-lg font-light">{data.quote}</p>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-emerald-400 rounded-full"></div>
                          <div className="ml-4">
                            <h3 className="text-white font-bold">{data.name}</h3>
                            <p className="text-gray-400">{data.title}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
           
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
