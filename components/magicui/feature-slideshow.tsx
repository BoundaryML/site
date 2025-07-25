'use client';

import { easeOut, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type FeatureItem = {
  id: number;
  title: string;
  content: string;
  image?: string;
  video?: string;
  component?: React.ReactNode;
};
type FeatureProps = {
  featureItems: FeatureItem[];
};

export const Feature = ({ featureItems }: FeatureProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      // y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
      // y: 0,
    },
  };

  const textVariants = (isEven: boolean) => ({
    hidden: {
      opacity: 0,
      x: isEven ? -50 : 50,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: easeOut,
      },
      x: 0,
    },
  });

  const mediaVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      // y: 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.4,
        duration: 0.6,
        ease: easeOut,
      },
      // y: 0,
    },
  };

  return (
    <div className="w-full">
      <motion.div
        className="flex w-full flex-col items-center justify-center max-w-7xl mx-auto"
        initial="hidden"
        variants={containerVariants}
        viewport={{ margin: '-100px', once: true }}
        whileInView="visible"
      >
        <div className="flex flex-col gap-16 px-10 md:px-20 w-full">
          {featureItems.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                className={cn(
                  'flex flex-col lg:flex-row gap-8 lg:gap-12 items-center',
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse',
                )}
                key={item.id}
                variants={itemVariants}
              >
                {/* Text Content */}
                <motion.div
                  className={cn(
                    'flex flex-col gap-4 lg:w-1/2',
                    isEven ? 'lg:pr-8' : 'lg:pl-8',
                  )}
                  variants={textVariants(isEven)}
                >
                  <div className="flex flex-col gap-3">
                    <motion.h2
                      className="text-2xl lg:text-3xl font-bold tracking-tight"
                      initial={{ opacity: 0, y: 20 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileInView={{ opacity: 1, y: 0 }}
                    >
                      {item.title}
                    </motion.h2>
                    <motion.p
                      className="text-base lg:text-lg text-muted-foreground leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileInView={{ opacity: 1, y: 0 }}
                    >
                      {item.content}
                    </motion.p>
                  </div>
                </motion.div>

                {/* Media Content */}
                <motion.div
                  className="lg:w-1/2 w-full"
                  variants={mediaVariants}
                >
                  {item.component && (
                    <motion.div
                      className="w-full rounded-xl border border-border overflow-hidden bg-background"
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.2 },
                      }}
                    >
                      {item.component}
                    </motion.div>
                  )}
                  {item.image && (
                    <motion.div
                      className="w-full aspect-video rounded-xl border border-border overflow-hidden"
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.2 },
                      }}
                    >
                      {/** biome-ignore lint/performance/noImgElement: we need to use img for the image */}
                      <img
                        alt={item.title}
                        className="w-full h-full object-cover"
                        src={item.image}
                      />
                    </motion.div>
                  )}
                  {item.video && (
                    <motion.div
                      className="w-full aspect-video rounded-xl border border-border overflow-hidden"
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <video
                        autoPlay
                        className="w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                        preload="auto"
                        src={item.video}
                      />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
