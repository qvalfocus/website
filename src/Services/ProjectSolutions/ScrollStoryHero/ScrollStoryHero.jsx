'use client';

import { useInView } from 'react-intersection-observer';
import { useState, useRef, useEffect, forwardRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lottie from 'lottie-react';

import FactoryValidation from './assets/FactoryValidation.json';
import CleaningValidation from './assets/CleaningValidation.json';
import ComputerValidation from './assets/ComputerValidation.json';
import EnvironmentalMonitoring from './assets/EnvironmentalMonitoring.json';
import TemperatureMapping from './assets/TemperatureMapping.json';
import RemediationService from './assets/RemediationService.json';
import BacklogCloseout from './assets/BacklogCloseout.json';

const steps = [
  { title: "Equipment, Utility & Facility Validation", desc: "CQV with IQ, OQ, PQ, GAMP5.", lottie: FactoryValidation },
  { title: "Cleaning Validation", desc: "Cycle development, COP/CIP/SIP.", lottie: CleaningValidation },
  { title: "Computer System Validation", desc: "Data integrity, SCADA, DeltaV.", lottie: ComputerValidation },
  { title: "Environmental Monitoring", desc: "Continuous cleanroom monitoring.", lottie: EnvironmentalMonitoring },
  { title: "Temperature Mapping", desc: "Mapping for storage & transport.", lottie: TemperatureMapping },
  { title: "Remediation Services", desc: "Gap assessments, root cause, actions.", lottie: RemediationService },
  { title: "Deviation & CAPA Backlog Closeout", desc: "Close deviations, restore compliance.", lottie: BacklogCloseout },
];

export default function ScrollPinnedJourney() {
  const [currentStep, setCurrentStep] = useState(0);
  const [prevStep, setPrevStep] = useState(0);
  const lastStepRef = useRef(0);

  const handleStepChange = (newStep) => {
    if (newStep !== lastStepRef.current) {
      setPrevStep(lastStepRef.current);
      lastStepRef.current = newStep;
      setCurrentStep(newStep);
    }
  };

  const direction = currentStep > prevStep ? 1 : -1;

  return (
    <div className="relative w-full">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-white overflow-hidden">
        <h1 className="text-3xl md:text-5xl font-bold mb-9" style={{ color: '#2d3c53' }}>
          Life Sciences Project Solutions
        </h1>
        <div className="relative w-full h-[70%] flex items-center justify-center overflow-hidden">
          <AnimatePresence initial={false} mode="popLayout">
            <SlideTile key={prevStep} step={steps[prevStep]} index={prevStep} direction={direction} type="exit" />
            <SlideTile key={currentStep} step={steps[currentStep]} index={currentStep} direction={direction} type="enter" />
          </AnimatePresence>
        </div>
      </div>

      {steps.map((_, i) => (
        <StepTrigger key={i} index={i} onChange={handleStepChange} />
      ))}
    </div>
  );
}

function StepTrigger({ index, onChange }) {
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) onChange(index);
  }, [inView, index]);

  return <div ref={ref} className="h-screen w-full" />;
}

const SlideTile = forwardRef(function SlideTile({ step, index, direction, type }, ref) {
  const isEntering = type === 'enter';

  return (
    <motion.div
      ref={ref}
      initial={{ x: isEntering ? (direction > 0 ? '100%' : '-100%') : '0%' }}
      animate={{ x: isEntering ? '0%' : (direction > 0 ? '-100%' : '100%'), opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="absolute w-full flex items-center justify-center"
    >
      <div
        className="w-[750px] h-[420px] rounded-2xl shadow-2xl p-10 flex flex-col justify-between text-white text-center"
        style={{ backgroundColor: '#2d3c53' }}
      >
        <div>
          <h2 className="text-3xl font-bold mb-3">{step.title}</h2>
          <p className="text-lg mb-5">{step.desc}</p>
        </div>
        <Lottie animationData={step.lottie} className="w-36 h-36 mx-auto" />
        <div className="text-sm mt-4">{index + 1} / {steps.length}</div>
      </div>
    </motion.div>
  );
});
