import * as React from 'react';
import { cva } from 'class-variance-authority';

interface HeroProps {
  children: React.ReactNode;
}

interface HeroContentProps {
  children: React.ReactNode;
}

const HeroVariants = cva(
  '',
)


function Hero({ children }: HeroProps){
  return (
  <section>
      {children}
    </section>
  )
}

function HeroContent(){
  return (
  <div>
    </div>
  )
}

function HeroActions(){
  return (

  )
}

function HeroMedia(){
  return (

  )
}
