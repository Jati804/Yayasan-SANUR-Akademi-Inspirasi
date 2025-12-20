
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

// Fix: Cast motion components to any to bypass environment-specific type merging issues
const MotionDiv = motion.div as any;

const Counter = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000, bounce: 0 });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString();
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
};

const StatItem = ({ number, suffix, label, delay }: { number: number, suffix: string, label: string, delay: number }) => (
  <MotionDiv 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="text-center p-6"
  >
    <div className="font-heading font-black text-5xl md:text-6xl text-secondary mb-2 flex justify-center items-baseline tabular-nums">
      <Counter value={number} /><span className="text-3xl md:text-4xl ml-1 text-secondary/80">{suffix}</span>
    </div>
    <div className="h-1 w-12 bg-white/30 mx-auto mb-4 rounded-full"></div>
    <p className="text-white/90 font-medium tracking-wide uppercase text-sm md:text-base">{label}</p>
  </MotionDiv>
);

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary via-primary to-primary-dark text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 gap-8 md:gap-0">
            <StatItem number={4} suffix="+" label="Program Unggulan" delay={0} />
            <StatItem number={5} suffix=" / Kelas" label="Peserta Maksimal" delay={0.2} />
            <StatItem number={100} suffix="%" label="Pendampingan Intensif" delay={0.4} />
          </div>
        </div>
    </section>
  );
};

export default Stats;
